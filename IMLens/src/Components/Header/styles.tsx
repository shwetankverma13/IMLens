import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: '#007AFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'blue', // Header background color
    padding: 15,
    display: 'flex',
  },
  title: {
    color: '#fff', // Title text color
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
