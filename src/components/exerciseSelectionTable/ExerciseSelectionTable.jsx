import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const columns = [
  {
    field: 'id',
    headerName: 'Exercise',
    headerClassName: 'table-header',
    flex: 3,
    resizable: false,
    editable: false,
  },
  {
    field: 'min',
    headerName: 'Min',
    type: 'number',
    headerClassName: 'table-header',
    flex: 1,
    resizable: false,
    editable: true,
  },
  {
    field: 'max',
    headerName: 'Max',
    type: 'number',
    headerClassName: 'table-header',
    flex: 1,
    resizable: false,
    editable: true,
  },
];

const mapExerciesToRows = (exercises) => {
  let ex = exercises.map((exercise) => ({
    'id': exercise,
    'min': 10,
    'max': 30,
  }));
  console.log(ex)
  return ex;
}

const ExerciseSelectionTable = props => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: '80%',
      maxWidth: '100px',
      minWidth:'600px',
      '& .table-header': {
        backgroundColor: theme.palette.secondary.main,
      }
    }}>
      <DataGrid
        rowHeight={50}
        rows={mapExerciesToRows(props.exercises)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          border: 0,
          '.MuiDataGrid-columnHeaderTitleContainer': {
            backgroundColor: theme.palette.secondary.main,
          },
          '.MuiSvgIcon-root': {
            fillColor: theme.palette.common.white,
          },
        }}
      />
    </Box>
  );
}


export default ExerciseSelectionTable;