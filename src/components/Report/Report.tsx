import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Checkbox,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { FC, useState } from 'react'

interface subType {
  id: number
  name: string
}

interface mainType {
  id: number
  name: string
  subList: subType[]
}

interface optionCostType {
  optionId: number
  value: number
}

const mainList: mainType[] = [
  {
    id: 1,
    name: 'Christian',
    subList: [
      { id: 1, name: 'opcion 1' },
      { id: 2, name: 'opcion 2' },
      { id: 3, name: 'opcion 3' },
    ],
  },
  {
    id: 2,
    name: 'Otoniel',
    subList: [
      { id: 4, name: 'opcion 4' },
      { id: 5, name: 'opcion 5' },
    ],
  },
  {
    id: 3,
    name: 'Agustin',
    subList: [
      { id: 4, name: 'opcion 4' },
      { id: 5, name: 'opcion 5' },
      { id: 6, name: 'opcion 6' },
      { id: 7, name: 'opcion 7' },
    ],
  },
  {
    id: 4,
    name: 'Solis',
    subList: [{ id: 8, name: 'opcion 9' }],
  },
]

const optionCost: optionCostType[] = [
  { optionId: 1, value: 15 },
  { optionId: 2, value: 25 },
  { optionId: 3, value: 32 },
  { optionId: 4, value: 41 },
  { optionId: 5, value: 61 },
  { optionId: 6, value: 22 },
  { optionId: 7, value: 1 },
  { optionId: 8, value: 10 },
]

export const Report: FC = () => {
  const [main, setMain] = useState<mainType | null>(null)

  return (
    <Box sx={{ m: 4 }}>
      <Typography variant='h5'>Autocomplete anidados</Typography>
      <Toolbar sx={{ py: 3 }}>
        <Autocomplete
          id='main'
          options={mainList}
          getOptionLabel={(option: mainType) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label='Main' />}
          disablePortal
          sx={{ width: 300 }}
          onChange={(event, value: mainType | null) => {
            setMain(value)
          }}
        />
        {main && (
          <Autocomplete
            multiple
            limitTags={2}
            id='sub'
            options={main.subList}
            getOptionLabel={(option: subType) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField {...params} label='Sub' placeholder='Sub Selected' />
            )}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlank fontSize='small' />}
                  checkedIcon={<CheckBox fontSize='small' />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            )}
            sx={{ width: 400, mx: 2 }}
          />
        )}
      </Toolbar>
    </Box>
  )
}
