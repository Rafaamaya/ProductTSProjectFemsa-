import React from 'react';
import renderer from 'react-test-renderer';
import {DetailsScreen} from './DetailsScreen';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {RootStackParams} from '../../navigator/StackNavigator';

const MOCKED_ROUTE = {
  params: {
    item: {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/technics',
      isRedemption: false,
      id: '1',
    },
  },
};

export type TestNavigationProps = StackScreenProps<
  RootStackParams,
  'DetailsScreen'
>;
const navigation: Partial<TestNavigationProps> = {};
describe('Pruebas en <DetailsScreen/>', () => {
  test('debe de hacer match con el snapchot', () => {
    const tree = renderer
      .create(
        <DetailsScreen
          navigation={navigation as any}
          route={MOCKED_ROUTE as any}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
