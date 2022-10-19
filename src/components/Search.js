import React, { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';
import styled from 'styled-components';
import DateDropdown from './DateDropdown';

const Container=styled.div`
    margin-top:60px;
    margin-bottom:20px;
`;

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <Container>
      <div className='px-[30px] py-6 max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-grey lg:bg-transparent lg:backdrop-blur rounded-lg'>
        <CountryDropdown />
        <DateDropdown></DateDropdown>
        <PropertyDropdown />
        <PriceRangeDropdown />
        <button
          onClick={() => {
            handleClick();
          }}
          className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
        >
          <RiSearch2Line />
        </button>
      </div>
    </Container>
    
  );
};

export default Search;
