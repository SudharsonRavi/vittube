import React from 'react'
import { Stack, Box } from '@mui/material';
import {VideoCard ,Loader} from './'


export default function Videos({videos,direction}) {
  if(!videos?.length) return <Loader />;
  console.log(videos)
  console.log("hello")  
  return (
 <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item,idx)=>(
        <Box key={idx}>
           {item && item.video && item.video.videoId && (
            <VideoCard item={item} /> )}
           {/* {item && item.video && item.video.author.channelId && <ChannelCard item={item} />} */}
        </Box>
    ))} 


 </Stack> 
  )
}
