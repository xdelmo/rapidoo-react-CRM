import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../pages/login.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { Button, FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "../components/SVGs/Visibility";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const style = {
    // border and label color
    "& label.Mui-focused": {
      color: "hsl(var(--clr-primary-900))",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: "1px solid hsl(var(--clr-primary-900))",
      },
    },
    // full border
    "& legend": { display: "none" },
    "& fieldset": { top: 0 },
  };

  return (
    <>
      <div id="login-page" className="flex-center flex-col">
        <h1>Login</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "25ch" }}
        >
          <div>
            {/* email input */}
            <StyledEngineProvider injectFirst>
              <FormControl>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  sx={style}
                  id="standard-password-input"
                  className="textfield"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  variant="outlined"
                  placeholder="Email"
                  required
                />
              </FormControl>
            </StyledEngineProvider>
            {/* password input */}
            <StyledEngineProvider injectFirst>
              <InputLabel shrink={true}></InputLabel>
              <FormControl>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={style}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <div>
                              <Visibility />
                            </div>
                          ) : (
                            <div>
                              <Visibility />
                            </div>
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </StyledEngineProvider>
            {/* button form */}
            <StyledEngineProvider injectFirst>
              <Button
                fullWidth={true}
                margin="normal"
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </StyledEngineProvider>{" "}
          </div>
        </Box>
      </div>
    </>
  );
}

export default Login;
