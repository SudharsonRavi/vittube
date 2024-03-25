import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Typography, Stack,Box} from "@mui/material";
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react';
import {Loader, Videos} from './'
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function VideoDetails() {
 
  const [videoDetail,setVideoDetail]=useState('');
  const [videos,setVideos]=useState('')

  const {id}=useParams()

  useEffect(()=>{
    fetchFromAPI(`video/details/?id=${id}`).
    then((data)=>setVideoDetail(data))

    fetchFromAPI(`video/related-contents/?id=${id}`)
      .then((data) => setVideos(data.contents))
  },[id])
  if(!videoDetail) return <Loader />;
  console.log(videoDetail)
  console.log(videos)

  const channelTitle=videoDetail.author.title;
  const title=videoDetail.title
  const channelId=videoDetail.author.channelId
  const viewCount=videoDetail.stats.views
  const likeCount=videoDetail.stats.likes
 
  console.log(videoDetail)
  return (
    <Box minHeight="95vh">
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box flex={1}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                {channelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
        <Videos videos={videos} direction="column" />
      </Box>
    </Stack>
  </Box>
  )
}
