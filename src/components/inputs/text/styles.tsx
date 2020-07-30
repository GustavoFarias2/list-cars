import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  error: {
    fontSize: 18,
    color: '#f00',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 4
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 14,
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  }
});

export default styles;
