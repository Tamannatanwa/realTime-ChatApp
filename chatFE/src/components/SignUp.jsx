import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Snackbar, Alert
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
  const [preview, setPreview] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // can be 'success' | 'error' | 'info' | 'warning'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };


  const handleChange = (e) => {
    const { name, value: inputValue, files } = e.target;
    if (name === 'pic') {
      const file = files[0];
      if (files.length === 0) {
        showSnackbar('No file selected', 'warning')
        setValue((prev) => ({
          ...prev,
          pic: '',
        }));
        setPreview(null);
        return;
      }

      if (value.pic.type === "image/png" || value.pic.type === "image/jpeg") {
        const data = new FormData();
        data.append("file", value.pic);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "dsrmblyj8b"); //cloud name form cludanary
        fetch("https://api.cloudinary.com/v1_1/dsrmblyj8b/image/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log( data);
            setValue((prev) => ({
              ...prev,
              pic: data.secure_url,
            }));
            showSnackbar("Image uploaded successfully!", "success");
          })
          .catch((err) => {
            console.error(err);
            showSnackbar("Image upload failed!", "error");
          });
      }

      setValue((prev) => ({
        ...prev,
        pic: file,
      }));
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setValue((prev) => ({
        ...prev,
        [name]: inputValue,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(value);
    // Example validation
    if (value.password !== value.confirmPassword) {
      showSnackbar("Passwords do not match!", "error");
      return;
    }

    showSnackbar("Account created successfully!", "success");
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
          {preview && (
            <Box mt={2} textAlign="center">
              <img
                src={preview}
                alt="Profile Preview"
                style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }}
              />
            </Box>
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
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

    </Container>
  );
};

export default SignUp;
