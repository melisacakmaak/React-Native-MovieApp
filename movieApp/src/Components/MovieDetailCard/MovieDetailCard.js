import React from 'react';
import {View, Text} from 'react-native';
import styles from './MovieDetailCard.styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function MovieDetailCard({movieData}) {
  const {name, genre, rate, director, brief, cast} = movieData;

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.director}>by. {director}</Text>
        </View>
        <View style={styles.rate_container}>
          <Text style={styles.rate}>Rating </Text>
          <Icon name="staro" color="gold" size={25} />
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </View>
      <View style={styles.genre_container}>
        {genre?.map(item => (
          <View style={styles.genreBottom_container} {...item} key={item.id}>
            <Text style={styles.genre_text}>{item}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.brief}>{brief}</Text>
      <View style={styles.cast_container}>
        <View style={styles.cast_bottomContainer}>
          {cast?.map(item => (
            <View style={styles.cast_icon_container}>
              <Icon name="team" color="#761919" size={45} />
              <Text style={styles.cast}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
