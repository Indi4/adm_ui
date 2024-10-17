import React, { useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import Creatable from 'react-select/creatable'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// Country
const countries = [
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Czech Republic', label: 'Czech Republic' },
  { value: ' Germany', label: ' Germany' },
  { value: 'Poland', label: 'Poland' }

]
export function Country () {
  return (
    <Select options={countries} classNamePrefix="Select2" className="multi-select" placeholder="" />

  )
}
// date
const date = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
  { value: 13, label: 13 },
  { value: 14, label: 14 },
  { value: 15, label: 15 },
  { value: 16, label: 16 },
  { value: 17, label: 17 },
  { value: 18, label: 18 },
  { value: 19, label: 19 },
  { value: 20, label: 20 },
  { value: 21, label: 21 },
  { value: 22, label: 22 },
  { value: 23, label: 23 },
  { value: 24, label: 24 },
  { value: 25, label: 25 },
  { value: 26, label: 26 },
  { value: 27, label: 27 },
  { value: 28, label: 28 },
  { value: 29, label: 29 },
  { value: 30, label: 30 },
  { value: 31, label: 31 }

]
export function Daydata () {
  return (
    <Select options={date} classNamePrefix='Select2' className="multi-select" placeholder="" selected={20} defaultValue={date[19]}/>

  )
}
// yeardata
const yeardata = [
  { value: 'Year', label: 'year' },
  { value: 2014, label: 2014 },
  { value: 2013, label: 2013 },
  { value: 2012, label: 2012 },
  { value: 2011, label: 2011 },
  { value: 2010, label: 2010 },
  { value: 2009, label: 2009 },
  { value: 2008, label: 2008 },
  { value: 2007, label: 2007 },
  { value: 2006, label: 2006 },
  { value: 2005, label: 2005 },
  { value: 2004, label: 2004 },
  { value: 2003, label: 2003 },
  { value: 2002, label: 2002 },
  { value: 2001, label: 2001 },
  { value: 2000, label: 2000 },
  { value: 1999, label: 1999 },
  { value: 1998, label: 1998 },
  { value: 1997, label: 1997 },
  { value: 1996, label: 1996 },
  { value: 1995, label: 1995 },
  { value: 1994, label: 1994 },
  { value: 1993, label: 1993 },
  { value: 1992, label: 1992 },
  { value: 1991, label: 1991 },
  { value: 1990, label: 1990 },
  { value: 1989, label: 1989 },
  { value: 1988, label: 1988 },
  { value: 1987, label: 1987 },
  { value: 1986, label: 1986 },
  { value: 1985, label: 1985 },
  { value: 1984, label: 1984 },
  { value: 1983, label: 1983 },
  { value: 1982, label: 1982 },
  { value: 1981, label: 1981 },
  { value: 1980, label: 1980 },
  { value: 1979, label: 1979 },
  { value: 1978, label: 1978 },
  { value: 1977, label: 1977 },
  { value: 1976, label: 1976 },
  { value: 1975, label: 1975 },
  { value: 1974, label: 1974 },
  { value: 1973, label: 1973 },
  { value: 1972, label: 1972 },
  { value: 1971, label: 1971 },
  { value: 1970, label: 1970 },
  { value: 1969, label: 1969 },
  { value: 1968, label: 1968 },
  { value: 1967, label: 1967 },
  { value: 1966, label: 1966 },
  { value: 1965, label: 1965 },
  { value: 1964, label: 1964 },
  { value: 1963, label: 1963 },
  { value: 1962, label: 1962 },
  { value: 1961, label: 1961 },
  { value: 1960, label: 1960 },
  { value: 1959, label: 1959 },
  { value: 1958, label: 1958 },
  { value: 1957, label: 1957 },
  { value: 1956, label: 1956 },
  { value: 1955, label: 1955 },
  { value: 1954, label: 1954 },
  { value: 1953, label: 1953 },
  { value: 1952, label: 1952 },
  { value: 1951, label: 1951 },
  { value: 1950, label: 1950 },
  { value: 1949, label: 1949 },
  { value: 1948, label: 1948 },
  { value: 1947, label: 1947 },
  { value: 1946, label: 1946 },
  { value: 1945, label: 1945 },
  { value: 1944, label: 1944 },
  { value: 1943, label: 1943 },
  { value: 1942, label: 1942 },
  { value: 1941, label: 1941 },
  { value: 1940, label: 1940 },
  { value: 1939, label: 1939 },
  { value: 1938, label: 1938 },
  { value: 1937, label: 1937 },
  { value: 1936, label: 1936 },
  { value: 1935, label: 1935 },
  { value: 1934, label: 1934 },
  { value: 1933, label: 1933 },
  { value: 1932, label: 1932 },
  { value: 1931, label: 1931 },
  { value: 1930, label: 1930 },
  { value: 1929, label: 1929 },
  { value: 1928, label: 1928 },
  { value: 1927, label: 1927 },
  { value: 1926, label: 1926 },
  { value: 1925, label: 1925 },
  { value: 1924, label: 1924 },
  { value: 1923, label: 1923 },
  { value: 1922, label: 1922 },
  { value: 1921, label: 1921 },
  { value: 1920, label: 1920 },
  { value: 1919, label: 1919 },
  { value: 1918, label: 1918 },
  { value: 1917, label: 1917 },
  { value: 1916, label: 1916 },
  { value: 1915, label: 1915 },
  { value: 1914, label: 1914 },
  { value: 1913, label: 1913 },
  { value: 1912, label: 1912 },
  { value: 1911, label: 1911 },
  { value: 1910, label: 1910 },
  { value: 1909, label: 1909 },
  { value: 1908, label: 1908 },
  { value: 1907, label: 1907 },
  { value: 1906, label: 1906 },
  { value: 1905, label: 1905 },
  { value: 1904, label: 1904 },
  { value: 1903, label: 1903 },
  { value: 1902, label: 1902 },
  { value: 1901, label: 1901 },
  { value: 1900, label: 1900 },
  { value: 1899, label: 1899 },
  { value: 1898, label: 1898 },
  { value: 1897, label: 1897 }
]
export function Yeardata () {
  return (
    <Select options={yeardata} classNamePrefix='Select2' className="multi-select" placeholder="" selected={1989} defaultValue={yeardata[118]} />

  )
}

