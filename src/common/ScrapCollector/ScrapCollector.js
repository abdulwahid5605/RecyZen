import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ScrapCollector = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Main');
  };

  const handleForm = () => {
    navigation.navigate('ScrapDetailsForm');
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require('../../images/scOne.jpg'),
    require('../../images/scTwo.jpg'),
    require('../../images/scThree.jpg'),
    // Add more image sources as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.parent}>
      <View style={styles.mainhead}>
        <TouchableOpacity style={styles.back} onPress={handlePress}>
          <Image
            source={require('../../images/back.png')}
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Scrap Collector</Text>
      </View>
      <View style={styles.container}>
        <ImageBackground
          source={images[currentIndex]}
          style={styles.imageBackground}>
          <View style={styles.bottomView}>
            <View style={styles.bottomViewContent}>
              <Text style={styles.text}>Abdul Wahid</Text>
              <View style={styles.starContainer}>
                <Image
                  source={require('../../images/star.png')}
                  style={styles.buttonTabIcon}
                />
                <Text style={styles.text}>4</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.lastcontainer}>
        <View>
          <Text style={styles.heading}>Details</Text>
        </View>
        <View style={styles.belowdetails}>
          <View style={styles.belowdetailscontent}>
            <Image
              source={require('../../images/time.png')}
              style={styles.buttonTabIcon}
            />
            <Text style={styles.belowdetailstext}>24/7 hours</Text>
          </View>
          <View style={styles.belowdetailscontent}>
            <Image
              source={require('../../images/star.png')}
              style={styles.buttonTabIcon}
            />
            <Text style={styles.belowdetailstext}>4.5</Text>
          </View>
        </View>
        <View>
          <Text>
            The Scrap Collector Abdul Wahid accept all kinds of scrap material.
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleForm} style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ScrapCollector;

const styles = StyleSheet.create({
  mainhead: {
    backgroundColor: '#B6F0EC',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: 250 + 2 * 14,
    padding: 14,
  },

  imageBackground: {
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  bottomView: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    width: '80%',
    height: '30%',
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
    fontSize: 18,
    marginLeft: 4,
  },
  buttonTabIcon: {
    width: 16,
    height: 16,
  },
  starContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  back: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  buttonTabIcon: {
    height: 22,
    width: 22,
  },

  button: {
    backgroundColor: '#50C2C9',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  lastcontainer: {
    height: 300 + 2 * 14,
    justifyContent: 'space-around',
    padding: 14,
  },
  belowdetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  belowdetailscontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  belowdetailstext: {
    marginLeft: 4,
  },
});
