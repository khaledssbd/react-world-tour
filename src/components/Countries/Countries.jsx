import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //* for showing visited country name in top
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = country => {
    if (visitedCountries.includes(country)) {
      const newVisitedCountries = visitedCountries.filter(c => c !== country);
      setVisitedCountries(newVisitedCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  //* for showing visited country flag in top
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedFlags = flag => {
    if (visitedFlags.includes(flag)) {
      const newVisitedFlags = visitedFlags.filter(f => f !== flag);
      setVisitedFlags(newVisitedFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  //! remove item from an array in a state
  //! use filter to select all the elements except the one you want to remove

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      {/* total country count */}
      <h3>Countries: {countries.length}</h3>

      {/* visited country name */}
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map(country => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* visited country flag */}
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map(country => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
