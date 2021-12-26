/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://10.0.3.2:3000/comments';

export default function useComments(id) {
  const [movieComments, setMovieComments] = useState([]);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    try {
      const response = await axios.get(`${URL}?movieId${id}`);
      setMovieComments(response.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movieComments,
    error,
  };
}
