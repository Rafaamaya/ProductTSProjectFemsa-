import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  points: number;
  backgroundColor: string;
  isLoading: boolean;
}

const MainCard = ({title, points, backgroundColor, isLoading}: Props) => {
  const formattedPoints = points
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <View style={[styles.card, {backgroundColor: backgroundColor}]}>
      <Text style={styles.cardHourText}>{title}</Text>
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" size="large" />
      ) : (
        <Text style={styles.cardTemparatureText}>{formattedPoints} pts</Text>
      )}
    </View>
  );
};

export default MainCard;
