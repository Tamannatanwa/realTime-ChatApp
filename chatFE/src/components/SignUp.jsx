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
import { useNavigate } from 'react-router-dom'; // Updated import

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    pic: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [preview, setPreview] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // Updated hook

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dsrmblyj8"); // Fixed: consistent cloud name

    try {
      // Fixed: consistent cloud name in URL
      const response = await fetch("https://api.cloudinary.com/v1_1/dsrmblyj8/image/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Upload failed');
      }

      const result = await response.json();
      return result.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error(`Image upload failed: ${error.message}`);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value: inputValue, files } = e.target;

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'pic') {
      const file = files[0];

      if (!file) {
        setFormData(prev => ({ ...prev, pic: null }));
        setPreview(null);
        return;
      }

      // Validate file type
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        showSnackbar('Please select a valid image file (PNG, JPEG, JPG, WebP)', 'error');
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        showSnackbar('File size must be less than 5MB', 'error');
        return;
      }

      setFormData(prev => ({ ...prev, pic: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData(prev => ({ ...prev, [name]: inputValue }));
    }
  }, [errors, showSnackbar]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showSnackbar('Please fix the errors in the form', 'error');
      return;
    }

    setLoading(true);

    try {
      let profilePicUrl = '';

      // Upload image if selected
      if (formData.pic) {
        try {
          profilePicUrl = await uploadToCloudinary(formData.pic);
        } catch (uploadError) {
          showSnackbar(uploadError.message, 'error');
          setLoading(false);
          return;
        }
      }

      // Prepare data for API
      const submitData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        profilePicture: profilePicUrl,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };

      const { data } = await axios.post("http://localhost:3000/api/user/register", submitData, config);
      console.log('Registration response:', data);
      
      // Store user info
      localStorage.setItem("userInfo", JSON.stringify(data));

      showSnackbar("Account created successfully!", "success");

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        pic: null,
      });
      setPreview(null);
      
      // Navigate to chats page
      navigate('/chats');

    } catch (error) {
      console.error('Registration error:', error);
      
      // Better error handling
      let errorMessage = "Registration failed. Please try again.";
      
      if (error.response) {
        // Server responded with error status
        errorMessage = error.response.data?.message || error.response.data?.error || errorMessage;
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

  // Clean up preview URL on unmount
  React.useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <Container maxWidth="sm">
      <Box p={3} boxShadow={1} borderRadius={2} bgcolor="#fafafa">
        <Typography variant="h5" mb={2}>
          Create Account
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
            error={!!errors.name}
            helperText={errors.name}
            disabled={loading}
          />

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

          <TextField
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            required
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            disabled={loading}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirm(show => !show)}
                    edge="end"
                    disabled={loading}
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
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
            disabled={loading}
          >
            Upload Profile Picture
            <input
              type="file"
              name="pic"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              hidden
              onChange={handleChange}
            />
          </Button>

          {formData.pic && (
            <Typography variant="body2" color="textSecondary">
              Selected: {formData.pic.name}
            </Typography>
          )}

          {preview && (
            <Box mt={2} textAlign="center">
              <img
                src={preview}
                alt="Profile Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '200px',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
            </Box>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
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

export default SignUp;