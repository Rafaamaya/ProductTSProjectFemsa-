import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../navigator/StackNavigator';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {formatFeedDate} from '../../utils/timeUtils';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}
type HomeScreenProp = StackNavigationProp<RootStackParams, 'HomeScreen'>;


export const DetailsScreen = ({route}: Props) => {
  const {item} = route.params;
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <>
      <View style={styles.hederContainer}>
        <Text style={styles.title}>{item.product}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.image}} />
        </View>
        <Text style={styles.descriptiveTitle}>Detalles del producto:</Text>
        <Text style={styles.textDate}>
          Comprado el {formatFeedDate(item.createdAt)}
        </Text>
        <Text style={styles.descriptiveTitle}>Con esta compra acumulaste:</Text>
        <Text style={styles.textPoints}>{item.points} puntos</Text>
        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
          <Text style={styles.textButton}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