//
export const Options = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'Decemeber', label: 'Decemeber' }
]
//   Single Group Disabled MutipleSelect

const Group1 = [
  {
    value: 'Option 1',
    label: 'Option 1',
    isDisabled: 'isDisabled'
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    isDisabled: 'isDisabled'
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    isDisabled: 'isDisabled'
  },
  {
    value: 'Option 4',
    label: 'Option 4',
    isDisabled: 'isDisabled'
  },
  {
    value: 'Option 5',
    label: 'Option 5',
    isDisabled: 'isDisabled'
  }
]
const Group2 = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  },
  {
    value: 'Option 4',
    label: 'Option 4'
  },
  {
    value: 'Option 5',
    label: 'Option 5'
  },
  {
    value: 'Option 6',
    label: 'Option 6'
  },
  {
    value: 'Option 7',
    label: 'Option 7'
  },
  {
    value: 'Option 8',
    label: 'Option 8'
  }
]

const Group3 = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  },
  {
    value: 'Option 4',
    label: 'Option 4'
  },
  {
    value: 'Option 5',
    label: 'Option 5'
  },
  {
    value: 'Option 6',
    label: 'Option 6'
  },
  {
    value: 'Option 7',
    label: 'Option 7'
  },
  {
    value: 'Option 8',
    label: 'Option 8'
  },
  {
    value: 'Option 9',
    label: 'Option 9'
  }
]
const groupeddata = [
  {
    label: 'Group 1',
    options: Group1
  },
  {
    label: 'Group 2',
    options: Group2
  },
  {
    label: 'Group 3',
    options: Group3
  }
]

