import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
  background-color:#B1AFFF;
  height:80px;
`;
const Footer = () => {
  return (
    <Container>
    <footer className=' py-8 text-center text-white'>
      <div className='container mx-auto'>
        Copyright &copy; 2022. All rights reserved.
      </div>
    </footer>
    </Container>
  );
};

export default Footer;
