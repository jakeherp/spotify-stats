import React from 'react';
import styled from 'styled-components';
import { GrSpotify } from 'react-icons/gr';

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <GrSpotify />
        <Title>Spotify Top Listened</Title>
      </Wrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #000;
  color: #fff;
  padding: 1.5rem 1rem;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

    svg {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 3rem;
  margin: 0;
  display: block;
`;

export default Header;
