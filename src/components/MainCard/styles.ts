import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    borderRadius: 20,
    width: 286,
    height: 143,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 9,
    justifyContent:'center',
  },
  cardHourText: {
    fontFamily:'Avenir',
    fontSize:16,
    fontWeight:'800',
    color: 'white',
    position:'absolute',
    marginLeft:19,
    paddingBottom:80,
  },
  cardTemparatureText: {
    fontFamily:'Avenir',
    fontSize:32,
    fontWeight:'800',
    color: 'white',
    textAlign:'center',
  },
});
