import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather app header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /🌤️ Dự Báo Thời Tiết/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Nhập tên thành phố/i);
  expect(searchInput).toBeInTheDocument();
});

test('renders initial message', () => {
  render(<App />);
  const initialMessage = screen.getByText(/Nhập tên thành phố để xem dự báo thời tiết/i);
  expect(initialMessage).toBeInTheDocument();
});