export function SingleGroup () {
  const [selected, setSelected] = useState([])

  return (
    <div>
      <Creatable
        classNamePrefix="Select2"
        options={groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  )
};

// Multiple items with Group Option

const Group4 = [
  { value: '1', label: '1' },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '4',
    label: '4'
  },
  {
    value: '5',
    label: '5'
  }
]
const Group5 = [
  { value: '11', label: '11' },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '4',
    label: '4'
  },
  {
    value: '5',
    label: '5'
  },
  {
    value: '6',
    label: '6'
  },
  {
    value: '7',
    label: '7'
  },
  {
    value: '8',
    label: '8'
  }
]

const Group6 = [
  { value: '1', label: '1' },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '4',
    label: '4'
  },
  {
    value: '5',
    label: '5'
  },
  {
    value: '6',
    label: '6'
  },
  {
    value: '7',
    label: '7'
  },
  {
    value: '8',
    label: '8'
  },
  {
    value: '9',
    label: '9'
  }
]
const Groupeddata = [
  {
    label: 'Group 1',
    options: Group4
  },
  {
    label: 'Group 2',
    options: Group5
  },
  {
    label: 'Group 3',
    options: Group6
  }
]

export function MultipleGroup () {
  const [selected, setSelected] = useState([])

  return (
    <div>
      <Creatable
        isMulti
        classNamePrefix="Select2"
        options={Groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  )
};

// Group-Option Filter

export const GroupFilterOption = () => {
  const [selected, setSelected] = useState([])
  const options = [
    { value: 'January', label: 'January' },
    { value: 'Febuary', label: 'Febuary', disabled: true },
    { value: 'March', label: 'March', disabled: true },
    { value: 'April', label: 'April', disabled: true },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }

  ]
  return (

    <MultiSelect
      value={selected} className="multi-select"
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={options}
    />
  )
}

// Single Custom Style

export class CustomisedSelector extends React.Component {
  options = [
    { value: 'January', label: 'January' },
    { value: 'Febuary', label: 'Febuary' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May', color: '#6c5ffc' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July', color: '#05c3fb' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October', color: '#498205' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }
  ]

  styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 'bold' : 'normal',
      color: 'black',
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  }

  render () {
    return (
      <Select classNamePrefix='Select2' options={this.options} styles={this.styles} />
    )
  }
}
//
const multipleitem = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' }
]
export function Multiple () {
  const [selected, setSelected] = useState([])
  return (
  <MultiSelect
  value={selected} className="multi-select"
  onChange={setSelected}
  labelledBy="Select"
  disableSearch={true}
  options={multipleitem}
/>
  )
}
//
export const multiDisable = [
  { value: ' 1', label: ' 1' },
  { value: ' 2', label: ' 2' },
  { value: ' 3', label: ' 3' },
  { value: ' 4', label: ' 4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: ' 14', label: '14' },
  { value: '15', label: '15' },
  { value: ' 16', label: ' 16' },
  { value: '17', label: '17' },
  { value: '18', label: '18 ' },
  { value: '19', label: '19' },
  { value: '20', label: '20' }

]
export const Hide = [
  { value: 'First', label: 'First' },
  { value: 'Second', label: 'Second' },
  { value: 'Third', label: 'Third' },
  { value: 'Fourth', label: 'Fourth' }
]
export const Singlerow = [
  { value: 'First', label: 'First' },
  { value: 'Second', label: 'Second' },
  { value: 'Third', label: 'Third' },
  { value: 'Fourth', label: 'Fourth' }
]
//  Group option

const Groupopt1 = [
  {
    value: 'Option 1',
    label: 'Option 1'

  },
  {
    value: 'Option 2',
    label: 'Option 2'

  },
  {
    value: 'Option 3',
    label: 'Option 3'

  },
  {
    value: 'Option 4',
    label: 'Option 4'

  },
  {
    value: 'Option 5',
    label: 'Option 5'

  }
]
const Groupopt2 = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  },
  {
    value: 'Option 4',
    label: 'Option 4'
  },
  {
    value: 'Option 5',
    label: 'Option 5'
  },
  {
    value: 'Option 6',
    label: 'Option 6'
  },
  {
    value: 'Option 7',
    label: 'Option 7'
  },
  {
    value: 'Option 8',
    label: 'Option 8'
  }
]

