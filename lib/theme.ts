'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"var(--font-new-york-medium-regular)", serif'
  },
  palette: {
    primary: {
      main: '#b6cd84',
      // TODO: May need to use contrastText: '#ffffff',
    },
  }
});

export default theme;