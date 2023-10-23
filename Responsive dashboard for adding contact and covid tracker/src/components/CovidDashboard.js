import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Import date-fns adapter
import * as ChartJs from 'chart.js';

ChartJs.Chart.register.apply(null, Object.values(ChartJs).filter((chartClass) => (chartClass.id)));

new ChartJs.Chart()

const CovidDashboard = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
                );
                setData(response.data);
                console.log(Object.values(response.data.cases))
                setLoading(false);
            } catch (error) {
                console.error('Error fetching COVID-19 data:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="p-4 bg-white rounded shadow">
            {loading ? (
                <p>Loading COVID-19 data...</p>
            ) : (
                <Line data={{
                    labels: Object.keys(data.cases),
                    datasets: [
                        {
                            label: 'Total Cases',
                            data: Object.values(data.cases),
                            borderColor: 'rgba(75, 192, 192)',
                            borderWidth: 1,
                            fill: false,
                        },
                    ],
                }}
                />
            )}
        </div>
    );
};

export default CovidDashboard;
