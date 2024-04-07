import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';

const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onClickLeftIcon();
        }}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image source={rightIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: '#B6F0EC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },

  btn: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 26,
    height: 26,
    tintColor: 'black',
  },

  title: {
    color: 'black',
    fontSize: 20,
  },
});
