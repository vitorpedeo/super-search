import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  basicInfo: {
    alignItems: 'center',
  },
  characterName: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  characterImage: {
    marginTop: 20,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  sectionTitle: {
    marginTop: 20,
    fontFamily: 'OpenSans_700Bold',
    fontSize: 15,
  },
  card: {
    marginTop: 10,
    paddingHorizontal: 15,
    width: '100%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 14,
    color: '#FFF',
  },
  cardValue: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 14,
    color: '#FFF',
  },
  infoTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 15,
  },
  infoDescription: {
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 15,
  },
});

export default styles;
