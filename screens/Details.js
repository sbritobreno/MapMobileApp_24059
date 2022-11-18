import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IconButton } from '@react-native-material/core';

function MarkerDetails({ navigation, route }) {
  const { marker } = route.params
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
        <Image source={{uri: `https://picsum.photos/id/${Math.floor(Math.random() * 10)}/200/300`}}
          style={{ width: 150, height: 150, borderRadius: 400 / 2, marginBottom: 20 }} />
        <Text style={styles.text}>ID: {marker.id}</Text>
        <Text style={styles.text}>Name: {marker.name}</Text>
        <Text style={styles.text}>Gaelic Name: {marker.gaelic_name ? marker.gaelic_name : 'not available'}</Text>
        <Text style={styles.text}>Type: {marker.place_type_id}</Text>
        <Text style={styles.text}>Latitude: {marker.latitude}</Text>
        <Text style={styles.text}>Longitude: {marker.longitude}</Text>
      </View>
      <View style={{ flex: 0, alignItems: 'flex-end', margin: 10 }}>
        <IconButton
          icon={props => <AntDesign name="back" size={36} color="blue" />}
          color="primary"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    width: 260,
    borderColor: 'blue',
    borderWidth: 2,
    padding: 4,
    margin: 5,
    borderRadius: 10
  }
});

export default MarkerDetails;
