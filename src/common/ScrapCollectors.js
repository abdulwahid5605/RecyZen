import React from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';

const ScrapCollector = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.imageRow}>
          <View style={styles.childContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>name</Text>
              <Text style={styles.text}>email</Text>
              <Text style={styles.text}>contact</Text>
            </View>
            <View>
              <Image
                source={require('../images/scTwo.jpg')}
                style={styles.image}
              />
            </View>
          </View>
          <Text style={styles.title}></Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  childContainer: {
    backgroundColor: '#A2E7E5',
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
    height: 120,
    width: 250,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 100,
    // tintColor: '#808080',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  text: {
    fontSize: 16,
    color: '#808080',
  },

  textContainer: {
    height: 100,
    fontSize: 16,
    color: '#808080',
    justifyContent: 'space-between',
  },
});

export default ScrapCollector;
