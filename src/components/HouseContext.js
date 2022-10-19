import React, { createContext, useState, useEffect } from 'react';

// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [date,setDate]=useState("Date (any)")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);



  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        house.date==date
      ) {
        return house;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price) && isDefault(date)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price) && isDefault(date)) {
        return house.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)&& isDefault(date)) {
        return house.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)&& !isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice && house.date==date) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)&& !isDefault(date)) {
        return house.country === country && house.type === property && house.date==date;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)&& !isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice && house.date==date) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)&& !isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice && house.date==date) {
          return house.type === property;
        }
      }

      //all default except date
      if (isDefault(country) && isDefault(property) && isDefault(price)&& !isDefault(date)) {
        if (house.date==date) {
          return house;
        }
      }

      if (isDefault(country) && isDefault(property) && !isDefault(price)&& isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && !isDefault(price)&& !isDefault(date)) {
        if (house.date==date && housePrice >= minPrice && housePrice <= maxPrice&&house.type === property&&house.country === country) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && !isDefault(price)&& isDefault(date)) {
        if ( housePrice >= minPrice && housePrice <= maxPrice&&house.type === property&&house.country === country) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)&& isDefault(date)) {
        if (house.type === property&&house.country === country) {
          return house;
        }
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)&& isDefault(date)) {
        if ( housePrice >= minPrice && housePrice <= maxPrice&&house.country === country) {
          return house;
        }
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)&& isDefault(date)) {
        if ( housePrice >= minPrice && housePrice <= maxPrice&&house.type === property) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)&& isDefault(date)) {
        if (house.type === property&&house.country === country) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)&& isDefault(date)) {
        if (house.type === property&&house.country === country) {
          return house;
        }
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)&& !isDefault(date)) {
        if (house.date==date &&house.country === country) {
          return house;
        }
      }

      if (isDefault(country) && isDefault(property) && !isDefault(price)&& !isDefault(date)) {
        if (house.date==date && housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)&& isDefault(date)) {
        if (housePrice >= minPrice && housePrice <= maxPrice&&house.country === country) {
          return house;
        }
      }

      if (isDefault(country) && !isDefault(property) && isDefault(price)&& !isDefault(date)) {
        if (house.date==date &&house.type === property) {
          return house;
        }
      }
    });
    
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
        date,
        setDate,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
