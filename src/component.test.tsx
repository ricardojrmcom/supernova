import React from 'react';
import { render, screen } from '@testing-library/react';
import { Component } from './component';

const sum = (a: number, b: number) => a + b;

it('sums 5 and 2 returns 7', () => {
  const a: number = 5;
  expect(sum(5, 2)).toBe(7);
});

it('renders test component', () => {
  render(<Component />);
  const myEl = screen.getByTestId('test-component');
  expect(myEl).toBeInTheDocument();
});
