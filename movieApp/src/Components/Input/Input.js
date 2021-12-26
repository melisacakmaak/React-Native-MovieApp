import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Input.styles';

const Input = ({onAddComment}) => {
  const [comment, setComment] = useState('');

  function handleAddList() {
    onAddComment({comment});
    setComment('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder="Add your comment for the movie..."
          placeholderTextColor={'#999595'}
          onChangeText={setComment}
          value={comment}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddList}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Input;
