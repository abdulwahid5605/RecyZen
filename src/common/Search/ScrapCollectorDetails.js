import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const ScrapCollectorDetails = ({data}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ScrapCollector');
  };
  return (
    <ScrollView
      style={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {data.map((item, i) => (
        <TouchableOpacity onPress={handlePress} key={i}>
          <View style={styles.container}>
            <ImageBackground
              source={item.imageUrl}
              style={styles.backgroundImage}>
              <View style={styles.bottomView}>
                <View style={styles.bottomViewContent}>
                  <Text style={styles.text}>{item.text}</Text>
                  <View style={styles.starContainer}>
                    <Image
                      source={require('../../images/star.png')}
                      style={styles.buttonTabIcon}
                    />
                    <Text style={styles.text}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  backgroundImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  bottomView: {
    position: 'absolute',
    bottom: 10,
    left: 12,
    width: '90%',
    backgroundColor: '#50C2C9',
    padding: 10,
    borderRadius: 10,
  },
  bottomViewContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
  },
  buttonTabIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  starContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default ScrapCollectorDetails;
