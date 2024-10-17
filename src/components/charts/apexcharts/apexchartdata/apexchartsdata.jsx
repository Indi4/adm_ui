import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

// Stacked Bar

export class StackedBar extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [{
        name: 'Data 1',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Data 2',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Data 3',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Data 4',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Data 5',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      options: {
        dataLabels: {
          enabled: false
        },
        chart: {
          type: 'bar',
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },

        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
          labels: {
            formatter: function (val) {
              return val + 'K'
            },
            rotate: -90
          }
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + 'K'
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      }

    }
  }

  render () {
    return (
 
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
 

    )
  }
};

// AreaChart

export class StackedAreaChart extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [
        {
          name: 'South',
          data: [120, 232, 301, 434, 290, 130, 410]
        },
        {
          name: 'North',
          data: [520, 432, 601, 634, 390, 330, 520]
        },
        {
          name: 'Central',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ],
      options: {
        chart: {
          type: 'area',
          height: 350,
          stacked: true

        },
        colors: ['#f1b7c4', '#8a9ce4', '#c1c2f0'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center'
        }
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
          </div>
    )
  }
};

// Dashed line Chart with Gradient color

export class Dashedline extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line'
        },
        forecastDataPoints: {
          count: 7
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), ' MMM')
            },
            rotate: -90
          }
        },
        title: {
          style: {
            fontSize: '16px',
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        yaxis: {
          min: -10,
          max: 40
        }
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
          </div>

    )
  }
};

// Stacked Column Chart

export class StackedColumn extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [{
        name: 'Data A',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Data B',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'Data C',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'Data D',
        data: [21, 7, 25, 13, 22, 8]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          }
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
          ]
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }

    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
          </div>
    )
  }
};

// Mixed Line Column Area

export class LineColumnArea extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [{
        name: 'Data A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        color: '#f7557a'
      }, {
        name: 'Data B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        color: '#285cf7'
      }, {
        name: 'Data C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        color: '#4ecc48'
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],

        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {

          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' points'
              }
              return y
            }
          }
        }
      }
    }
  }

  render () {
    return (

          <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>

    )
  }
}
