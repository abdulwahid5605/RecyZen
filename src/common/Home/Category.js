import React from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';

const Category = ({data}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageRow}>
          {data.map((item, i) => (
            <View key={i} style={styles.itemContainer}>
              <View style={styles.roundedContainer}>
                <Image source={item.imageUrl} style={styles.image} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          ))}
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
    // borderWidth: 1,
    // borderColor: '#000',
    height: 100,
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
    height: 100,
  },
  roundedContainer: {
    backgroundColor: '#A2E7E5',
    borderRadius: 100,
    marginHorizontal: 5,
    overflow: 'hidden',
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    tintColor: '#808080',
  },
});

export default Category;
