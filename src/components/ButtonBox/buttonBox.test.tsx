import React from 'react';
import renderer from 'react-test-renderer';
import ButtonBox from './ButtonBox';

const show = true;
const onPressLosers = function (): void {
  throw new Error('Function not implemented.');
};
const onPressWinners = function (): void {
  throw new Error('Function not implemented.');
};
const onPressAll = function (): void {
  throw new Error('Function not implemented.');
};

describe('Pruebas en <ButtonBox/>', () => {
  test('debe de hacer match con el snapchot', () => {
    const tree = renderer
      .create(
        <ButtonBox
          show={show}
          onPressLosers={onPressLosers}
          onPressWinners={onPressWinners}
          onPressAll={onPressAll}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
