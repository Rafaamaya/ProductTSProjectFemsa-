import React from 'react';
import renderer from 'react-test-renderer';
import MainCard from './MainCard';

describe('Pruebas en <ButtonBox/>', () => {
  test('debe de hacer match con el snapchot', () => {
    const tree = renderer.create(<MainCard title={''} points={0} backgroundColor={''} isLoading={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
