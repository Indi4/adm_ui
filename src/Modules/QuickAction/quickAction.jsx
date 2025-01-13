import React from 'react';
import { Grid, Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';

const pages = [
  { name: 'Quality', path: '/quality' },
  { name: 'Safety', path: '/safety' },
  { name: 'Production', path: '/production' },
  { name: 'Utility', path: '/utility' },
  { name: 'Sales', path: '/sales' },
  { name: 'HR', path: '/hr' },
  { name: 'Finance', path: '/finance' },
];

const QuickAction = () => {
  const handleNavigate = (path) => {
    // Logic to navigate to the path (e.g., using React Router)
    window.location.href = path; // Replace with `navigate(path)` if using React Router
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Quick Actions
      </Typography>
      <Grid container spacing={4}>
        {pages.map((page, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              onClick={() => handleNavigate(page.path)}
              sx={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0px 4px 5px rgba(41, 128, 185, 0.4)',
                padding: 3,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 5px rgba(0, 0, 0, 0.2)',
                  background: '#0d6b91a3',
                  color: '#fff',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 'bold',
                }}
              >
                {page.name}
              </Typography>
              <Typography color="textSecondary" variant="body2" sx={{ mb: 2 }}>
                Access the {page.name} page.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#0d6efd',
                  '&:hover': {
                    backgroundColor: '#0056b3',
                  },
                }}
              >
                Go to {page.name}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickAction;
