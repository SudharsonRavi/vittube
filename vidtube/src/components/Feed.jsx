import React from 'react'
import { Stack } from '@mui/material'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import {SideBar, Videos} from './'
import { useState,useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('New');
  const [videos,setVideos]=useState(null);

  useEffect(() => {
    
  
    fetchFromAPI(`search/?part=snippet&q=${selectedCategory}`)
      .then((data) => {
      setVideos(null)
        console.log(data.contents) 
        setVideos(data.contents);
      
      })
  }, [selectedCategory]);
  return (
   
     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Sanjai
        </Typography>
        
      </Box>

      <Box p={2} sx={{flex:'2', overflowY:"auto",height:"90vh"}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
</Typography>

<Videos videos={videos} />
      </Box>
      
       
       </Stack>

 
  )
}

export default Feed;
