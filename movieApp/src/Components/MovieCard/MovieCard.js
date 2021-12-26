import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MovieCard.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../style/color';

export default function MovieCard({movie, onSelect}) {
  const {name, genre, rate, director, brief, images} = movie;

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: images,
          }}
          style={styles.image}>
          <LinearGradient colors={color.linear_colors} style={styles.linear}>
            <Text numberOfLines={2} style={styles.brief}>
              {brief}
            </Text>
          </LinearGradient>
        </ImageBackground>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.director}>by. {director}</Text>

        <View style={styles.rate_container}>
          <Icon name="star" color="gold" size={30} />
          <Text style={styles.rate}>{rate}</Text>
        </View>
        <View style={styles.genre_container}>
          {genre.map(item => (
            <View style={styles.genreBottom_container}>
              <Text style={styles.genre_text}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
