import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../../hooks/useMovies';

import MovieCard from '../../Components/MovieCard';
import routes from '../../Navigation/routes';
import styles from './Movies.style';
import FilterModal from '../../Components/FilterModal/FilterModal';

const {width} = Dimensions.get('window');
export default function Movies() {
  const navigation = useNavigation();
  const {data, loading, error} = useMovies();

  const [genre, setGenre] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  function selectMovie(id) {
    navigation.navigate(routes.MOVIES_DETAIL_PAGE, {id});
  }

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  function onSelectGenre(genres) {
    setGenre(genres);
    setModalVisible(!isModalVisible);
  }

  const renderMovies = ({item}) => (
    <MovieCard movie={item} onSelect={() => selectMovie(item.id)} />
  );
  const filter_movieGenre = genre
    ? data.filter(item => item.genre.includes(genre))
    : data;

  if (error) {
    Alert.alert('error' + error.message);
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Icon name="md-filter-sharp" size={40} color="white" />
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" />}
      <FilterModal isVisible={isModalVisible} onSelectGenre={onSelectGenre} />
      <Carousel
        data={filter_movieGenre}
        renderItem={renderMovies}
        sliderWidth={width}
        itemWidth={width * 0.7}
      />
    </SafeAreaView>
  );
}
