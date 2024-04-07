import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import Category from '../../common/Category';
import ScrapCollector from '../../common/ScrapCollectors';
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../images/menu.png')}
        rightIcon={require('../../images/cart.png')}
        title={'RecyZen'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      <View>
        <Text style={styles.heading}>Categories</Text>
      </View>
      <Category
        data={[
          {
            imageUrl: require('../../images/plasticScrap.png'),
            title: 'Plastic',
          },
          {
            imageUrl: require('../../images/paperScrap.png'),
            title: 'Paper',
          },
          {
            imageUrl: require('../../images/metalScrap.png'),
            title: 'Metal',
          },
          {
            imageUrl: require('../../images/electronicScrap.png'),
            title: 'Electronic',
          },
          {
            imageUrl: require('../../images/carScrap.png'),
            title: 'Car',
          },
        ]}
      />
      <View>
        <Text style={styles.heading}>Scrap Collectors</Text>
      </View>
      <ScrapCollector />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6F0EC',
    flex: 1,
  },

  heading: {
    textAlign: 'center',
    fontSize: 16,
    color: '#808080',
  },
});
