import React, { Component } from 'react';

const Home = () => {

    return (
        <div>

            <div className="header" >
                <h2>Weather Forecast</h2>
            </div>

            <div className="instructions" >
                <p>Enter the longitude and lattitude of your location!</p>
            </div>

            <div className="location-input" >
                <form method="POST" action="/get-location" >
                    <input type="text" placeholder="Enter lattitude" name="lattitude" />
                    <input type="text" placeholder="Enter longitude" name="longitude" />
                    <button>Enter</button>
                </form>
            </div>

        </div>
    )

}