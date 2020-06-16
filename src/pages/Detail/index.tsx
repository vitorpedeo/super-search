import React, { useState, useEffect } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import {
  FontAwesome5 as FAIcon,
  MaterialCommunityIcons as MDIcon,
} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

interface Heroe {
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    'full-name': string;
    'alter-egos': string;
    aliases: string[];
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    'group-affiliation': string;
    relatives: string;
  };
  image: {
    url: string;
  };
}

interface Params {
  characterId: number;
}

const Detail = () => {
  const [heroe, setHeroe] = useState<Heroe>({} as Heroe);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    axios
      .get<Heroe>(
        `https://superheroapi.com/api.php/1938690802931390/${routeParams.characterId}`
      )
      .then((response) => {
        setHeroe(response.data);
      })
      .catch();
  }, []);

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FAIcon
        name='arrow-left'
        size={25}
        color='#CCC'
        onPress={handleNavigateBack}
      />

      {Object.keys(heroe).length === 0 ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size='large' color='#04E762' />
        </View>
      ) : (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.basicInfo}>
            <Text style={styles.characterName}>{heroe.name}</Text>

            <Image
              style={styles.characterImage}
              source={{
                uri: heroe.image.url,
              }}
            />
          </View>

          <Text style={styles.sectionTitle}>Powerstats</Text>
          <Card
            color='#FFADBD'
            title='Intelligence'
            icon={
              <MDIcon
                name='brain'
                size={20}
                color='#FFF'
                style={{ marginRight: 10 }}
              />
            }
            value={
              heroe.powerstats.intelligence === 'null'
                ? '-'
                : heroe.powerstats.intelligence
            }
          />
          <Card
            color='#DD2D4A'
            title='Strength'
            icon={
              <MDIcon
                name='dumbbell'
                size={20}
                color='#FFF'
                style={{ marginRight: 10 }}
              />
            }
            value={
              heroe.powerstats.strength === 'null'
                ? '-'
                : heroe.powerstats.strength
            }
          />
          <Card
            color='#04E762'
            title='Speed'
            icon={
              <MDIcon
                name='run-fast'
                size={20}
                color='#FFF'
                style={{ marginRight: 10 }}
              />
            }
            value={
              heroe.powerstats.speed === 'null' ? '-' : heroe.powerstats.speed
            }
          />
          <Card
            color='#FFBE0B'
            title='Durability'
            icon={
              <MDIcon
                name='shield'
                size={20}
                color='#FFF'
                style={{ marginRight: 10 }}
              />
            }
            value={
              heroe.powerstats.durability === 'null'
                ? '-'
                : heroe.powerstats.durability
            }
          />
          <Card
            color='#023E8A'
            title='Power'
            icon={
              <MDIcon
                name='boxing-glove'
                size={20}
                color='#FFF'
                style={{ marginRight: 10 }}
              />
            }
            value={
              heroe.powerstats.power === 'null' ? '-' : heroe.powerstats.power
            }
          />
          <Card
            color='#000'
            title='Combat'
            icon={
              <MDIcon
                name='sword-cross'
                size={20}
                color='#FFF'
                style={{ marginRight: 10 }}
              />
            }
            value={
              heroe.powerstats.combat === 'null' ? '-' : heroe.powerstats.combat
            }
          />

          <Text style={styles.sectionTitle}>Biograph</Text>

          <Text style={styles.infoTitle}>Full name</Text>
          <Text style={styles.infoDescription}>
            {heroe.biography['full-name']}
          </Text>

          <Text style={styles.infoTitle}>Alter egos</Text>
          <Text style={styles.infoDescription}>
            {heroe.biography['alter-egos']}
          </Text>

          <Text style={styles.infoTitle}>Aliases</Text>
          {heroe.biography.aliases.map((alias) => (
            <Text key={alias} style={styles.infoDescription}>
              {alias}
            </Text>
          ))}

          <Text style={styles.infoTitle}>Place of birth</Text>
          <Text style={styles.infoDescription}>
            {heroe.biography['place-of-birth']}
          </Text>

          <Text style={styles.infoTitle}>First appearance</Text>
          <Text style={styles.infoDescription}>
            {heroe.biography['first-appearance']}
          </Text>

          <Text style={styles.infoTitle}>Publisher</Text>
          <Text style={styles.infoDescription}>
            {heroe.biography.publisher}
          </Text>

          <Text style={styles.infoTitle}>Alignment</Text>
          <Text style={styles.infoDescription}>
            {heroe.biography.alignment.charAt(0).toUpperCase() +
              heroe.biography.alignment.slice(1)}
          </Text>

          <Text style={styles.sectionTitle}>Appearance</Text>

          <Text style={styles.infoTitle}>Gender</Text>
          <Text style={styles.infoDescription}>{heroe.appearance.gender}</Text>

          <Text style={styles.infoTitle}>Race</Text>
          <Text style={styles.infoDescription}>{heroe.appearance.race}</Text>

          <Text style={styles.infoTitle}>Height</Text>
          <Text style={styles.infoDescription}>
            {heroe.appearance.height[1]}
          </Text>

          <Text style={styles.infoTitle}>Weight</Text>
          <Text style={styles.infoDescription}>
            {heroe.appearance.weight[1]}
          </Text>

          <Text style={styles.sectionTitle}>Work</Text>

          <Text style={styles.infoTitle}>Occupation</Text>
          <Text style={styles.infoDescription}>{heroe.work.occupation}</Text>

          <Text style={styles.infoTitle}>Base</Text>
          <Text style={styles.infoDescription}>{heroe.work.base}</Text>

          <Text style={styles.sectionTitle}>Connections</Text>

          <Text style={styles.infoTitle}>Group afilliation</Text>
          <Text style={styles.infoDescription}>
            {heroe.connections['group-affiliation']}
          </Text>

          <Text style={styles.infoTitle}>Relatives</Text>
          <Text style={styles.infoDescription}>
            {heroe.connections.relatives}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

const Card = (props: any) => {
  return (
    <View style={[styles.card, { backgroundColor: props.color }]}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        {props.icon}
        <Text style={styles.cardValue}>{props.value}</Text>
      </View>
    </View>
  );
};

export default Detail;
