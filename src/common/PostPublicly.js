import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const PostPublicly = ({data}) => {
  return (
    <ScrollView horizontal>
      {data.map((item, i) => (
        <TouchableOpacity style={styles.container}>
          <Image source={item.imageUrl} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: '#808080',
  },
});
export default PostPublicly;
