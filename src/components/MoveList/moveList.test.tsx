import React from 'react';
import renderer from 'react-test-renderer';
import MoveList from './MoveList';

export const MOCKED_DATA = {
  createdAt: '2022-12-09T10:20:00.909Z',
  product: 'Fantastic Granite Bacon',
  points: 100,
  image: 'https://loremflickr.com/640/480/technics',
  isRedemption: false,
  id: '3',
};

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('Pruebas en <MoveList/>', () => {
  test('debe de hacer match con el snapchot', () => {
    const tree = renderer
      .create(<MoveList item={MOCKED_DATA as any} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

