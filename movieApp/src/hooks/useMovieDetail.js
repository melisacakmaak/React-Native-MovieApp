/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://10.0.3.2:3000/movies';

export default function useMovieDetail(id) {
  const [movieDetailData, setMovieDetailData] = useState([]);

  async function fetchMovies() {
    const response = await axios.get(`${URL}/${id}`);
    setMovieDetailData(response.data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movieDetailData,
  };
}
