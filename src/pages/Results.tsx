import { FC, useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams
} from '@mui/x-data-grid';

import Intro from "../components/Intro";
import { Header } from "../components/Header";
import { getResults } from "../utils/axios";
import { capitalizeFirstChart } from "../utils/formatting";

const columns: GridColDef[] = [
  { 
    field: 'id',
    headerName: '#',
    width: 70,
  },
  { 
    field: 'weight',
    headerName: 'Weight',
    width: 130,
    editable: true,
    
    renderCell: (params: GridRenderCellParams) => {
      return <TextField multiline={true} value={params.value}/>
      
    },
  },
  { 
    field: 'lastName',
    headerName: 'Last name',
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <TextField multiline={true} value={params.value}/>
    ),
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    editable: true,
    renderCell: (params: GridRenderCellParams) => (
      <TextField multiline={true} value={params.value}/>
    ),
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

// const rows = [
//   { id: 1, weight: 100, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, weight: 100, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, weight: 100, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, weight: 100, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, weight: 100, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, weight: 100, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, weight: 100, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, weight: 100, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, weight: 100, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export const Results: FC = () => {
  // TODO: add type
  const [workouts, setWorkouts] = useState<any>([]);

  useEffect(() => {
    getResults() 
      .then((res) => {
        console.log('___', res);
        if (res?.days) {
          setWorkouts(res.days)
        }
      });
    
    console.log('___rows', handleParseRows());
  }, []);

  const handleParseRows = () => {
    return workouts.map((workout: { date: any, exercises: any[] }, id: number) => {
      return {
        id: id + 1,
        date: workout?.date,
        exercises: workout?.exercises,
      }
    })
  }

  const handleParseCols = () => {
    const names: string[] = [];

    workouts.forEach((w: any) => {
      w.exercises.forEach((e: any) => {
        names.push(e.name);
      })
    });

    const uniqNames = Array.from(new Set(names));

    console.log('___uniqNames', uniqNames);
    
    return uniqNames.map((workout: string, id: number) => {
      // return {
      //   name: 'name',
      //   headerName: 'Age',
      //   type: 'number',
      //   width: 90,
      //   editable: true,
      //   renderCell: (params: GridRenderCellParams) => (
      //     <TextField multiline={true} value={params.value}/>
      //   ),
      // }
      console.log('??workoug', workout);
      
      
      return {
        name: workout,
        headerName: capitalizeFirstChart(workout),
        type: 'string',
        width: 120,
        field: workout,
        renderCell: (params: GridRenderCellParams) => {
          console.log('____params', params.row.exercises);
          
          return (
            <TextField
              multiline={true}
              value={params.row.exercises.find((e: any) => e.name === workout)?.sets[0]?.result || '---'}
            />
          );
        },
      }
    })
  }

  return (
    <div>
      <Header />
      <Container>
        <Intro title={'Result title'} />
        
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={handleParseRows()}
            columns={handleParseCols()}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            getRowHeight={() => 'auto'}
            // rowSelection={false}
            // autoHeight={true}
            // rowHeight={100}
            
            // checkboxSelection
          />
        </div>
      </Container>
    </div>
  );
}
