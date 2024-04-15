import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const SearchBar = () => {
  const handleSearch = text => {
    console.warn(text);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.heading}>Scrap Collector</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        placeholder="Search..."
        onChangeText={text => handleSearch(text)}
      />
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#B6F0EC',
    height: 102,
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    color: '#808080',
    marginVertical: 10,
    fontWeight: '600',
  },
});
