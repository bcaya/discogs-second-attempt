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
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [pagination, setPagination] = useState({});
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch('https://api.discogs.com/users/ghostly64/collection/folders/0/releases?sort=added&page=1&per_page=50&sort_order=desc', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
          'User-Agent': 'PostmanDiscogs/1.0', 
          'Authorization': 'OAuth oauth_consumer_key="bwcIEfydSSfolgDTrYVs",oauth_token="oBskqeOIwChEGfMterEcgJbqDeehUwHJtIBclcBO",oauth_signature_method="PLAINTEXT",oauth_timestamp="1714405046",oauth_nonce="3ab2ecbd-7acc-4441-9389-29688543862f",oauth_version="1.0",oauth_signature="HLVDfYNOfRrUfsuELZgOxPyIXPPCNyJE%26nUhFDkdvUDelDsvSHhFKQgwHdosAoPrNfKhoNnqv"'
    
        }
      });
      const data = await response.json();
      setRecords(data.releases);
      setFilteredRecords(data.releases)
      setPagination(data.pagination)
    }

    fetchRecords();
  }, []);
  
  function handleChange(e) {
    setQuery(e.target.value);

          // Filter items based on search query
          const filtered = records.filter((record) =>
            record.basic_information.title.toLowerCase().includes(query.toLowerCase()) ||
          record.basic_information.artists[0].name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredRecords(filtered);
        };
    
        
      


  
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
  <TextField
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      
    </Box>
        </div>
      </Box>
      <Grid spacing={1} container >
  
    
       {filteredRecords.map((record) => (
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
))}
      
      </Grid>
      </Container>
   

    
  )};

export default App;