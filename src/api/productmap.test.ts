import { Product } from '../interfaces/productInterface';
import  productmap  from './productmap';

describe('Pruebas en productmap ', () => {
  test('Pruebas en productmap debe retornar un 200', async () => {
      const resp = await productmap.get<Product[]>('/products');
    expect(resp.status).toBe(200);
  });
});
