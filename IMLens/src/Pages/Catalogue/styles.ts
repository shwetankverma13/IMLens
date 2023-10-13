import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'grey',
  },
  button: {
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: '#BBC4C2',
    borderBottomWidth: 0.5,
  },
});

export default styles;
