import {Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../../common/Search/SearchBar';
import ScrapColletorDetails from '../../common/Search/ScrapCollectorDetails';
import Buttons from '../../common/Search/Buttons';
// import MapScreen from '../../common/Search/MapScreen';

const Search = () => {
  return (
    <View>
      <SearchBar />
      {/* <MapScreen /> */}
      <Buttons />
      <ScrapColletorDetails
        data={[
          {
            imageUrl: require('../../images/scOne.jpg'),
            text: 'Scrap Collector Saeed',
            rating: '4.3',
          },
          {
            imageUrl: require('../../images/scTwo.jpg'),
            text: 'Scrap Collector Wahid',
            rating: '4',
          },
          {
            imageUrl: require('../../images/scThree.jpg'),
            text: 'Scrap Collector Abrar',
            rating: '5',
          },
        ]}
      />
    </View>
  );
};

export default Search;
