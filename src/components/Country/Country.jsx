import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  //* for visited or going button
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{ color: visited ? 'Purple' : 'white' }}>{name.common}</h3>
      <img style={{width: '350px', height: '200px'}} src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <br />
      {/* to avoid auto call make an arrow function and return will be the main function */}
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      {/* to avoid auto call make an arrow function and return will be the main function */}
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country.' : 'I want to visit.'}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
