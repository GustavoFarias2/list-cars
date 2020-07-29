import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  error: {
    fontSize: 18,
    color: '#f00',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 4
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 5,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  }
});

export default styles;
