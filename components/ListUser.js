import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemUser from './ItemUser';
import InforUser from './InforUser';
const width = Dimensions.get('screen').width;
export default function ListUser() {
  const [dataUser, setDataUser] = useState([]);
  const [loadUser, setLoadUser] = useState(false);
  useEffect(() => {
    fetchRandom();
    setLoadUser(false);
  }, []);

  const fetchRandom = async () => {
    const response = await fetch(
      'https://random-data-api.com/api/users/random_user?size=10',
    );
    const json = await response.json();
    setDataUser(json);
  };

  const [selectId, setSelectId] = useState();
  //   const [inforUser, setInforUser] = useState(false);
  const renderItem = ({item}) => {
    // const check = item.id === selectId ? 'true' : 'false';
    return (
      <>
        {item.id === selectId ? (
          <InforUser item={item} onPress={() => setSelectId(item.id)} />
        ) : (
          <ItemUser item={item} onPress={() => setSelectId(item.id)} />
        )}
      </>

      //   <ItemUser item={item} />
    );
  };
  return (
    <View>
      <TouchableOpacity style={styles.styleBtn} onPress={fetchRandom}>
        <Text style={styles.styleFetch}>Fetch Random</Text>
      </TouchableOpacity>
      {!loadUser ? (
        <FlatList
          style={styles.styleFlatlist}
          numColumns={2}
          data={dataUser}
          renderItem={renderItem}
        />
      ) : (
        <ActivityIndicator size={'large'} color={'red'} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  styleBtn: {
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    marginVertical: 10,
  },

  styleFetch: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  styleFlatlist: {
    backgroundColor: '#3399CC',
    height: Dimensions.get('screen').height - 90,
  },
});
