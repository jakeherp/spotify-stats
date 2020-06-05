import React from 'react';
import styled from 'styled-components';

const LoginScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  background: #aa4b6b;
  background: -webkit-linear-gradient(to top, #aa4b6b, #6b6b83, #3b8d99);
  background: linear-gradient(to top, #aa4b6b, #6b6b83, #3b8d99);
  padding: 2rem 1rem;
  color: #fff;
`;

export default LoginScreen;
