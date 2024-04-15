import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Home/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from './tabs/Home';
import Search from './tabs/Search';
import WishList from './tabs/WishList';
import Notification from './tabs/Notification';
import User from './tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedIndex] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title={'RecyZen'}
      /> */}
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <WishList />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : selectedTab == 4 ? (
        <User />
      ) : (
        'page not found'
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(0);
          }}>
          <Image
            source={
              selectedTab == 0
                ? require('../images/home_fill.png')
                : require('../images/home.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(1);
          }}>
          <Image
            source={
              selectedTab == 1
                ? require('../images/search_fill.png')
                : require('../images/search.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(2);
          }}>
          <Image
            source={
              selectedTab == 2
                ? require('../images/wishlist_fill.png')
                : require('../images/wishlist.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(3);
          }}>
          <Image
            source={
              selectedTab == 3
                ? require('../images/not_fill.png')
                : require('../images/not.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(4);
          }}>
          <Image
            source={
              selectedTab == 4
                ? require('../images/user_fill.png')
                : require('../images/user.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomView: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  buttonTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTabIcon: {
    width: 24,
    height: 24,
  },
});
