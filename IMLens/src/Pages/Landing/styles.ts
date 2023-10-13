import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '10%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
    lineHeight: 25,
    textAlign: 'justify',
    color: '#555',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: '20%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
