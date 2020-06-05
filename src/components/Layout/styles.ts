import { createGlobalStyle } from 'styled-components';

export const colours = {
  primary: '#16a749',
  secondary: '#4f98ef',
  lightGrey: '#F5F6FA',
  darkGrey: '#A2A2A2',
};

export const defaults = {
  boxShadow: 'rgba(0, 0, 0, 0.08) 1px 1px 2px',
};

const Styles = createGlobalStyle`
  body {
    background: ${colours.lightGrey};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  a {
    border-bottom: 3px solid ${colours.secondary};
    color: inherit;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      border-bottom: 3px solid ${colours.primary};
    }
  }
`;

export default Styles;
