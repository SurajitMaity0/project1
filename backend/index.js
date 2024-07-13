const express = require('express');
const axios = require('axios');
const path = require('path');
const admin = require('./firebase-config');

const app = express();
require('dotenv').config();

// serve react pages
const buildPath = '../client/dist';
app.use(express.static(path.join(__dirname, buildPath)));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, buildPath, 'index.html'));
});


app.get('/sign-in', (req, res) => {
  res.send('This is Sign-in Page');
});

app.get('/data', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/find',
    params: {
      title: 'Klaus ',
    },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': apihost
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data.results;
    const contentInfo = [];
    data.map((i) => {
      if (i.titleType === 'movie' || i.titleType === 'tvSeries') {
        contentInfo.push({ id: i.id, image: i.image, title: i.title, titleType: i.titleType, year: i.year });
      }
    });
    
    res.json({ contentInfo });
 
    
  } catch (error) {
    console.error(error);
  }
}
);

app.get('/data/:id', async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const options = (endpoint) => ({
    method: 'GET',
    url: `https://online-movie-database.p.rapidapi.com/title/${endpoint}`,
    params: { tconst: id },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': apihost
    }
  });

  try {
    const [trailerResponse, imageResponse, contentDetailsResponse] = await Promise.all([
      axios.request(options('v2/get-trailers')),
      axios.request(options('v2/get-images')),
      axios.request(options('get-overview-details'))
    ]);
    
    const trailers = trailerResponse.data.data?.title?.primaryVideos?.edges
      ?.filter(i => i.node.contentType.id === "amzn1.imdb.video.contenttype.trailer")
      ?.map(i => ({ id: i.node.id, contentType: i.node.contentType.id })) || [];

    const images = imageResponse.data.data?.title?.images?.edges
      ?.filter(i => i.node.type === 'still_frame')
      ?.slice(0, 3)
      ?.map(i => ({ id: i.node.id, url: i.node.url })) || [];

    const contentDetails = contentDetailsResponse.data

    const movieData = { contentDetails, trailers, images };
    
    res.json({ movieData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.get('/veido/:id', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-video-playback',
    params: {
      viconst: req.params.id
    },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': apihost
    }
  };
  
  try {
    const response = await axios.request(options);
    const data = response.data.data.video.playbackURLs;
    const VeidoPlay = [];
    data.map((i) => {
      if(i.videoMimeType === 'M3U8'){
        return;
      }
      VeidoPlay.push({ url: i.url, videoMimeType:i.videoMimeType});

        
    });
    res.json({VeidoPlay});
  } catch (error) {
    console.error(error);
  }
}
);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



