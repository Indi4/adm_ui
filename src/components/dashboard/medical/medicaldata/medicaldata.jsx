import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import ReactECharts from 'echarts-for-react'

// Patients Visit

export class Patients extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [{
        name: 'In Patient',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55]
      }, {
        name: 'Out Patient',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 85, 101]
      }],
      options: {
        chart: {
          height: 320,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
          
            topRight: 2,
            topLeft: 2

          }
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.08)'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
          fontSize: '12px',
          labels: {
            colors: '#74767c'
          },
          markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            radius: 10,
            offsetX: 0,
            offsetY: 0
          }
        },
       
        colors: ['#5797fc', '#5eba00'],
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: false,
            olor: 'rgba(119, 119, 142, 0.05)'
          },
          axisTicks: {
            show: false,
            olor: 'rgba(119, 119, 142, 0.05)'
          }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
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

// Patient Visit By Department

export class Department extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: [55, 78],
      options: {
        chart: {
          height: 280,
          type: 'radialBar'
        },

        colors: ['#467fcf', '#5eba00'],

        plotOptions: {

          radialBar: {
            hollow: {
              size: '55%'
            },
            track: {
              background: 'rgba(0, 0, 0, 0.05)',
              opacity: 0.5
            },
            dataLabels: {
              name: {
                fontSize: '14px'
              },
              value: {
                fontSize: '16px',
                color: '#0f4069'
              },
              total: {
                show: !0,
                label: 'Total Visits',
                color: '#0f4069',
                formatter: function (e) {
                  return 249
                }
              }
            }
          }
        },

        stroke: {
          lineCap: 'round'
        },
        labels: ['Cardiology', 'Dermatology'],
        legend: {
          show: false,
          floating: true,
          fontSize: '13px',
          position: 'left',
          offsetX: 0,
          offsetY: 1,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 1
          }
        }
      }

    }
  }

  render () {
    return (
  
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={260} />
    

    )
  }
};

// Country Wise Donors

export function Donors () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
      borderColor: 'rgba(119, 119, 142, 0.08)'
    },
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      axisLine: {
        lineStyle: {
          color: 'rgba(161, 161, 161,0.3)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#a1a1a1'
      }
    },
    tooltip: {
      show: true,
      showContent: true,
      alwaysShowContent: true,
      triggerOn: 'mousemove',
      trigger: 'axis',
      axisPointer:
{
  label: {
    show: false
  }
}

    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(119, 119, 142, 0.08)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(119, 119, 142, 0.08)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#a1a1a1'
      }
    },
    series: [
      {
        name: 'Male',
        type: 'bar',
        data: [10, 15, 9, 18, 10, 15, 13, 14, 18, 17, 16, 14],
        symbolSize: 10,
        itemStyle: {
          normal: { barBorderRadius: [100, 100, 0, 0] }
        }
      },
      {
        name: 'Female',
        type: 'bar',
        data: [10, 14, 10, 15, 9, 25, 18, 17, 14, 12, 16, 13],
        symbolSize: 10,
        itemStyle: {
          normal: {
            barBorderRadius: [100, 100, 0, 0],
            barBorderWidth: ['2']
          }
        }
      }
    ],
    color: ['#467fcf', '#5eba00']
  }

  return (<ReactECharts option={option} height="200px" />)
};
