import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../pages/login.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { Button, FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "../components/SVGs/VisibilityPassword";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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
              <FormControl fullWidth={true}>
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
                  onChange={(e) => setLoginValue(e.target.value)}
                />
              </FormControl>
            </StyledEngineProvider>
            {/* password input */}
            <StyledEngineProvider injectFirst>
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
                  onChange={(e) => setPasswordValue(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" className="flex-center">
                        <IconButton
                          sx={{ marginRight: "16px" }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <Visibility />}
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
                disabled={loginValue.length === 0 || passwordValue.length === 0}
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
