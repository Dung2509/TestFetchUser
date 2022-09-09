import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  const width = Dimensions.get('screen').width;
  export default function InforUser({item,onPress}) {
    return (
      <TouchableOpacity style={styles.styleImage} onPress={onPress}>     
        <Text numberOfLines={1} style={styles.styleName}>
          {item.first_name}
        </Text>
        <Text numberOfLines={1} style={styles.stylePlan}>
          {item.last_name}
        </Text>
        <Text numberOfLines={1} style={styles.stylePlan}>
          {item.username}
        </Text>
        <Text numberOfLines={1} style={styles.stylePlan}>
          {item.email}
        </Text>
        <Text numberOfLines={1} style={styles.stylePlan}>
          {item.phone_number}
        </Text>
        <Text numberOfLines={1} style={styles.stylePlan}>
          {item.gender}
        </Text>
      </TouchableOpacity>
    );
  }
  const styles = StyleSheet.create({
    styleCard: {
      borderWidth: 1,
      width: width / 2 - 20,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 10,
    },
    styleName: {
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
      marginVertical: 5,
    },
    stylePlan: {
      color: 'black',
      marginLeft: 10,
      marginBottom: 5,
    },
    img: {
      width: width / 2 - 20,
      height: 150,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    styleImage: {
      borderWidth: 1,
      width: width / 2 - 10,
      margin: 5,
      borderRadius: 15,
    },
  });
  