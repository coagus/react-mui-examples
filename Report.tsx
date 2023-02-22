import { Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface subType {
    id: number
    name: string
}

interface mainType {
    id: number
    name: string
    subList: subType[]
}

const mainList:mainType[] = [
    {id:1, name:'Christian', subList: [{id:1,name:'opcion 1'}}]
]

export const Report: FC = () => {
  return (<Box>
    <Typography>Autocomplete anidados</Typography>
    <Toolbar>

    </Toolbar>
  </Box>);
};

