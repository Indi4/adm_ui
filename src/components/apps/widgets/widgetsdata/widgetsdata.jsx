/* eslint-disable react/jsx-key */
import React, { Component, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'



import photo1 from '../../../../assets/images/photos/1.jpg'
import photo2 from '../../../../assets/images/photos/2.jpg'
import photo3 from '../../../../assets/images/photos/3.jpg'
import photo4 from '../../../../assets/images/photos/4.jpg'
import photo5 from '../../../../assets/images/photos/5.jpg'
import photo6 from '../../../../assets/images/photos/6.jpg'
import { Link } from 'react-router-dom'


export class Profit extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [75],
      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '60%'
            },

            dataLabels: {
              showOn: 'always',
            
              value: {
                color: 'gray',
                offsetY: -10,
                fontSize: '13px',
                show: true
              }
            }
          }
        },
        colors: ['rgba(96, 82, 159,0.9)'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={180} />
          </div>
    )
  }
};
// Stacked Column Chart

export class Opex extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [55],

      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '60%'
            },

            dataLabels: {
              showOn: 'always',
             
              value: {
                color: 'gray',
                offsetY: -10,
                fontSize: '13px',
                show: true
              }
            }
          }
        },
        colors: ['rgba(50, 202, 254,0.9)'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={180} />
          </div>
    )
  }
};

// Operating

export class Operating extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [30],

      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '60%'
            },

            dataLabels: {
              showOn: 'always',
              value: {
                color: 'gray',
                offsetY: -10,
                fontSize: '13px',
                show: true
              }
            }
          }
        },
        colors: ['rgba(255, 204, 0, 0.9)'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={180} />
          </div>
    )
  }
};

//  Net Profit Margin

export class Margin extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [45],

      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '60%'
            },

            dataLabels: {
              showOn: 'always',
              value: {
                color: 'gray',
                offsetY: -10,
                fontSize: '13px',
                show: true
              }
            }
          }
        },
        colors: ['rgba(34, 192, 60,0.9)'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={180} />
          </div>
    )
  }
};

// Shares of Project

export class Project1 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [67],
      options: {
        chart: {
          height: 280 ,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '40%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ['#467fcf'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['Volatility']
      }

    }
  }

  render () {
    return (

          <div className='chart-circle-value fs' id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={190} />
          </div>
    )
  };
}
// Total Projects

export class Project2 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [67],

      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '40%'
            },

            dataLabels: {
              showOn: 'always',
              value: {
                show: false
              }
            }
          }
        },
        colors: ['#32cafe'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div className="chart-circle-value fs" id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={190} />
          </div>
    )
  }
};

//  Users Of Projects

export class Project3 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [67],

      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '40%'
            },

            dataLabels: {
              showOn: 'always',
              value: {
                show: false
              }
            }
          }
        },
        colors: ['#fdb901'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div className="chart-circle-value fs" id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={190} />
          </div>
    )
  }
};

//  Review Projects

export class Project4 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [67],

      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '40%'
            },

            dataLabels: {
              showOn: 'always',
              value: {
                show: false
              }
            }
          }
        },
        colors: ['#5ed84f'],
        stroke: {
          lineCap: 'round'
        },
        labels: ['']
      }

    }
  }

  render () {
    return (

          <div className="chart-circle-value fs" id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={190} />
          </div>
    )
  }
};

//  Pie charts

export class Pie1 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series3: [35, 62],
      options3: {
        chart: {
          type: 'pie',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#467fcf', '#f2f3f6'],
        stroke: {
          width: 1
        },
        tooltip: {
          enabled: false
        }
      }

    }
  }

  render () {
    return (

          <div className="pie" id="chart">
           
              <ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={55} width={55} />
          </div>
    )
  }
};
//  Profits
export class Pie2 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series3: [55, 30],
      options3: {
        chart: {
          type: 'pie',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#5eba00', '#f2f3f6'],
        stroke: {
          width: 1
        },
        tooltip: {
          enabled: false
        }
      }

    }
  }

  render () {
    return (

          <div className="pie" id="chart">
          
              <ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={55} width={55} />
          </div>
    )
  }
};

//  Total sales

export class Pie3 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series3: [55, 30],
      options3: {
        chart: {
          type: 'pie',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#ff7708', '#f2f3f6'],
        stroke: {
          width: 1
        },
        tooltip: {
          enabled: false
        }
      }

    }
  }

  render () {
    return (

          <div className="pie" id="chart">
              
              <ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={55} width={55} />
          </div>
    )
  }
};

//  Total Orders

export class Pie4 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series3: [55, 30],
      options3: {
        chart: {
          type: 'pie',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#f35e90', '#f2f3f6'],
        stroke: {
          width: 1
        },
        tooltip: {
          enabled: false
        }
      }

    }
  }

  render () {
    return (

          <div className="pie" id="chart">
           
              <ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={55} width={55} />
          </div>
    )
  }
};

//  Barcharts

export class Bar1 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series6: [{
        data: [6,2, 8,4, 3,8, 1,3, 6, 5,9,2, 8,1, 4,8, 9,8, 2,1],
        show: false
      },
      
    ],

      options6: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#ff695c', '#ff4f7b'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {
           
          },
          marker: {
            show: true
          }
        }
      }

    }
  }

  render () {
    return (
  
              
              <ReactApexChart  options={this.state.options6} series={this.state.series6} type="bar" height={55}
             
               />
   

    )
  }
};

export class Bar2 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series6: [{
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 3, 7, 2, 9]
      }],
      options6: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#32cafe', '#3582ec'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {
           
          },
          marker: {
            show: true
          }
        }
      }

    }
  }

  render () {
    return (
 
            
              <ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={55} />
   

    )
  }
};

export class Bar3 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series6: [{
        data: [3, 7, 9, 4, 2, 8, 4, 6, 4, 9, 2, 3, 9, 4, 1, 7, 3, 9, 8, 4, 5]
      }],
      options6: {
        chart: {
          type: 'bar',
          width: 300,
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#ecd53e', '#efaf28'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {
           
          },
          marker: {
            show: true
          }
        }
      }

    }
  }

  render () {
    return (
   
             
              <ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={55} />


    )
  }
};

export class Bar4 extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series6: [{
        data: [2, 7, 3, 9, 4, 5, 2, 8, 4, 6, 5, 2, 8, 4, 7, 2, 4, 6, 4, 8, 4]
      }],
      options6: {
        chart: {
          type: 'bar',
          width: 300,
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          }
        },
        datacolors: ['#63d457', '#3cbf2d'],
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
      
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true
          },
          fill:
            ['#63d457', '#3cbf2d'],
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {
           
          },
          marker: {
            show: true
          }
        }
      }

    }
  }

  render () {
    return (
  
           
              <ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={55} />
    
    )
  }
};

// gallery

export const LightboxGallery = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
         <img className='d-block img-fluid w-100 br-7' src={photo1} alt='photo1' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img className='d-block img-fluid w-100 br-7' src={photo2} alt='photo2' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img className='d-block img-fluid w-100 br-7' src={photo3} alt='photo3' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img className='d-block img-fluid w-100 br-7' src={photo4} alt='photo4' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img className='d-block img-fluid w-100 br-7' src={photo5} alt='photo5' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img className='d-block img-fluid w-100 br-7' src={photo6} alt='photo6' onClick={() => setOpen(true)} />
          
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
      }}
        slides={[{ src: photo1 }, { src: photo2 }, { src: photo3 }, { src: photo4 }, { src: photo5 }, { src: photo6 }

        ]}
        />
    </div>
  )
}
