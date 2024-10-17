import React from 'react'
import Select from 'react-select'

const Year = [
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' }
]
export function Select1 () {
  return (
    <Select options={Year} menuPlacement='top' classNamePrefix='Select2' className="multi-select" placeholder="Year" />
  )
}

// select year
const cardExp = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' }
]
export function Select2 () {
  return (
    
    <Select classNamePrefix="Select-sm Select2" className='select2-no-search' menuPlacement='top' options={cardExp} placeholder='month' />
  )
}
