import React from 'react'
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js'
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2'
Chart.register(...registerables, ArcElement, Tooltip, Legend)


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
        display: true,
        text: '% Changes'
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
      data: [25.0, 16.67, 34, 25, 24],

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
        display: true,
        text: '% Changes'
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
export const getLineOptions1 = (isDarkMode) =>( console.log("isDarkModeisDarkMode",isDarkMode))

//  LineChart
export const getLineOptions = (isDarkMode) => ({
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        display: true,
        font: {
          size: 13
        },
        color: isDarkMode ? '#ffffff' : '#495057', // Adjust based on dark mode
        boxHeight: 5,
        boxWidth: 5,
        padding: 15
      },
      position: 'top'
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
        fontColor: isDarkMode ? '#ffffff' : 'rgba(180, 183, 197, 0.4)', // Adjust based on dark mode
        padding: 10
      },
      title: {
        display: true,
        text: 'Month',
        font: {
          size: 14
        },
        color: isDarkMode ? '#ffffff' : '#495057' // Adjust based on dark mode
      },
      grid: {
        display: false,
       // color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      title: {
        display: true,
        text: 'Plans'
      },
      grid: {
        display: false,
       // color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
});
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  const lineOptions = getLineOptions(isDarkMode);

  // Update the chart with new options for dark mode
  lineChart.options = lineOptions;
  lineChart.update(); // Ensure the chart updates with new settings
}

// const isDarkMode = document.body.classList.contains('dark-mode'); // Example for checking dark mode
// console.log("isDarkMode",isDarkMode)
let isDarkMode = sessionStorage.getItem("darkMode",true)
console.log("isDarkMode",isDarkMode)
//const lineOptions = getLineOptions(isDarkMode); // Pass the current theme status
const lineOptions = getLineOptions(false); // Pass the current theme status

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
    label: 'Rolling Plan', // Add a label for the second dataset
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
      <Line options={lineOptions} data={LineData} height='350px' />
    </div>
  )
};


