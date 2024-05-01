import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {data} from '../data'
import CardMedia from '@mui/material/CardMedia'
import {useState, useEffect} from 'react'
import { Box, Container } from '@mui/system';
export function Records(){
  const [records, setRecords] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    // const fetchRecords = async () => {
    //   const response = await fetch('https://api.discogs.com/users/ghostly64/collection/folders/0/releases?sort=added&page=1&per_page=50&sort_order=desc', {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded', 
    //       'User-Agent': 'PostmanDiscogs/1.0', 
    //       'Authorization': 'OAuth oauth_consumer_key="bwcIEfydSSfolgDTrYVs",oauth_token="oBskqeOIwChEGfMterEcgJbqDeehUwHJtIBclcBO",oauth_signature_method="PLAINTEXT",oauth_timestamp="1714405046",oauth_nonce="3ab2ecbd-7acc-4441-9389-29688543862f",oauth_version="1.0",oauth_signature="HLVDfYNOfRrUfsuELZgOxPyIXPPCNyJE%26nUhFDkdvUDelDsvSHhFKQgwHdosAoPrNfKhoNnqv"'
    
    //     }
    //   });
    //   const data = await response.json();
    //   setRecords(data.releases);
    //   setPagination(data.pagination)
    //  console.log(records)
    // }
    setRecords(data);

    // fetchRecords();
  }, []);
  return(
    records.map((record) => (
      <Grid  key={record.id}>
             <CardMedia
             key={record.id}
     component="img"
     height="194"
     image={record.basic_information.cover_image}
     alt={record.basic_information.title}
     loading="lazy"
   />
    </Grid>
   ))
  )
}

export default Records;