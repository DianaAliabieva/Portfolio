import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Card, Row, Col, Typography, Space } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

function CountryDetails() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const countryParam = params.get('country');
    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        // Effectuez une requête axios pour obtenir les détails du pays
        if (countryParam) {
            axios.get(`https://restcountries.com/v3/all`)
                .then(response => {
                    const countryData = response.data.find(country =>
                        country.name.common === countryParam
                    );

                    if (countryData) {
                        setCountryDetails(countryData);
                        console.log(countryData);
                    } else {
                        console.error('Pays non trouvé');
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des détails du pays :', error);
                });
        }
    }, [countryParam]);

    return (
        <div className='container2'>
        {countryDetails && (
            <div className='details'>
                <div className='flag'>
                    {countryDetails.flags && <img alt='Flag' src={countryDetails.flags[0]} />}
                </div>
                <div className='info'>
                    <p className='pc'>{countryDetails.name.common}</p>
                    <h2>Capital: {countryDetails.capital && countryDetails.capital[0]}</h2>
                    {countryDetails.currencies && Object.keys(countryDetails.currencies).map((currencyCode, index) => (
                        <div key={index}>
                            <p>Currency: {countryDetails.currencies[currencyCode].name}</p>
                            <p>Symbol: {countryDetails.currencies[currencyCode].symbol}</p>
                        </div>
                    ))}
                    <p>Population: {countryDetails.population}</p>
                    <p>Area: {countryDetails.area} km²</p>
                    {countryDetails.languages && Object.values(countryDetails.languages).map((language, index) => (
                        <p key={index}>Language: {language}</p>
                    ))}
                </div>
            </div>
        )}
    </div>
    
    );
}

export default CountryDetails;
