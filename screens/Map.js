import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('screen');

const parkingsSpots = [
  {
    id: 1,
    title: 'Parking 1',
    price: 5,
    rating: 4.2,
    spots: 20,
    free: 10,
    coordinate: {
      latitude: 37.78735,
      longitude: -122.4334,
    },
    description: `Description about this parking lot
Open year 2018
Secure with CTV`,
  },
  {
    id: 2,
    title: 'Parking 2',
    price: 7,
    rating: 3.8,
    spots: 25,
    free: 20,
    coordinate: {
      latitude: 37.78845,
      longitude: -122.4344,
    },
    description: `Description about this parking lot
Open year 2014
Secure with CTV`,
  },
  {
    id: 3,
    title: 'Parking 3',
    price: 10,
    rating: 4.9,
    spots: 50,
    free: 25,
    coordinate: {
      latitude: 37.78615,
      longitude: -122.4314,
    },
    description: `Description about this parking lot
Open year 2019
Secure with CTV`,
  },
];

export default class Map extends Component {
  renderHeader() {
    return (
      <View style={style.header}>
        <Text style={style.map}>Heree</Text>
      </View>
    );
  }
  renderParking(item) {
    return (
      <View key={`parking-${item.id}`} style={style.parking}>
        <Text>{item.title}</Text>
      </View>
    );
  }
  renderParkings() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={style.parkings}>
        {parkingsSpots.map(parking => this.renderParking(parking))}
      </ScrollView>
    );
  }
  render() {
    return (
      <View style={style.container}>
        {this.renderHeader()}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={style.map}
        />
        {this.renderParkings()}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    flex: 3,
    // width: 1000,
    // height: 1000,
  },
  header: {
    flex: 0.5,
  },
  parking: {
    padding: 24,
    marginHorizontal: 24,
    width: width - 24 * 2,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  parkings: {
    position: 'absolute',
    bottom: 24,
  },
});
