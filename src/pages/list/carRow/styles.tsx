import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  car_container: {
    marginBottom: 7,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#d1d1d1'
  },
  brand: {
    color: '#000',
    fontSize: 22
  },
  title: {
    color: '#000',
    fontSize: 22,
  },
  age: {
    color: '#000',
    fontSize: 22,
    textAlign: 'left'
  },
  price: {
    color: '#000',
    fontSize: 22,
    textAlign: 'right',
    alignSelf: 'flex-end'
  }
});

export default styles;
