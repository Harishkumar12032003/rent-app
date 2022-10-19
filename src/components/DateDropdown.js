import React, { useState, useContext } from 'react';
// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine,RiCalendarCheckFill } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const DateDropdown = () => {
  const { date,setDate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const dates = [
    {
      value: 'Date (any)',
    },
    {
      value: 'This month',
    },
    {
      value: 'next month',
    },
    {
      value: 'in next 6 months',
    },
    {
      value: 'this week',
    },
    {
      value: 'in next 15 days',
    },
    {
      value: 'in next 3 months',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiCalendarCheckFill className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'style={{fontWeight:"700"}}>{date}</div>
          <div className='text-[13px]'>Select Date</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {dates.map((date, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setDate(date.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {date.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;
