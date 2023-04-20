/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Product} from '../../interfaces/productInterface';
import { formatFeedDate } from '../../utils/timeUtils';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';



type DetailscreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailsScreen'>;

interface Props {
  item: Product;
}

const MoveList = ({item}: Props) => {

  const navigation = useNavigation<DetailscreenNavigationProp>();

  const handleOnPres = () =>{
    navigation.navigate('DetailsScreen' , { item });

  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPres}>
      <View>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.containerProduct}>
        <Text style={styles.titleProduct}>{item.product}</Text>
        <Text style={styles.textDate}>{formatFeedDate(item.createdAt)}</Text>
      </View>
      <View style={styles.containerPoints}>
        <Text
          style={[
            styles.textPoints,
            {color: item.is_redemption ? '#00B833' : '#FF0000'},
          ]}>
          {item.is_redemption ? '+ ' : '- '}
        </Text>
        <Text style={styles.textPoints}>{item.points}</Text>
        <Text style={styles.textIcon}> {'>'} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MoveList;
