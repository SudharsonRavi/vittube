import React from 'react'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import { Videos} from './'
import { useState,useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  
  const [videos,setVideos]=useState(null);

  const {searchTerm}=useParams()

  useEffect(() => {
    
  
    fetchFromAPI(`search/?part=snippet&q=${searchTerm}`)
      .then((data) => {
      setVideos(null)
        console.log(data.contents) 
        setVideos(data.contents);
      
      })
  }, [searchTerm]);
  return (
   
    <Box p={2} sx={{flex:'2', overflowY:"auto",height:"90vh"}}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Search Result {searchTerm} <span style={{ color: "#FC1503" }}>videos</span>
     </Typography>

       <Videos videos={videos} />
    </Box>

 
  )
}

export default SearchFeed;