const Groupopt3 = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  },
  {
    value: 'Option 4',
    label: 'Option 4'
  },
  {
    value: 'Option 5',
    label: 'Option 5'
  },
  {
    value: 'Option 6',
    label: 'Option 6'
  },
  {
    value: 'Option 7',
    label: 'Option 7'
  },
  {
    value: 'Option 8',
    label: 'Option 8'
  },
  {
    value: 'Option 9',
    label: 'Option 9'
  }
]
const groupoption = [
  {
    label: 'Group 1',
    options: Groupopt1
  },
  {
    label: 'Group 2',
    options: Groupopt2
  },
  {
    label: 'Group 3',
    options: Groupopt3
  }
]

export function Groupoption () {
  const [selected, setSelected] = useState([])

  return (
    <div>
      <Creatable
        classNamePrefix="Select2"
        options={groupoption}
        value={selected}
        onChange={setSelected}
      />
    </div>
  )
}

//  Group option

const filter1 = [
  {
    value: 'Option 1',
    label: 'Option 1'

  },
  {
    value: 'Option 2',
    label: 'Option 2'

  },
  {
    value: 'Option 3',
    label: 'Option 3'

  },
  {
    value: 'Option 4',
    label: 'Option 4'

  },
  {
    value: 'Option 5',
    label: 'Option 5'

  }
]
const filter2 = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  },
  {
    value: 'Option 4',
    label: 'Option 4'
  },
  {
    value: 'Option 5',
    label: 'Option 5'
  },
  {
    value: 'Option 6',
    label: 'Option 6'
  },
  {
    value: 'Option 7',
    label: 'Option 7'
  },
  {
    value: 'Option 8',
    label: 'Option 8'
  }
]

const filter3 = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  },
  {
    value: 'Option 4',
    label: 'Option 4'
  },
  {
    value: 'Option 5',
    label: 'Option 5'
  },
  {
    value: 'Option 6',
    label: 'Option 6'
  },
  {
    value: 'Option 7',
    label: 'Option 7'
  },
  {
    value: 'Option 8',
    label: 'Option 8'
  },
  {
    value: 'Option 9',
    label: 'Option 9'
  }
]
export const groupfilter = [
  {
    label: 'Group 1',
    value: 'Group 1',
    options: Groupopt1
  },
  {
    label: 'Group 2',
    value: 'Group 2',
    options: Groupopt2
  },
  {
    label: 'Group 3',
    value: 'Group 3',
    options: Groupopt3
  }
]
// Select2 Elements
export const Basic = [
  { value: 'Chuck Testa', label: 'Chuck Testa' },
  { value: 'Sage Cattabriga-Alosa', label: 'Sage Cattabriga-Alosa' },
  { value: 'Nikola Tesla', label: 'Nikola Tesla' },
  { value: 'Cattabriga-Alosa', label: 'Cattabriga-Alosa' },
  { value: 'Nikola Alosa', label: 'Nikola Alosa' }
]
// select2
export const CitiesData = [
  { value: 'Arizona', label: 'Arizona', isDisabled: 'true' },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Montana', label: 'Montana' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Wyoming', label: 'Wyoming' }
]

export const TimeZone = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Wisconsin', label: 'Wisconsin' }
]
export const groupedOptions = [
  {
    label: 'Cities',
    options: CitiesData
  },
  {
    label: 'Central-TimeZone',
    options: TimeZone
  }
]
//
export const Data = [
  { value: 'Arizona', label: 'Arizona', isDisabled: 'false' },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Montana', label: 'Montana' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Wyoming', label: 'Wyoming' },
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Wisconsin', label: 'Wisconsin' }
]
//
export const animatedComponents = makeAnimated()

export const option = [
  { value: 'Firefox', label: 'Firefox' },
  { value: 'Chrome', label: 'Chrome' },
  { value: 'Safari', label: 'Safari' },
  { value: 'Opera', label: 'Opera' },
  { value: 'Internet Explorer', label: 'Internet Explorer' }
]

