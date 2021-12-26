import React from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';

import styles from './FilterModal.style';

let genre_List = [
  'COMEDY',
  'HORROR',
  'THRILLER',
  'ROMANCE',
  'ACTION',
  'DRAMA',
  'FANTASY',
];
export default function FilterModal({isVisible, onSelectGenre}) {
  function selectedGenres(selectedGenre) {
    onSelectGenre(selectedGenre);
  }

  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View style={styles.container}>
        {genre_List.map(item => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => selectedGenres(item)}>
            <Text style={styles.button_text}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => selectedGenres(null)}>
          <Text style={styles.button_text}>ALL GENRES</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
