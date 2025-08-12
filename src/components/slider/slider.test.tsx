import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Slider from './Slider';
import { Linking } from 'react-native';

const mockData = [
  {
    id: 2,
    title: 'Differences Between Species and Varieties?',
    subtitle: 'Plant Identify',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
    uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
    order: 2,
  },
  {
    id: 1,
    title: 'How to identify plants?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
    uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
    order: 1,
  },
  {
    id: 3,
    title: 'The reasons why the same plant can look different?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
    uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
    order: 3,
  },
];

describe('Slider Component', () => {
  beforeEach(() => {
    jest.spyOn(Linking, 'openURL').mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders title if provided', () => {
    const { getByText } = render(
      <Slider title="Test Slider" data={mockData} />,
    );
    expect(getByText('Test Slider')).toBeTruthy();
  });

  it('does not render title if not provided', () => {
    const { queryByText } = render(<Slider data={mockData} />);
    expect(queryByText('Test Slider')).toBeNull();
  });

  it('renders all items in sorted order by "order" property', () => {
    const { getAllByText } = render(<Slider data={mockData} />);
    const titles = getAllByText(/.+/).map(el => el.props.children);
    expect(titles).toEqual([
      'How to identify plants?',
      'Differences Between Species and Varieties?',
      'The reasons why the same plant can look different?',
    ]);
  });

  it('opens URL when an item with uri is pressed', () => {
    const { getByText } = render(<Slider data={mockData} />);
    const firstItem = getByText('How to identify plants?');
    fireEvent.press(firstItem);
    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://plantapp.app/blog/identifying-plant-in-10-steps/',
    );
  });
});
