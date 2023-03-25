import { FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'

const FilterDropDown = () => {
    const [value, setValue] = React.useState('expensive_to_cheap')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <FormControl className='w-full lg:w-min'>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
                size="small"
            >
                <MenuItem value="expensive_to_cheap">From expensive to cheap</MenuItem>
                <MenuItem value="cheap_to_expensive">From cheap to expensive</MenuItem>
            </Select>
        </FormControl>
    )
}

export default FilterDropDown