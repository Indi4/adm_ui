import React from 'react'
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js'
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2'
Chart.register(...registerables, ArcElement, Tooltip, Legend)

//  StackedBarChart
export const StackOption = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.5,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const StackData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: '# of Votes',
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: '#467fcf'
  }
  ]
}
export function StackedBarChart () {
  return <Bar options={StackOption} data={StackData} height='300px' />
};

//  StackedBarChart1
export const StackOption1 = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.5,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const StackData1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: '# of Votes',
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: 'rgba(70, 127, 207, 0.5)'
  }
  ]
}
export function StackedBarChart1 () {
  return <Bar options={StackOption1} data={StackData1} height='300px' />
};

//  GradientBarChart
function getGradient (ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 250)
  gradient.addColorStop(0, '#467fcf')
  gradient.addColorStop(1, '#5eba00')
  return gradient
}
export const GradientOption = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.5,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  hover: { mode: null },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const GradientData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '# of Votes',
      data: [14, 12, 34, 25, 24, 20],

      backgroundColor: function (context) {
        const chart = context.chart
        const { ctx, chartArea } = chart
        if (!chartArea) {
          // This case happens on initial chart load
          return
        }
        return getGradient(ctx, chartArea)
      }
    }
  ]
}
export function GradientBarChart () {
  return <Bar options={GradientOption} data={GradientData} height='300px' />
};

//  HorizontalBarChart
export const HorizontalBarOption = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.8,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const HorizontalBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: '# of Votes',
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: ['#467fcf', '#5eba00', '#22c03c', '#ffca4a', '#3ec7e8', '#e34a42']
  }]
}
export function HorizontalBarChart () {
  return <Bar options={HorizontalBarOption} data={HorizontalBarData} height='300px' />
};

//  HorizontalBarChart1
export const HorizontalBarOption1 = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.8,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const HorizontalBarData1 = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: ['#fc7303', '#22c03c', '#ffca4a', '#e34a42', '#867efc']
  }, {
    data: [22, 30, 25, 30, 20, 40],
    backgroundColor: '#467fcf'
  }]
}
export function HorizontalBarChart1 () {
  return <Bar options={HorizontalBarOption1} data={HorizontalBarData1} height='300px' />
};

//  VerticalStackedBarChart
export const VerticalStackedBarOption = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.5,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      },
      stacked: true
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      },
      stacked: true
    }
  }
}
export const VerticalStackedBarData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: '#467fcf',
    borderWidth: 1,
    fill: true
  }, {
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: '#ec82ef',
    borderWidth: 1,
    fill: true
  }]
}
export function VerticalStackedBarChart () {
  return <Bar options={VerticalStackedBarOption} data={VerticalStackedBarData} height='300px' />
};

//  HorizontalStackedBarChart
export const HorizontalStackedBarOption = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.5,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      },
      stacked: true
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      },
      stacked: true
    }
  }
}
export const HorizontalStackedBarData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: '#467fcf',
    borderWidth: 1,
    fill: true
  }, {
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: '#1cc8e3',
    borderWidth: 1,
    fill: true
  }]
}
export function HorizontalStackedBarChart () {
  return <Bar options={HorizontalStackedBarOption} data={HorizontalStackedBarData} height='300px' />
};

//  LineChart
export const LineOption = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const LineData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
    borderColor: '#467fcf',
    borderWidth: 1,
    fill: false,
    lineTension: 0.3
  }, {
    data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45],
    borderColor: '#3ec7e8',
    borderWidth: 1,
    fill: false,
    lineTension: 0.3
  }]
}
export function LineChart () {
  return <Line options={LineOption} data={LineData} height='300px' />
};

//  AreaChart
function getAreaGradient (ctx) {
  const gradient1 = ctx.createLinearGradient(0, 350, 0, 0)
  gradient1.addColorStop(0, 'rgba(70, 127, 207,0)')
  gradient1.addColorStop(1, 'rgba(70, 127, 207,.5)')

  return gradient1
}
function getAreaGradient1 (ctx) {
  const gradient2 = ctx.createLinearGradient(0, 280, 0, 0)
  gradient2.addColorStop(0, 'rgba(236, 139, 239,0)')
  gradient2.addColorStop(1, 'rgba(236, 139, 239,.5)')
  return gradient2
}
export const AreaChartOption = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)'
      },
      title: {
        display: false,
        text: 'Months'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: 'rgba(180, 183, 197, 0.4)',
        stepSize: 10,
        min: 0,
        max: 80
      },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: true,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}
export const AreaChartData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
    borderColor: '#467fcf',
    borderWidth: 1,
    fill: true,
    backgroundColor: function (context) {
      const chart = context.chart
      const { ctx, chartArea } = chart

      if (!chartArea) {
        // This case happens on initial chart load
        return
      }
      return getAreaGradient(ctx, chartArea)
    },
    lineTension: 0.3
  }, {
    data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45],
    borderColor: '#ec82ef',
    borderWidth: 1,
    fill: true,
    backgroundColor: function (context) {
      const chart = context.chart
      const { ctx, chartArea } = chart

      if (!chartArea) {
        // This case happens on initial chart load
        return
      }
      return getAreaGradient1(ctx, chartArea)
    },
    lineTension: 0.3
  }]
}
export function AreaChart () {
  return <Line options={AreaChartOption} data={AreaChartData} height='300px' />
};

//  DonutChart
export const DonutChartOption = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
}
export const DonutChartData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    data: [35, 24, 20, 15, 8],
    backgroundColor: ['#467fcf', '#ec82ef', '#3ec7e8', '#ffca4a', '#867efc', '#1cc8e3']
  }]
}
export function DonutChart () {
  return <Doughnut options={DonutChartOption} data={DonutChartData} height='300px' />
};

//  PieChart

export const PieChartOption = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    tooltip: {
      enabled: true
    }
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
}
export const PieChartData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    data: [35, 24, 20, 15, 8],
    backgroundColor: ['#467fcf', '#ec82ef', '#3ec7e8', '#ffca4a', '#867efc', '#1cc8e3']
  }]
}
export function PieChart () {
  return <Pie options={PieChartOption} data={PieChartData} height='300px' />
};

