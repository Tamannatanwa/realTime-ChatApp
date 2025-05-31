import { Box, Container, Typography, Tabs, Tab, } from '@mui/material'
import React from 'react'
import styles from './homepage.module.css'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const HomePage = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.appBackground}>
      <Container maxWidth="sm">
        <Box className={styles.centerBox}>
          <Typography variant='h1' className={styles.title}>
            Chat App
          </Typography>
        </Box>
        
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { display: 'none' } }}
            className={styles.tabsContainer}
          >
            {["Signup","Login"].map((label, index) => (
              <Tab
                key={label}
                label={label}
                className={`${styles.tabItem} ${value === index ? styles.activeTab : ''}`}
              />
            ))}
          </Tabs>
        </Box>
        
        <Box className={styles.componentContainer}>
          {value === 1 ? <Login /> : <SignUp />}
        </Box>
      </Container>
    </div>
  )
}

export default HomePage