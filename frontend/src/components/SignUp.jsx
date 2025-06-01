import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignUp = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    pic: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value: inputValue, files } = e.target;
    if (name === 'pic') {
      setValue((prev) => ({
        ...prev,
        pic: files[0],
      }));
    } else {
      setValue((prev) => ({
        ...prev,
        [name]: inputValue,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <Container maxWidth="sm">
      <Box p={3} boxShadow={1} borderRadius={2} bgcolor="#fafafa">
        <Typography variant="h5" mb={2}>
          Create Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            value={value.name}
            onChange={handleChange}
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="email"
            value={value.email}
            onChange={handleChange}
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="password"
            value={value.password}
            onChange={handleChange}
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((show) => !show)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="confirmPassword"
            value={value.confirmPassword}
            onChange={handleChange}
            fullWidth
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirm((show) => !show)} edge="end">
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2, mb: 1 }}
          >
            Upload Profile Picture
            <input
              type="file"
              name="pic"
              accept="image/*"
              hidden
              onChange={handleChange}
            />
          </Button>
          {value?.pic && (
            <Typography variant="body2" color="textSecondary">
              Selected: {value?.pic?.name}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
