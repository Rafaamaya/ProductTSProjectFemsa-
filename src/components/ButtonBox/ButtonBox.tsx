/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface Props {
  show: boolean;
  onPressLosers: () => void;
  onPressWinners: () => void;
  onPressAll: () => void;
}

const ButtonBox = ({
  show,
  onPressLosers,
  onPressWinners,
  onPressAll,
}: Props) => {

  return (
    <>
      {show ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={onPressAll} style={styles.containerButton}>
            <Text style={styles.textButton}>Todos</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity
            onPress={onPressWinners}
            style={styles.containerButton}>
            <Text style={styles.textButton}>Ganados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={onPressLosers}>
            <Text style={styles.textButton}>Canjeados</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ButtonBox;
