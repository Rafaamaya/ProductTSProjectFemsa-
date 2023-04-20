import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import MainCard from '../../components/MainCard/MainCard';
import {useData} from '../../hooks/useData';
import {Product} from '../../interfaces/productInterface';
import styles from './styles';
import MoveList from '../../components/MoveList/MoveList';
import ButtonBox from '../../components/ButtonBox/ButtonBox';

export const HomeScreen = () => {
  const {productsData, points, isLoading} = useData();
  const [data, setData] = useState<Product[]>([]);
  const [buttonShow, setButtonShow] = useState(false);

  useEffect(() => {
    setData(productsData);
  }, [productsData]);

  const handleWinnersFilter = () => {
    const resultado: Product[] = productsData.filter(
      item => item.is_redemption,
    );
    setData(resultado);
    setButtonShow(true);
  };

  const handleLosersFilter = () => {
    const resultado: Product[] = productsData.filter(
      item => !item.is_redemption,
    );
    setData(resultado);
    setButtonShow(true);
  };
  const handleAll = () => {
    setData(productsData);
    setButtonShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bienvenido de vuelta! </Text>
      <Text style={styles.subtitles}> Ruben Rodriguez </Text>
      <Text style={styles.descriptiveTitle}>TUS PUNTOS </Text>
      <View style={styles.cardContainer}>
        <MainCard
          isLoading={isLoading}
          title="Diciembre"
          points={points}
          backgroundColor="#334FFA"
        />
      </View>
      <Text style={styles.descriptiveTitle}> TUS MOVIMIENTOS </Text>
      <FlatList
        style={styles.flatListContainer}
        data={data}
        renderItem={({item}) => <MoveList item={item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={ isLoading ?
          <ActivityIndicator
            testID="list-spinner"
            color="#334FFA"
            size="large"
            style={styles.spiner}
          /> : null
        }
      />
      <ButtonBox
        show={buttonShow}
        onPressLosers={handleLosersFilter}
        onPressWinners={handleWinnersFilter}
        onPressAll={handleAll}
      />
    </View>
  );
};

export default HomeScreen;
