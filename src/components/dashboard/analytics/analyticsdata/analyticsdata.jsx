import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import { Badge, Button, OverlayTrigger, Table, Tooltip } from 'react-bootstrap'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { imagesData } from '../../../../common/commomimages/imagedata'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'

import differenceBy from 'lodash/differenceBy'
import DataTableExtensions from 'react-data-table-component-extensions'
import DataTable from 'react-data-table-component'
import 'react-data-table-component-extensions/dist/index.css'
import { Link } from 'react-router-dom'

// Revenue Analytics

export class Revenue extends Component {
  constructor(props) {
    super(props)

    this.state = {

      series: [{
        name: 'TEAM A',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 35, 55, 36, 39, 28, 15, 38]
      },
      {
        name: 'TEAM B',
        type: 'bar',
        data: [44, 55, 41, 67, 22, 43, 25, 41, 56, 27, 43, 30, 25, 45]
      }
      ],
      options: {
        chart: {
          height: 250,
          stacked: false,
          toolbar: {
            show: false
          }
        },

        stroke: {
          width: [2, 1],
          curve: 'smooth'
          // dashArray: [8, 0],
        },
        markers: {
          size: [2, 0]
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'right',
          fontSize: '10px',
          fontWeight: 600,
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
        plotOptions: {
          bar: {
            columnWidth: '30%',
            borderRadius: 2
          }
        },

        // colors: ['#5eba00', myVarVal],
        colors: ['#5eba00', '#467fcf', '#3ec7e8', '#ffc107', '#5c509b'],

        fill: {
          opacity: [1, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },

        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'July',
          'Aug',
          'Sep',
          'Oct',
          'Sep',
          'Oct',
          'Nov',
          'dec'
        ],

        grid: {
          show: true,
          borderColor: 'rgba(119, 119, 142, 0.1)'
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              color: ['#76839ac9']
            }
          },
          axisBorder: {
            show: false
          },

          lines: {
            show: false,
            color: '#fff'
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              color: ['#76839ab0']
            }
          },
          axisTicks: {
            show: false
          },
          lines: {
            show: false
          },
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

  render() {
    return (
      // <div id="chart">
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={250} />
      // </div>

    )
  }
};

// Viewing From Devices

export class Devices extends Component {
  constructor(props) {
    super(props)

    this.state = {

      series: [44, 55, 17],
      options: {
        chart: {
          height: 265,
          type: 'donut'
        },

        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: '75%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '20px',
                  color: '#495057',
                  offsetY: -4
                },
                value: {
                  show: true,
                  fontSize: '18px',
                  color: undefined,
                  offsetY: 8,
                  formatter: function (val) {
                    return val + '%'
                  }
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#495057'
                }

              }
            }
          }
        },
        responsive: [{
          breakpoint: 320,
          options: {
            chart: {
              width: 250
            },
            legend: {
              show: false,
              position: 'top'
            }
          }
        },
        {
          breakpoint: 1425,
          options: {
            chart: {
              height: 220
            },
            legend: {
              show: false,
              position: 'top'
            }
          }
        }
        ],

        colors: ['#467fcf', '#5eba00', '#f35e90']

      }

    }
  }

  render() {
    return (
      // <div id="chart">
      <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
      // </div>

    )
  }
};

//Tables


