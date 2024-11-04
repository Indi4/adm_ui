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
export function StackedBarChart() {
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
export function StackedBarChart1() {
  return <Bar options={StackOption1} data={StackData1} height='300px' />
};

//  GradientBarChart1
function getGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 1, 250)
  gradient.addColorStop(0, '#6A1B9A')
  gradient.addColorStop(1, '#2979FF')
  return gradient
}
export const GradientOption = {
  maintainAspectRatio: false,
  responsive: true,
  barPercentage: 0.5,
  plugins: {
    legend: {
      display: false,
      // labels: {
      //   display: false
      // }
    },
    tooltip: {
      enabled: true
    }
  },
  hover: { mode: null },
  scales: {
    x: {
      // ticks: {
      //   beginAtZero: true,
      //   fontSize: 10,
      //   fontColor: 'rgba(180, 183, 197, 0.4)'
      // },
      title: {
        display: true, // Enable the display of the title
        text: 'Customer Name', // Set the title text
        font: {
          size: 14 // Adjust the font size for the axis title
        },
        color: '#495057', // Set the color for the title
        padding: { top: 10 } // Add space between the title and the x-axis
      },
      grid: {
        display: false,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      // ticks: {
      //   beginAtZero: true,
      //   fontSize: 10,
      //   fontColor: 'rgba(180, 183, 197, 0.4)',
      //   stepSize: 10,
      //   min: 0,
      //   max: 80
      // },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: false,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
};

export const GradientData = {
  labels: ['PT Indolorry', 'GORICA', 'ABAZA Co.', 'ACTION ', 'ADR'],
  datasets: [
    {
      label: '#',
      data: [-25.0, -16.67, 34, 25, 24],

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
export function GradientBarChart() {
  return <Bar options={GradientOption} data={GradientData} height='300px' />
};

//  GradientBarChart2
function getGradient2(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 1, 250)
  gradient.addColorStop(0, '#467fcf')
  gradient.addColorStop(1, '#5eba00')
  return gradient
}
export const GradientOption2 = {
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
      // ticks: {
      //   beginAtZero: true,
      //   fontSize: 10,
      //   fontColor: 'rgba(180, 183, 197, 0.4)'
      // },
      title: {
        display: true, // Enable the display of the title
        text: 'FG Code', // Set the title text
        font: {
          size: 14 // Adjust the font size for the axis title
        },
        color: '#495057', // Set the color for the title
        padding: { top: 10 } // Add space between the title and the x-axis
      },
      grid: {
        display: false,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      // ticks: {
      //   beginAtZero: true,
      //   fontSize: 10,
      //   fontColor: 'rgba(180, 183, 197, 0.4)',
      //   stepSize: 10,
      //   min: 0,
      //   max: 80
      // },
      title: {
        display: false,
        text: 'Revenue'
      },
      grid: {
        display: false,
        color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
};

export const GradientData2 = {
  labels: ['PUN287020653161', 'PUN224020253164', 'PUN270055367161', 'PUN270064030161', 'PUN270075830162'],
  datasets: [
    {
      label: '#',
      data: [475.0, 25.0, 25.0, 25.0, 25.0],

      backgroundColor: function (context) {
        const chart = context.chart
        const { ctx, chartArea } = chart
        if (!chartArea) {
          // This case happens on initial chart load
          return
        }
        return getGradient2(ctx, chartArea)
      }
    }
  ]
}
export function GradientBarChart2() {
  return <Bar options={GradientOption2} data={GradientData2} height='300px' />
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
export function HorizontalBarChart() {
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
export function HorizontalBarChart1() {
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
export function VerticalStackedBarChart() {
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
export function HorizontalStackedBarChart() {
  return <Bar options={HorizontalStackedBarOption} data={HorizontalStackedBarData} height='300px' />
};

//  LineChart
export const LineOption = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true, // Enables the display of the legend
      labels: {
        display: true, // Show labels in the legend
        font: {
          size: 13 // Adjust the font size for legend labels
        },
        color: '#495057' // Set the color for the legend text
      },
      position: 'top' // You can set the position (top, bottom, left, right)
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
        fontColor: 'rgba(180, 183, 197, 0.4)',
        padding: 10 // Add padding between x-axis ticks and axis
      },
      title: {
        display: true, // Enable the display of the title
        text: 'Months', // Set the title text
        font: {
          size: 14 // Adjust the font size for the axis title
        },
        color: '#495057' // Set the color for the title
      },
      grid: {
        display: false,
        //color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      // ticks: {
      //   beginAtZero: true,
      //   fontSize: 10,
      //   fontColor: 'rgba(180, 183, 197, 0.4)',
      //   stepSize: 10,
      //   min: 0,
      //   max: 80
      // },
      title: {
        display: false // Hide the y-axis title
      },
      grid: {
        display: false,
      //  color: 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
}

export const LineData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'AOP', // Add a label for the second dataset
    data: [36550, 34866, 34670, 39860, 50500, 62780, 67600, 46500, 65000, 79200, 42910, 47100],
    borderColor: '#5eba00',
    backgroundColor: '#5eba00', // Add fill color (used in legends)
    borderWidth: 3,
    fill: false,
    lineTension: 0.1
  },
  {
    label: 'Dispatch Plan', // Add a label for the second dataset
    data: [0, 0, 0, 0, 0, 0, 0, 0, 2600, 1000, 498, 340],
    borderColor: '#FFEB3B',
    backgroundColor: '#FFEB3B', // Add fill color (used in legends)
    borderWidth: 3,
    fill: false,
    lineTension: 0.1
  },
  {
    label: 'Actual Sales', // Add a label for the second dataset
    data: [43189, 43189, 43189, 43189, 43189, 43189, 43189, 43189, 0, 0, 0, 0],
    borderColor: '#D500F9',
    backgroundColor: '#D500F9', // Add fill color (used in legends)
    borderWidth: 3,
    fill: false,
    lineTension: 0.1
  }]
}
export function LineChart() {
  return (
    <div className="e-table px-5 pb-5">

      <Line options={LineOption} data={LineData} height='450px' />
    </div>
  )
};

//  AreaChart
function getAreaGradient(ctx) {
  const gradient1 = ctx.createLinearGradient(0, 350, 0, 0)
  gradient1.addColorStop(0, 'rgba(70, 127, 207,0)')
  gradient1.addColorStop(1, 'rgba(70, 127, 207,.5)')

  return gradient1
}
function getAreaGradient1(ctx) {
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
export function AreaChart() {
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
export function DonutChart() {
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
export function PieChart() {
  return <Pie options={PieChartOption} data={PieChartData} height='300px' />
};

