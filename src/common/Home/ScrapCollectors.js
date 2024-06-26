import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ScrapCollector = ({data}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ScrapCollector');
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.imageRow} key={i}>
              <View style={styles.childContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.email}</Text>
                  <Text style={styles.text}>{item.phone}</Text>
                </View>
                <View>
                  <Image source={item.imageUrl} style={styles.image} />
                </View>
              </View>
              <Text style={styles.title}></Text>
            </View>
          </TouchableOpacity>
        ))}
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
    width: 260,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 110,
    height: 80,
    // tintColor: '#808080',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  text: {
    fontSize: 10,
    color: '#808080',
  },

  textContainer: {
    height: 100,
    fontSize: 16,
    color: '#808080',
    justifyContent: 'space-evenly',
  },
});

export default ScrapCollector;
