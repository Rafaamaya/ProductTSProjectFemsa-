import {useEffect, useState} from 'react';
import productmap from '../api/productmap';
import {Product} from '../interfaces/productInterface';

export const useData = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);

  const getData = async () => {
    const resp = await productmap.get<Product[]>('/products');
    setProductsData(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
}, []);

  useEffect(() => {
    const count = () => {
      let countPoints = 0;
      productsData.map(item => {
        countPoints = item.is_redemption
          ? countPoints + item.points
          : countPoints - item.points;
      });
      setPoints(countPoints);
    };
    count();
  }, [productsData]);

  return {
    points,
    productsData,
    isLoading,
  };
};
