import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import Category from '../../common/Category';
import ScrapCollector from '../../common/ScrapCollectors';
import PostPublicly from '../../common/PostPublicly';
const {height, width} = Dimensions.get('window');

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
      <View style={styles.bgColor}>
        <View>
          <Text style={styles.heading}>Scrap Collectors</Text>
        </View>
        <ScrapCollector
          data={[
            {
              imageUrl: require('../../images/scOne.jpg'),
              name: 'Abdul Wahid',
              email: 'abdulwahid@gmail.com',
              phone: '03202977960',
            },
            {
              imageUrl: require('../../images/scTwo.jpg'),
              name: 'Saeed Ali',
              email: 'saeedali@gmail.com',
              phone: '03202977960',
            },
            {
              imageUrl: require('../../images/scThree.jpg'),
              name: 'Abrar Ahmed',
              email: 'abrarahmed@gmail.com',
              phone: '03202977960',
            },
          ]}
        />
        <View>
          <Text style={styles.heading}>Post Publicly</Text>
        </View>
        <PostPublicly
          data={[
            {
              imageUrl: require('../../images/plastic.jpeg'),
              text: 'Plastic',
            },
            {
              imageUrl: require('../../images/metal.jpeg'),
              text: 'Metal',
            },
            {
              imageUrl: require('../../images/paper.jpg'),
              text: 'Paper',
            },
            {
              imageUrl: require('../../images/bottle.png'),
              text: 'Bottle',
            },
          ]}
        />
      </View>
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
    marginVertical: 19,
  },
  bgColor: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    paddingTop: 10,
    marginTop: 12,
  },
});
