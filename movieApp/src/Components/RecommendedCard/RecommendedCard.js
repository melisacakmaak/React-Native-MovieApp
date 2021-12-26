import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './RecommendedCard.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RecommendedCard({recommendedMovies, onSelect}) {
  const {name, genre, rate, director, brief} = recommendedMovies;

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text style={styles.director}>by. {director}</Text>
        <View style={styles.bottom_container}>
          <View style={styles.genre_container}>
            {genre.map(item => (
              <View
                style={styles.genreBottom_container}
                {...item}
                key={item.id}>
                <Text style={styles.genre_text}>{item}</Text>
              </View>
            ))}
          </View>
          <Text numberOfLines={2} style={styles.brief_text}>
            {brief}
          </Text>
          <View style={styles.rate_container}>
            <Icon name="star" size={14} color="gold" />
            <Text style={styles.rate_text}>{rate}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
