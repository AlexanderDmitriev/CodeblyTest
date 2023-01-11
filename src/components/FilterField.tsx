import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const FilterField =({changeFilter}:any) => {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="filter" label="Search field" type="search" onChange={changeFilter}/>
      </div>
    </Box>
  );
}

