import logo from './logo.svg';
import {useState, useEffect} from 'react'
import ReactSearchBox from "react-search-box";
import './App.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { Box, Container } from '@mui/system';
import Records from './components/Records.js'
import CardMedia from '@mui/material/CardMedia'
import {data} from './data.js'
import TextField from '@mui/material/TextField';
function App() {
  const [records, setRecords] = useState([]);
  const [pagination, setPagination] = useState({});
  const [query, setQuery] = useState('');
  const dummyRecords = data
  console.log(dummyRecords)
  
  function handleChange(e) {
    setQuery(e.target.value);
  }
const list = records.map((record) => (
  <Grid  key={record.id}>
         <CardMedia
         key={record.id}
        component="img"
        height="194"
        image={record.basic_information.cover_image}
        alt={record.basic_information.title}
        title={record.basic_information.title}
        artist={record.basic_information.artists[0].name}
        loading="lazy"
      />
</Grid>
))
function List({ records }){
  return(records.map((record) => (
  <Grid  key={record.id}>
         <CardMedia
         key={record.id}
        component="img"
        height="194"
        image={record.basic_information.cover_image}
        alt={record.basic_information.title}
        title={record.basic_information.title}
        artist={record.basic_information.artists[0].name}
        loading="lazy"
      />
</Grid>
)))
}
  
  return (<Container>
      <Box>
        <h2>My Record Collection</h2>
        <div className="search">
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}
      query={query}
       />
      
    </Box>
        </div>
      </Box>
      <Grid spacing={1} container >
  
    
       {list}
      
      </Grid>
      </Container>
   

    
  );
};

export default App;