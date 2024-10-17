import React from 'react'
import ReactECharts from 'echarts-for-react'
// Line Chart
export function Echart () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    xAxis: {
      data: ['2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
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
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [{
      name: 'sales',
      type: 'bar',
      data: [10, 15, 9, 18, 10, 15]
    },
    {
      name: 'profit',
      type: 'line',
      barMaxWidth: 20,
      smooth: true,
      data: [8, 5, 25, 10, 10]
    },
    {
      name: 'growth',
      type: 'bar',
      data: [10, 14, 10, 15, 9, 25]
    }
    ],

    color: ['#467fcf ', '#fa626b', '#5eba00']
  }

  return (<ReactECharts option={option} height="350px" />)
};

// Combination Of Line & Bar Chart

export function Echart1 () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    xAxis: {
      data: ['2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'sales',
        type: 'line',
        smooth: true,
        data: [12, 25, 12, 35, 12, 38],
        color: ['#467fcf ']
      },
      {
        name: 'Profit',
        type: 'line',
        smooth: true,
        size: 10,
        data: [8, 12, 28, 10, 10, 12],
        color: ['#5eba00']
      }
    ]

  }

  return (<ReactECharts option={option} height="350px" />)
};

// Vertical Line Chart
export function Echart2 () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32'
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.03)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      type: 'category',
      data: ['2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#c0dfd8'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [10, 15, 9, 18, 10, 15]
      },
      {
        name: 'profit',
        type: 'line',
        smooth: true,
        data: [8, 5, 25, 10, 10]
      },
      {
        name: 'growth',
        type: 'bar',
        data: [10, 14, 10, 15, 9, 25]
      }
    ],

    color: ['#467fcf ', '#fa626b', '#5eba00']
  }

  return (<ReactECharts option={option} height="350px" />)
};

// Vertical Combination Of Line & Bar Chart

export function Echart3 () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32',
      show: true,
      borderColor: 'rgba(119, 119, 142, 0.1)',
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      type: 'category',
      data: ['2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'sales',
        type: 'line',
        smooth: true,
        data: [12, 25, 12, 35, 12, 38],
        color: ['#467fcf ']
      },
      {
        name: 'Profit',
        type: 'line',
        smooth: true,
        size: 10,
        data: [8, 12, 28, 10, 10, 12],
        color: ['#5eba00']
      }
    ],
    color: ['#467fcf ', '#5eba00', '#ecb403']
  }

  return (<ReactECharts option={option} height="200px" />)
};

//  Bar Chart
export function Echart4 () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    xAxis: {
      data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'sales',
        type: 'bar',
        stack: 'Stack',
        data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
      },
      {
        name: 'Profit',
        type: 'bar',
        stack: 'Stack',
        data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
      }
    ],
    color: ['#467fcf ', '#5eba00']
  }

  return (<ReactECharts option={option} height="350px" />)
};

//  Horizontal Bar Chart
export function Echart5 () {
  const option = {
    grid: {
      top: '6',
      right: '10',
      bottom: '17',
      left: '32'
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.03)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      type: 'category',
      data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'sales',
        type: 'bar',
        stack: 'Stack',
        data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
      },
      {
        name: 'Profit',
        type: 'bar',
        stack: 'Stack',
        data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
      }
    ],
    color: ['#467fcf ', '#5eba00']
  }

  return (<ReactECharts option={option} height="350px" />)
};

//  Single Line Chart
export function Echart6 () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    xAxis: {
      data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'data',
        type: 'line',
        data: [20, 20, 36, 18, 15, 20, 25, 20]
      }
    ],
    color: ['#467fcf ']
  }
  return (<ReactECharts option={option} height="350px" />)
};

//  Single Smooth Line Chart
export function Echart7 () {
  const option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    xAxis: {
      data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: [
      {
        name: 'data',
        type: 'line',
        smooth: true,
        data: [20, 20, 36, 18, 15, 20, 25, 20]
      }
    ],
    color: ['#5eba00']
  }
  return (<ReactECharts option={option} height="350px" />)
};

//  Radar Chart

export function Echart8 () {
  const option = {
    title: {
      text: '',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      textStyle: {
        color: '#bbc1ca'
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['pie']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    series: [{
      name: '',
      type: 'pie',
      radius: [20, 110],
      center: ['50%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: [{
        value: 10,
        name: 'Jan'
      }, {
        value: 5,
        name: 'Feb'
      }, {
        value: 15,
        name: 'Mar'
      }, {
        value: 25,
        name: 'Apr'
      }, {
        value: 20,
        name: 'May'
      }, {
        value: 25,
        name: 'Jun'
      }, {
        value: 30,
        name: 'Jul'
      }, {
        value: 40,
        name: 'Aug'
      }]
    }],
    color: ['#ed00c3', '#ad59ff', ' #00b3ff', '#00d9bf', '#fc0', '#467fcf ', '#fa626b', '#5eba00']
  }
  return (<ReactECharts option={option} height="350px" />)
};


let base = +new Date(1968, 9, 3)
const oneDay = 24 * 3600 * 1000
const date = []
const data = [Math.random() * 300]
for (let i = 1; i < 20000; i++) {
  const now = new Date(base += oneDay)
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
}

//  Live area charts
export function Echart9 () {
  const option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%']
      }
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    title: {
      left: 'center',
      text: ''
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date,
      axisLabel: {
        color: '#bbc1ca'
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      axisLine: {
        onZero: false,
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      },
      axisLabel: {
        color: '#bbc1ca'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(187, 193, 202, 0.2)'
        }
      }
    },
    grid: {
      x: 40,
      y: 20,
      x2: 40,
      y2: 20
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10,
      handleSize: '100%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }

    }],
    series: [{
      name: '',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#3272cf'
      },
     
      data
    }],
    color: ['#467fcf']
  }
  return (<ReactECharts option={option} height="350px" />)
};




