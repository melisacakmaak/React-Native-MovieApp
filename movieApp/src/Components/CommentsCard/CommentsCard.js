import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import styles from './CommentsCard.style';

export default function CommentsCard({comments}) {
  const {comment} = comments;
  return (
    <View style={styles.container}>
      <Icon
        name="comment-video"
        size={30}
        color="#DDBCBC"
        style={styles.icon}
      />
      <Text style={styles.comments_text} numberOfLines={3}>
        {comment}
      </Text>
    </View>
  );
}
