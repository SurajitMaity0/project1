const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
require('dotenv').config();


// use cros
app.use(cors());
app.use(express.json());

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'maity0001',
  database: 'masti60'
});

// connect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected...');
});

const movieData = [];



const apikey = "e1d35bcec6mshfd8ab498d42aa17p1b0badjsn547826a163db";
const apihost = "online-movie-database.p.rapidapi.com";


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/data', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/find',
    params: {
      title: 'Tarzan',

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

app.post('/user', (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const sqlInsert = "INSERT INTO Users (firstName, lastName, email, password, confirmPassword) VALUES (?,?,?,?,?)";
  db.query(sqlInsert, [firstName, lastName, email, password, confirmPassword], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("resule", result);

  }
  );

  res.send('Hello World');

});






app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



