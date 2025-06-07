import React, { useState, useCallback } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showSnackbar = useCallback((message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  }, []);

  const handleCloseSnackbar = useCallback((event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  }, [errors]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showSnackbar('Please fix the errors in the form', 'error');
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API
      const submitData = {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };

      const { data } = await axios.post("http://localhost:3000/api/user/login", submitData, config);
      console.log('Login response:', data);
      
      // Store user info
      localStorage.setItem("userInfo", JSON.stringify(data));

      showSnackbar("Login successful!", "success");

      // Reset form on success
      setFormData({
        email: '',
        password: '',
      });
      
      // Navigate to chats page
      navigate('/chats');

    } catch (error) {
      console.error('Login error:', error);
      
      // Better error handling
      let errorMessage = "Login failed. Please try again.";
      
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        if (status === 401) {
          errorMessage = "Invalid email or password.";
        } else if (status === 404) {
          errorMessage = "User not found. Please check your email.";
        } else {
          errorMessage = error.response.data?.message || error.response.data?.error || errorMessage;
        }
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = "Network error. Please check your connection.";
      } else {
        // Something else happened
        errorMessage = error.message || errorMessage;
      }
      
      showSnackbar(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box p={3} boxShadow={1} borderRadius={2} bgcolor="#fafafa">
        <Typography variant="h5" mb={2}>
          Login Account
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            error={!!errors.email}
            helperText={errors.email}
            disabled={loading}
          />

          <TextField
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            required
            error={!!errors.password}
            helperText={errors.password}
            disabled={loading}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(show => !show)}
                    edge="end"
                    disabled={loading}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </form>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;