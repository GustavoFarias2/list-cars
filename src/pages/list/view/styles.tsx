import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006',
    paddingHorizontal: 20
  },
  brand: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Montserrat_700Bold'
  },
  title_container: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 10,
    textAlign: 'center'
  },
  title_input_container: {
    flex: 3,
    marginBottom: 15
  },
  age_input_container: {
    flex: 1,
    marginBottom: 15
  },
  price_container: {
    flex: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  price: {
    fontSize: 22,
    fontFamily: 'Montserrat_400Regular'
  }
});

export default styles;
