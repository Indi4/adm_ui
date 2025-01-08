import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Dashboard = () => {
  return (
    <Container fluid style={{ backgroundColor: '#F4E4FA', minHeight: '100vh', padding: '20px' }}>
      <Row>
        <Col xs={12} md={3}>
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            LEADER BOARD
          </Typography>
        </Col>
        <Col xs={12} md={9}>
          <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Summary
          </Typography>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={4}>
          <Card style={{ backgroundColor: '#FFD966' }}>
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                204
              </Typography>
              <Typography>Days Since Last Major Accident</Typography>
            </CardContent>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ backgroundColor: '#92D050' }}>
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                78
              </Typography>
              <Typography>Days Since Last Minor Accident</Typography>
            </CardContent>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ backgroundColor: '#FF8080' }}>
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                52
              </Typography>
              <Typography>Days Since Last Quality Incident</Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Sales</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={40.8} size={80} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="text.secondary">
                    40.8%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2">Actual: 1003.4 | Target: 1483.0</Typography>
            </CardContent>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Plan vs Actual</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={36.1} size={80} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="text.secondary">
                    36.1%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2">Actual: 4025.6 | Target: 7139.5</Typography>
            </CardContent>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Purchase</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={50} size={80} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="text.secondary">
                    50%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2">Actual: 201.15 | Target: 400</Typography>
            </CardContent>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Power Unit</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={30} size={80} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="text.secondary">
                    30%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2">Actual: 26.62 | Target: 81.95</Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
