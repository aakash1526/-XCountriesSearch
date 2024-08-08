import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <h2>{country.name.common}</h2>
    </div>
  );
};

export default CountryCard;
