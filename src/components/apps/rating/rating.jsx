import React, { Fragment, useState } from 'react'
import { Alert, Button, Card, Col, Modal, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import styled from 'styled-components'
import { Box, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CircleIcon from '@mui/icons-material/Circle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import StarRateIcon from '@mui/icons-material/StarRate'
import Stack from '@mui/material/Stack'
import StarsIcon from '@mui/icons-material/Stars'

export default function Ratings() {
  const breadcrumbs = ["Apps", "Ratings"];
  // alert

  const [value, setValue] = useState(2)
  const [hover, setHover] = useState(-1)

  // On hover event

  const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2', 
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5+'
  }

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
  }

  // Heart Rating

  const StyledRating = styled(Rating)(
    { color: '#F1C40F' }
  )

  // Multi Star Rating

  const StyledStarRating = styled(Rating)(
    { color: '#ff6d75' }
  )

 // Multi Heart Rating

  const StyledheartRating = styled(Rating)(
    { color: '#ff6d75' }
  )


  const onChange = (value) => {
    window.alert(`rating is ${value}`)
  }

  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row className=" row-cards">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Star Rating
              </Card.Title>
            </Card.Header>
            <Card.Body className='text-center'>
              <div className="rating-stars block" id="rating-1" data-stars="2">
                <Box sx={{ '& > legend': { mt: 2 } }} >
                  <Rating name="no-value" size="large" value={3} max={5} />
                </Box>
              </div>

            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Heart Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-2" data-stars="2">
                <Box sx={{ '& > legend': { mt: 2 } }} >
                  <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />
                </Box>
              </div>

            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Multi Star Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-3" data-stars="2">
                <Box sx={{ '& > legend': { mt: 2 } }} >
                  <StyledStarRating name="no-value" size="large" value={3} max={8} />
                </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Multi Heart Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block">
              <Box sx={{ '& > legend': { mt: 2 }, }}>
									<StyledheartRating name="no-value" size="large" htmlFor=""  value={3} max={8} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
								</Box>
            
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Multi circle Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-4" data-stars="2">
                <Box sx={{ '& > legend': { mt: 2 } }} >
                  <Rating name="no-value" size="large" value={3} max={8}
                    icon={<CircleIcon fontSize="inherit" />}
                    emptyIcon={<CircleIcon fontSize="inherit" />} />

                </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Thumbs-up Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block" id="rating-5" data-stars="2">
                <Box sx={{ '& > legend': { mt: 2 } }} >
                  <Rating name="no-value" size="large" value={3} max={5}
                    icon={<ThumbUpIcon fontSize="inherit" />}
                    emptyIcon={<ThumbUpIcon fontSize="inherit" />} />
                </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-cards">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Basic Star Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating">
                <Stack spacing={1} className="rating-stars block my-rating">
                  <Rating name="half-rating" value={3} precision={0.5} size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />} />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Rounded star Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars  block my-rating-4" data-rating="2">
                <Stack spacing={1} className="rating-stars  block my-rating-4">
                  <Rating name="half-rating" value={3} precision={0.5} size="large"
                    icon={<StarsIcon fontSize="inherit" />}
                    emptyIcon={<StarsIcon fontSize="inherit" />} />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                gradients Rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-5" data-rating="5">
                <Stack spacing={1} className="rating-stars block my-rating-5">
                  <Rating name="half-rating" value={3} precision={0.5} size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />} />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Execute callback when rating
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-6" data-rating="2">
                <Stack spacing={1} className="rating-stars block my-rating-6">
                  <Rating name="half-rating" value={3} precision={0.5} size="large" onChange={onChange}
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />} />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                read only mode
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="rating-stars block my-rating-7" data-rating="2">
                <Stack spacing={1} className="rating-stars block my-rating-7">
                  <Rating name="half-rating-read" value={3} max={5} size="large" readOnly />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                On hover event
              </Card.Title>
            </Card.Header>
            <Card.Body>

              <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover)
                  }}
                  emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}

                />
                {value !== null && (
                  <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
