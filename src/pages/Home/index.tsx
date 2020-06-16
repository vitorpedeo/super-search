import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import styles from './styles';

interface Heroe {
  id: number;
  name: string;
  image: {
    url: string;
  };
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [heroes, setHeroes] = useState<Heroe[]>([]);

  const navigation = useNavigation();

  const handleSearch = () => {
    /**
     * Caso o usuário já tenha feito uma pesquisa com sucesso,
     * isso evitará que loading fique em cima dos resultados da primeira busca
     */
    setHeroes([]);

    setLoading(true);

    axios
      .get(
        `https://www.superheroapi.com/api.php/1938690802931390/search/${name}`
      )
      .then((response) => {
        if (response.data.response === 'error') {
          Alert.alert('No character found, please try again');
          setLoading(false);
          return;
        }

        setHeroes(response.data.results);
        setLoading(false);
      })
      .catch((error) => Alert.alert(error));
  };

  const handleNavigateToDetailPage = (id: number) => {
    navigation.navigate('Detail', { characterId: id });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter a character name...'
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <RectButton style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </RectButton>

      {loading && (
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size='large' color='#04E762' />
        </View>
      )}

      {heroes.length ? (
        <FlatGrid
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginTop: 20 }}
          itemDimension={130}
          data={heroes}
          renderItem={({ item }) => (
            <ImageBackground
              source={{
                uri: item.image.url,
              }}
              imageStyle={{ borderRadius: 10 }}
              style={styles.heroImage}
            >
              <RectButton
                style={styles.heroButtonAndContainer}
                onPress={() => handleNavigateToDetailPage(item.id)}
              >
                <Text style={styles.heroName}>{item.name}</Text>
              </RectButton>
            </ImageBackground>
          )}
        />
      ) : null}
    </View>
  );
};

export default Home;
