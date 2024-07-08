'use client'

import React from "react";
import { TextField, ThemeProvider } from "@mui/material";
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

  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <main className="flex flex-row min-h-screen min-w-screen bg-white">
        <div className="bg-green w-1/2"/>
        <div className="w-1/2 px-44 py-40 text-center">
          <div className="font-md-bold text-green text-3xl">Spork</div>
          <div className="font-md-reg-italic text-gray-600 mt-2 mb-8">Say goodbye to recipe guesswork</div>
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
              className="mt-4 mb-1"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                    borderWidth: '2px'
                  },
                  '&:hover fieldset': {
                    borderColor: '#B99470',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                }
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                      {showPassword ? <VisibilityOff/> : <Visibility/>}
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
              className="my-4 text-base h-12"
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
            <span className="text-green font-md-bold pl-1">Sign up</span>
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default PageClient;