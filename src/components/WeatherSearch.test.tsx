import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherSearch from './WeatherSearch';

test('renders search input and button', () => {
  const mockOnSearch = jest.fn();
  render(<WeatherSearch onSearch={mockOnSearch} loading={false} />);
  
  const searchInput = screen.getByPlaceholderText(/Nhập tên thành phố/i);
  const searchButton = screen.getByText(/Tìm kiếm/i);
  
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('calls onSearch when form is submitted', () => {
  const mockOnSearch = jest.fn();
  render(<WeatherSearch onSearch={mockOnSearch} loading={false} />);
  
  const searchInput = screen.getByPlaceholderText(/Nhập tên thành phố/i);
  const searchButton = screen.getByText(/Tìm kiếm/i);
  
  fireEvent.change(searchInput, { target: { value: 'Ho Chi Minh City' } });
  fireEvent.click(searchButton);
  
  expect(mockOnSearch).toHaveBeenCalledWith('Ho Chi Minh City');
});

test('disables input and button when loading', () => {
  const mockOnSearch = jest.fn();
  render(<WeatherSearch onSearch={mockOnSearch} loading={true} />);
  
  const searchInput = screen.getByPlaceholderText(/Nhập tên thành phố/i);
  const searchButton = screen.getByText(/Đang tìm/i);
  
  expect(searchInput).toBeDisabled();
  expect(searchButton).toBeDisabled();
});