import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';

const CovidMap = () => {
    const [countryData, setCountryData] = useState([]);
    const [worldData, setWorldData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const worldResponse = await axios.get(
                    'https://disease.sh/v3/covid-19/all'
                );
                setWorldData(worldResponse.data);

                const countriesResponse = await axios.get(
                    'https://disease.sh/v3/covid-19/countries'
                );
                setCountryData(countriesResponse.data);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching COVID-19 data:', error);
            }
        }
        fetchData();
    }, []);

    const iconSvgString = renderToStaticMarkup(<LocationOnIcon />);
    const markerIcon = L.divIcon({
        className: 'custom-marker-icon',
        html: iconSvgString,
        iconSize: [20, 20],
    });

    return (
        <div className="covid-map h-screen">
            <h1 className="text-2xl font-bold text-center mb-4">
                COVID-19 World Map
            </h1>
            <MapContainer
                center={[0, 0]}
                zoom={2}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {countryData.map((country) => (
                    <Marker
                        key={country.country}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                        icon={markerIcon}
                    >
                        <Popup>
                            <div className="p-4 border border-gray-300 rounded-lg bg-white">
                                <h3 className="text-lg font-semibold mb-2 border-b pb-2">{country.country}</h3>
                                <p className="text-sm border-b pb-2">
                                    <span className="font-semibold">Total Cases:</span> {country.cases}
                                </p>
                                <p className="text-sm border-b pb-2">
                                    <span className="font-semibold">Total Deaths:</span> {country.deaths}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Total Recovered:</span> {country.recovered}
                                </p>
                            </div>
                        </Popup>


                    </Marker>
                ))}
                {loading && (
                    <p className="text-center">Loading COVID-19 data...</p>
                )}
            </MapContainer>
        </div>
    );
};

export default CovidMap;
