import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    // alignContent: 'space-between',
    justifyContent: 'space-between',
    // marginBottom: '20%',
    // maxHeight: '70%',
    paddingBottom: '20%',
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
    color: 'black',
    paddingTop: '20%',
  },
  subtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
    lineHeight: 25,
    textAlign: 'justify',
    color: '#555',
    marginBottom: 30,
    // paddingBottom: '10%',
    // paddingTop: '10%',
  },
  button: {
    backgroundColor: '#1B8CDE',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
