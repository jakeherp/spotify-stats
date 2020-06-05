import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import Styles from './styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Styles />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }
`;

export default Layout;
