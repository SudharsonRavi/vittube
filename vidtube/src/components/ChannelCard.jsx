import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from '../utils/constants';

export default function ChannelCard({item,marginTop }) {
  // Check if item is defined and has the expected structure
  

  const channelId = item.channelId;
  const channelIcon = item.avatar[2].url || demoProfilePicture;
  const channelTitle = item.title;
 console.log(channelTitle)
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop
      }}
    >
      {/* Use Link properly, it should be wrapped around the content */}
      <Link to={channelId && `/channel/${channelId}`}>
        <CardContent>
          <CardMedia
            component="img"
            image={channelIcon}
            alt={channelTitle}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />

{channelTitle && (
            <Typography variant="h6" color='white'>
              {channelTitle}{''}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'white', ml: '5px' }} />
            </Typography>
          )}
        {item.stats.subscribers && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(item.stats.subscribers ).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  );
}