//
export const AllProduct = () => {



  const data = [

    {
    trid: "#42503",
      quantity: "02",
      price: "$10,000",
      payment: " Cash on delivered",
      status: "Available",
      actions: "",
      text: 'SMart Watches',
      src: imagesData('product10'),
      className:'badge-primary-transparent text-primary fw-semibold'
    },
    {
    trid: "#456832",
      quantity: "04",
      price: "$2,200",
      payment: "Online Payment",
      status: "Limited",
      actions: "",
      src:imagesData('product14'),
      text:'Home Furnitures',
      className:'badge-warning-transparent text-warning fw-semibold'
    },
    {
    trid: "#32054",
      quantity: "03",
      price: "$9,100",
      payment: "Cash on delivered",
      status: "No stock",
      actions: "",
      src:imagesData('product10'),
      text:'Mobiles',
      className:'badge-danger-transparent text-danger fw-semibold'
    },
    {
    trid: "#85423",
      quantity: "02",
      price: "$2,987",
      payment: "Online Payment",
      status: "No stock",
      actions: "",
      src:imagesData('product13'),
      text:'HP 200 Mouse & Wireless Headphones',
      className:'badge-danger-transparent text-danger fw-semibold'
    },
    {
    trid:"#61203",
      quantity: "01",
      price: "$10,987",
      payment: "Cash on delivered",
      status: "Available",
      actions: "",
      src:imagesData('product15'),
      text:'Digital Camera',
      className:'badge-success-transparent text-success fw-semibold'
    },
    {
    trid: "#03215",
      quantity: "02",
      price: "$1,700",
      payment: "Online Payment",
      status: "Available",
      actions: "",
      src:imagesData('product18'),
      text:'Clothes',
      className:'badge-success-transparent text-success fw-semibold'
    },
    {
    trid:"#63210",
      quantity: "02",
      price: '$452',
      payment: "Cash on delivered",
      status: "Limited",
      actions: "",
      src:imagesData('product12'),
      text:'Dell Laptops',
      className:'badge-warning-transparent text-warning fw-semibold'
    },
    {
    trid: "#30215",
      quantity: "02",
      price: '$2,700',
      payment: "Online Payment",
      status: "Available",
      actions: "",
      src:imagesData('product17'),
      text:'Dell Monitors',
      className:'badge-success-transparent text-success fw-semibold'
    },
    {
    trid: "#42150",
      quantity: "01",
      price: '$428',
      payment: "Cash on delivered",
      status: "Limited",
      actions: "",
      src:imagesData('product16'),
      text:'Laptop Bags',
      className:'badge-warning-transparent text-warning fw-semibold'
    }
  ]
  const columns = [
    {
      name: "PRODUCT ID",
      selector: row => [row.trid],
      sortable: false,
      cell: row => 
      <h6 className="mb-0 fw-semibold text-primary"> 
    
      {row.trid} 
    
      </h6>
    },
    {
      name: "PRODUCT",
      selector: row => [row.src],
      sortable: true,
      cell: row => <div className="d-flex align-items-center">
        <img className="avatar avatar-sm cover-image br-7 me-2" alt="" src={row.src} /><h6 className="mb-0 fs-14 fw-semibold text-dark">{row.text}</h6>
      </div>
    },
    {
      name: "	QUANTITY",
      selector: row => [row.quantity],
      sortable: true,
      cell: row => <div className="fw-semibold text-muted-dark">{row.quantity}</div>
    },
    {
      name: "PRICE",
      selector: row => [row.price],
      sortable: true,
      cell: row => 
      <span className="text-nowrap align-middle">
        {row.price}
         </span>
    },
    {
      name: "PAYMENT MODE",
      sortable: false,
      cell: row => 
      <span className="text-center align-middle">
        {row.payment}
         </span>
    },
    // {
    //   name: "STATUS",
    //   sortable: false,
    //   cell: row => <span className="text-center align-middle">
    //     {row.payment}
    //     </span>
    // },
    {
      name: "STATUS",
      sortable: true,
      cell: row => <Badge
       bg={row.className}
       className={row.className}
       >{row.status}</Badge>
    },
    {
      name: "ACTION",
      sortable: false,
      cell: row => <div>
       <Button type="button" variant='' className="btn bg-info-transparent me-1">
          <i className="fe fe-edit text-info"></i>
        </Button>
        <Button type="button" variant='' className="btn bg-danger-transparent">
          <i className="fe fe-trash-2 text-danger"></i>
        </Button>
      </div>
    },
  ]

  const tableData = {
    columns,
    data
  };

  return (
    <div className="product product-details">
      <DataTableExtensions className="table-bordered text-nowrap " {...tableData}>
        <DataTable className=""
          columns={columns}
          data={data}
          noHeader
          // defaultSortField="name"
          sortIcon={<ArrowDownwardIcon />}
          defaultSortAsc={true}

          pagination
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  );
};