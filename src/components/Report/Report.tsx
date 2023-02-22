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

interface SubType {
  id: number
  name: string
}

interface MainType {
  id: number
  name: string
  subList: SubType[]
}

interface OptionCostType {
  optionId: number
  value: number
}

const mainList: MainType[] = [
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

const optionCost: OptionCostType[] = [
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
  const [main, setMain] = useState<MainType | null>(null)
  const [sub, setSub] = useState<SubType[]>([])

  return (
    <Box sx={{ m: 4 }}>
      <Typography variant='h5'>Autocomplete anidados</Typography>
      <Toolbar sx={{ py: 3 }}>
        <Autocomplete
          id='main'
          disablePortal
          options={mainList}
          getOptionLabel={(option: MainType) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label='Main' />}
          onChange={(_, value: MainType | null) => {
            setMain(value)
            setSub(value != null ? value.subList : [])
          }}
          sx={{ width: 300 }}
        />
        {main && (
          <Autocomplete
            id='sub'
            multiple
            limitTags={2}
            options={sub}
            value={sub}
            getOptionLabel={(option: SubType) => option.name}
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
            onChange={(_, newValue: SubType[] | null) => {
              if (newValue != null) setSub(newValue)
            }}
            sx={{ width: 400, mx: 2 }}
          />
        )}
      </Toolbar>
    </Box>
  )
}
