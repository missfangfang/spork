'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"var(--font-new-york-medium-regular)", serif'
  },
  palette: {
    primary: {
      main: '#b6cd84',
      // contrastText: '#ffffff',
    },
    // secondary: {
    //   main: '#75a47f',
    // }
  }
});

export default theme;