'use client';

import React from 'react';
import { TextField, ThemeProvider } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import theme from '../../lib/theme';

function PageClient() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  function handleClickShowPassword(): void {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    event.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <main className="min-w-screen flex min-h-screen flex-row bg-white">
        <div className="w-1/2 bg-green" />
        <div className="w-1/2 px-44 py-40 text-center">
          <div className="font-md-bold text-3xl text-green">Spork</div>
          <div className="mb-8 mt-2 font-md-reg-italic text-gray-600">
            Say goodbye to recipe guesswork
          </div>
          <div className="flex flex-col">
            <TextField
              label="Email"
              id="outlined-basic"
              variant="outlined"
              size="medium"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#B99470',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <FormControl
              variant="outlined"
              size="medium"
              className="mb-1 mt-4"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#B99470',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="primary"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <div className="self-end text-green">Forgot password</div>
            <Button
              variant="contained"
              size="large"
              disableElevation
              className="my-4 h-12 text-base"
              sx={{
                color: '#ffffff',
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: '#a4cc47',
                },
              }}
            >
              Sign In
            </Button>
          </div>
          <div className="text-center">
            Don&apos;t have an account?
            <span className="pl-1 font-md-bold text-green">Sign up</span>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default PageClient;
