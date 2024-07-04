import React, { useEffect, useState } from 'react';
import './Details.sass';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Details = (props) => {
  const { close } = props;
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/data/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log("api error", error);
        setLoading(false);
      }
    };

    fetchData(id);
  }, [id]);

  useEffect(() => {
    const fetchVideoData = async (trailerId) => {
      try {
        const response = await axios.get(`http://localhost:3000/veido/${trailerId}`);
        setVideoData(response.data);
      } catch (error) {
        setError(error);
        console.log("video api error", error);
      }
    };

    if (data && data.movieData && data.movieData.trailers && data.movieData.trailers[0]) {
      fetchVideoData(data.movieData.trailers[0].id);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.movieData) {
    return <div>No data found</div>;
  }

  const movieData = data.movieData;
  const contentDetails = movieData.contentDetails;

  return (
    <div className="details">
      <div className="close" onClick={close}>
        <FontAwesomeIcon icon={faX} />
      </div>

      <div className="box1">
        <div className="box-bg">
          {videoData && videoData.VeidoPlay && videoData.VeidoPlay[1] && (
            <video className='videoPlay' autoPlay controls>
              <source src={videoData.VeidoPlay[1].url} type="video/mp4" />
            </video>
          )}
          <img src={movieData.images[0].url} alt={contentDetails.title} />
        </div>

        <div className="titals">
          <div className="tital-img">
            {contentDetails.title.image && (
              <img src={contentDetails.title.image.url} alt={contentDetails.title.title} />
            )}
          </div>
          <div className="tital-info">
            <h1>{contentDetails.title.title}</h1>
            <div className="genres">
              <ul>
                {contentDetails.genres && contentDetails.genres.length > 0 && (
                  <li>{contentDetails.genres[3]}</li>
                )}
                <li>{contentDetails.title.year}</li>
                <li>{contentDetails.title.titleType}</li>
                {contentDetails.ratings && (
                  <li>{contentDetails.ratings.rating}</li>
                )}
              </ul>
            </div>
            <div className="pra">
              {contentDetails.plotOutline && (
                <p>{contentDetails.plotOutline.text}</p>
              )}
            </div>
            <div className="buttons">
              <button>Watch Now</button>
              <button>My List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
