import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  containerProduct: {
    marginLeft: 11,
  },
  titleProduct: {
    fontWeight: '800',
    fontSize: 14,
    color:'#000000',
    fontFamily: 'avenir',
  },
  textDate: {
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'avenir',
  },
  containerPoints: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textPoints: {
    fontWeight: '800',
    fontSize: 16,
    fontFamily: 'avenir',
    color:'#000000',
  },
  textIcon: {
    marginRight: 5,
    marginLeft: 16,
    fontWeight: '400',
    fontSize: 16,
    color:'#000000',
  },
});
