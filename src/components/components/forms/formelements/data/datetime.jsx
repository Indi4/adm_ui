
import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import dayjs from 'dayjs'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'

export function BasicTimePicker () {
  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <TimePicker
        label={'04:30 pm'}
        views={['hours', 'minutes']}
      />
     
  </LocalizationProvider>

  )
}

export function CustomTimeFormat () {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <TimeField
          label="Format without meridiem"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="HH:mm"
        />
       
    </LocalizationProvider>
  )
}

// Basic date Picker
export function BasicDatePicker () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="" />
      </DemoContainer>
    </LocalizationProvider>
  )
}

// DaterangePicker
export function DaterangePicker () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label=" Date range picker" />
      </DemoContainer>
    </LocalizationProvider>
  )
}

//  HumanFriendlydates
export function HumanFriendlydates () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Human friendly Dates" />
      </DemoContainer>
    </LocalizationProvider>
  )
}

//  InlineCalendar
export function ResponsiveDatePickers () {
  return (

<LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer
  components={[
    'StaticDatePicker'
  ]}
>
<DemoItem>
  <span className='input form-control'>
    <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
  </span>
</DemoItem>
</DemoContainer>
</LocalizationProvider>
  )
}

// Limitsdateandtime
export function DateTimePickerOpenTo () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
        <MobileDateTimePicker label={'"year"'} />
        
    </LocalizationProvider>
  )
}

