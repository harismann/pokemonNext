import React from 'react';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    textBold: React.CSSProperties;
    text: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    textBold: React.CSSProperties;
    text: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleLarge: true;
    titleMedium: true;
    textBold: true;
    text: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary'];
    orange: Palette['primary'];
    yellow: Palette['primary'];
    green: Palette['primary'];
    purple: Palette['primary'];
    red: Palette['primary'];
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    blue: PaletteOptions['primary'];
    orange: PaletteOptions['primary'];
    yellow: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
  }
}

export default createTheme({
  palette: {
    blue: {
      light: '#0571A6',
      main: '#0571A6',
      dark: '#0571A6',
    },
    orange: {
      light: '#E66D00',
      main: '#E66D00',
      dark: '#E66D00',
    },
    yellow: {
      light: '#E6AB09',
      main: '#E6AB09',
      dark: '#E6AB09',
    },
    green: {
      light: '#01B956',
      main: '#01B956',
      dark: '#01B956',
    },
    purple: {
      light: '#3C48CF',
      main: '#3C48CF',
      dark: '#3C48CF',
    },
    red: {
      light: '#DE2C2C',
      main: '#DE2C2C',
      dark: '#DE2C2C',
    },
    neutral: {
      light: '#FFFFFF',
      main: '#B3B6B8',
      dark: '#42494D',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      cursor: 'pointer',
    },
    fontFamily: [
      'poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    titleMedium: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '60px',
    },
    textBold: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '30px',
    },
    text: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '30px',
    },
    titleLarge: {
      fontSize: '50px',
      fontWeight: 700,
      lineHeight: '60px',
    },
  },
});
