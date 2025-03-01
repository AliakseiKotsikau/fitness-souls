import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme, styled } from '@mui/material/styles';


const columns = [
  {
    field: 'active',
    headerName: 'Active',
    headerClassName: 'table-header',
    type: 'boolean',
    flex: 1,
    resizable: false,
    editable: true,
  },
  {
    field: 'id',
    headerName: 'Exercise',
    headerClassName: 'table-header',
    flex: 3,
    resizable: false,
    editable: false,
  },
  {
    field: 'minReps',
    headerName: 'Min',
    type: 'number',
    headerClassName: 'table-header',
    flex: 1,
    resizable: false,
    editable: true,
  },
  {
    field: 'maxReps',
    headerName: 'Max',
    type: 'number',
    headerClassName: 'table-header',
    flex: 1,
    resizable: false,
    editable: true,
  },
];

const mapExerciesToRows = (exercises) => {
  let ex = Object.keys(exercises).map((exercise) => ({
    'active': exercises[exercise].active,
    'id': exercise,
    'minReps': +exercises[exercise].minReps,
    'maxReps': +exercises[exercise].maxReps,
  }));
  return ex;
}

const ExerciseSelectionTable = props => {
  const theme = useTheme();

  const updateExercise = (updatedExerciseRow) => {
    const updatedExercise = {
      'exercise': updatedExerciseRow.id,
      'minReps': updatedExerciseRow.minReps,
      'maxReps': updatedExerciseRow.maxReps,
      'active': updatedExerciseRow.active,
    }

    props.onExerciseUpdate(updatedExercise);

    return updatedExerciseRow;
  }

  const handleProcessRowUpdateError = (error) => {
    console.error(error.message);
  }

  return (
    <Box sx={{
      width: '80%',
      maxWidth: '100px',
      minWidth: '600px',
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
          sorting: {
            sortModel: [{ field: 'id', sort: 'asc' }],
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        isRowSelect={(params) => props.exercises[params.row.exercise]?.active === true}
        processRowUpdate={(updatedRow, originalRow) => updateExercise(updatedRow)}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        sx={{
          border: 0,
          '.MuiDataGrid-columnHeaderTitleContainer': {
            backgroundColor: theme.palette.secondary.main,
          },
          '.MuiSvgIcon-root': {
            fillColor: theme.palette.common.white,
          },
          '.MuiDataGrid-editBooleanCell': {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.common.black,
          },
          '.MuiDataGrid-editInputCell': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.common.black,
          },
          '.MuiDataGrid-booleanCell': {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.common.black,
          },

        }}
      />
    </Box>
  );
}


export default ExerciseSelectionTable;