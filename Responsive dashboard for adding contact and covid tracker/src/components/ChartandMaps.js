import React, { useState } from 'react'
import CovidMap from './CovidMap'
import CovidDashboard from './CovidDashboard'

const ChartandMaps = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center space-x-4 ">
                <button
                    className={`${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        } py-2 px-4 rounded-lg`}
                    onClick={() => handleTabClick('dashboard')}
                >
                    COVID-19 Cases Over Time
                </button>
                <button
                    className={`${activeTab === 'map' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        } py-2 px-4 rounded-lg`}
                    onClick={() => handleTabClick('map')}
                >
                    COVID-19 Cases In World
                </button>
            </div>
            {activeTab === 'dashboard' ? (
                <>
                    <h1 className="text-3xl font-bold mb-4 text-center">COVID-19 Cases Over Time</h1>
                    <CovidDashboard />
                </>
            ) : (
                <>
                    <CovidMap />
                </>
            )}
        </div>
    );
}

export default ChartandMaps