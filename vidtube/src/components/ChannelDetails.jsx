import React from 'react'
import { useState,useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";
import {ChannelCard,Videos} from './';

export default function ChannelDetails() {
  const [videos,setVideos]=useState(null);
  const[channelDetail,setChannelDetail]=useState(null);

  const id=useParams()
  console.log(id)

  useEffect(()=>{
    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channel/details/?id=${id.id}`);
        setChannelDetail(data);

        if (data.title) {
          const videosData = await fetchFromAPI(`search/?part=snippet&q=${data.title}`);
          setVideos(videosData.contents);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }

        
    
      

      

      
    };
    fetchResults();
  },[id])
  console.log(channelDetail)
  // console.log(videos.contents)
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {channelDetail &&
          <ChannelCard item={channelDetail} marginTop="-93px" />
        }
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}
