import React from 'react';
import styled from 'styled-components';
import { GrGithub } from 'react-icons/gr';

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} <a href="https://herper.io/">Jacob Herper</a></p>
      <a href="https://github.com/jakeherp/spotify-stats"><GrGithub /> Find code on Github</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 1.5rem 2rem;
  text-align: center;
`;

export default Footer;
