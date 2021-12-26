import {useRoute, useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, View, Text, ScrollView, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import LinearGradient from 'react-native-linear-gradient';

import useMovieDetail from '../../hooks/useMovieDetail';
import MovieDetailCard from '../../Components/MovieDetailCard/MovieDetailCard';
import styles from './MoviesDetail.styles';
import useMovie from '../../hooks/useMovies';
import RecommendedCard from '../../Components/RecommendedCard';
import routes from '../../Navigation/routes';
import useComments from '../../hooks/useComments';
import CommentsCard from '../../Components/CommentsCard/CommentsCard';
import Input from '../../Components/Input/Input';
import color from '../../style/color';

const {width} = Dimensions.get('window');
export default function MoviesDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const {data} = useMovie();
  const {id} = route.params;
  const [movieComment, setComments] = useState([]);

  const {movieDetailData} = useMovieDetail(id);
  const {movieComments} = useComments(id);

  const selectedMovieGenre = movieDetailData.genre ? movieDetailData.genre : '';

  const recommended = data
    ?.filter(item => selectedMovieGenre?.includes(`${item.genre}`))
    .slice(0, 4);

  const comments = movieComments.filter(cmt => cmt.movieId === id);

  function selectedMovie(selectedMovieId) {
    navigation.reset({
      routes: [
        {
          name: routes.MOVIES_DETAIL_PAGE,
          params: {id: selectedMovieId},
        },
      ],
    });
  }

  function onAddComment(comment) {
    setComments([...movieComment, comment]);
  }
  const renderRecomended = ({item}) => (
    <RecommendedCard
      recommendedMovies={item}
      onSelect={() => selectedMovie(item.id)}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.animated_header_component}>
        <Image
          style={styles.image}
          source={require('../../../assets/movie_poster.png')}
        />
        <LinearGradient colors={color.linear_colors} style={styles.linear} />
      </View>
      <View style={styles.movieCard_container}>
        <MovieDetailCard movieData={movieDetailData} />
      </View>
      <Text style={styles.text}>Recommended Movies</Text>
      <View>
        <Carousel
          data={recommended}
          renderItem={renderRecomended}
          sliderWidth={350}
          itemWidth={width * 0.5}
          layout="stack"
          layoutCardOffset={`18`}
        />
      </View>
      <View style={styles.comment_container}>
        <Text style={styles.text}>See Reviews</Text>
        {comments.length ? (
          comments.map(item => <CommentsCard comments={item} />)
        ) : (
          <Text style={styles.firstComment_text}>Add First Comment</Text>
        )}
        {movieComment &&
          movieComment.map(item => <CommentsCard comments={item} />)}
        <View>
          <Input onAddComment={onAddComment} />
        </View>
      </View>
    </ScrollView>
  );
}
