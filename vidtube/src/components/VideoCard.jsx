import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

export default function VideoCard({item}) {
//  console.log(item.video.videoId)

if (!item.video || !item.video.thumbnails || !item.video.thumbnails.length) {
  return null; // You can choose to render nothing or a placeholder here
}

const thumbnailUrl = item.video.thumbnails[0].url || demoThumbnailUrl;
const videoId=item.video.videoId;
const title=item.video.title;
const channelId=item.video.author.channelId;
const channelTitle=item.video.author.title;
  return (
   <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
       
        <CardMedia
          image={thumbnailUrl}
          alt={item.video.videoId}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      
    
    </Link>

    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    <Typography ariant="subtitle1" fontWeight="bold" color="#FFF">
     {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
    </Typography>
    </Link>

    <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {channelTitle|| demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>

    </CardContent>


     

   </Card>
  )
}
