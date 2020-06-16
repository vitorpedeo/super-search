import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 40,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  input: {
    marginTop: 40,
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    height: 60,
    width: 120,
    borderRadius: 8,
    backgroundColor: '#04E762',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 16,
  },
  heroImage: {
    height: 130,
    borderRadius: 10,
    alignItems: 'center',
  },
  heroButtonAndContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  heroName: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default styles;
