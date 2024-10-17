import { GridFooterContainer } from "@mui/x-data-grid";
import Tooltip from '@mui/material/Tooltip';
// Custom footer component
const CustomFooter = ({ total }) => (
  <GridFooterContainer>
    <div style={{ marginLeft: 'auto', padding: '10px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.65)' }}>
      Total Records: {total}
    </div>
  </GridFooterContainer>
);

//to get current year
const currentYear = { demand_year: new Date().getFullYear() }

//to get years list
const years = Array.from(new Array(50), (val, index) => ({
  demand_year: currentYear.demand_year - index
}));

//to get years list
const yearList = Array.from(new Array(50), (val, index) => ({
  demand_year: currentYear.demand_year - index
}));
function getYearList(pastYears, futureYears) {
  const years = [];
  const startYear = new Date().getFullYear();
  // Add past years
  for (let i = pastYears; i > 0; i--) {
    years.push(startYear - i);
  }
  // Add current year
  years.push(startYear);
  // Add future years
  for (let i = 1; i <= futureYears; i++) {
    years.push(startYear + i);
  }
  return years;
}

//to get current month
const date = new Date();
const currentMonth = date.toLocaleString('default', { month: 'short' }).substring(0, 3);

// month list
const months = [
  { demand_month: 'Jan', id: 1 },
  { demand_month: 'Feb', id: 2 },
  { demand_month: 'Mar', id: 3 },
  { demand_month: 'Apr', id: 4 },
  { demand_month: 'May', id: 5 },
  { demand_month: 'Jun', id: 6 },
  { demand_month: 'Jul', id: 7 },
  { demand_month: 'Aug', id: 8 },
  { demand_month: 'Sep', id: 9 },
  { demand_month: 'Oct', id: 10 },
  { demand_month: 'Nov', id: 11 },
  { demand_month: 'Dec', id: 12 },
];

//to generate columns in datagrid dynamically
const calculateColumnWidth = (field, data) => {
  const headerLength = field.replace(/_/g, ' ').length;
  const maxContentLength = data.reduce((max, item) => {
    const contentLength = item[field] ? String(item[field]).length : 0;
    return Math.max(max, contentLength);
  }, 0);

  // Assuming a base unit of width per character and some padding
  const baseWidth = 10; // Width per character in pixels
  const padding = 20; // Extra padding for better spacing
  return Math.max(headerLength * baseWidth, maxContentLength * baseWidth) + padding;
};

/************** Dynamically Generating Columns ***********/
const generateDynamicColumns = (data, columnsToHide = []) => {
  if (data.length === 0) return [];
  let keys = Object.keys(data[0]);

  // Replace "total_" and "Total " with an empty string except for "total_requirement"
  // keys = keys.map((key) =>
  //   key !== "total_requirement" && (key.includes("Total") || key.includes("total")) ? key.replace(/total_|Total /g, "") : key
  // );

  return keys
    .filter((key) => !columnsToHide.includes(key)) // Exclude hidden columns
    .map((key) => ({
      field: key,
      headerName: key.includes("WH")
        ? key // If key contains "WH", use the key as is
        : key === 'plant_location'
          ? 'Location'
          : key === 'fg_code'
            ? 'FG Code'
            : key.replace(/_/g, ' ') // Replace underscores with spaces
              .toLowerCase() // Convert to lowercase
              .replace(/\b\w/g, (char) => char.toUpperCase()), // Convert first letter of each word to uppercase
      width: key === 'customer_name' ? 250 : calculateColumnWidth(key, data),
     // editable: false,
      cellClassName: key === 'customer_name' ? 'customer-name-cell' : '', // Add custom class for customer_name column
      renderCell: (params) => {
        const value = params.value;
        return (
          <Tooltip
            title={value}
            arrow
          // PopperProps={{
          //   style: {
          //    // backgroundColor: '#6a0dad', // Set tooltip background color to purple
          //     color: '#fff', // Set tooltip text color to white
          //     fontSize: '1.5rem', // Adjust font size if needed
          //     borderRadius: '4px', // Adjust border radius if needed
          //     padding: '4px 8px', // Adjust padding if needed
          //   },
          // }}
          >
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
              {value}
            </div>
          </Tooltip>
        );
      },
    }));
};

// Reusable function for rendering cells with tooltips
const renderTooltipCell = (value) => (
  <Tooltip
      title={value || ''}
      arrow
      placement="bottom"
      componentsProps={{
          tooltip: {
              sx: {
                  backgroundColor: '#555',
                  color: '#fff',
                  fontSize: '0.9rem',
                  borderRadius: '4px',
                  padding: '10px',
              },
          },
      }}
  >
      <span
          style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
              maxWidth: '100%',
          }}
      >
          {value}
      </span>
  </Tooltip>
);

export {
  CustomFooter,
  months,
  years,
  currentYear,
  currentMonth,
  yearList,
  getYearList,
  generateDynamicColumns,
  renderTooltipCell
}