import React from 'react';
import { render } from '@testing-library/react-native';
import Categories from './Categories';
import { CategoryType } from '../../types/categories';
import { fireEvent } from '@testing-library/react-native';

const mockData: CategoryType[] = [
  {
    id: 11,
    name: 'fern',
    createdAt: '2023-01-11T10:53:05.801Z',
    updatedAt: '2023-01-11T10:54:30.059Z',
    publishedAt: '2023-01-11T10:53:07.416Z',
    title: 'Ferns',
    rank: 0,
    image: {
      id: 23,
      name: '6.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '6_edbcc6988a',
      ext: '.png',
      mime: 'image/png',
      size: 8.24,
      url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:46.151Z',
      updatedAt: '2023-01-11T10:44:46.151Z',
    },
  },
  {
    id: 10,
    name: 'cacti-and-succulent',
    createdAt: '2023-01-11T10:52:28.521Z',
    updatedAt: '2023-01-11T10:54:39.391Z',
    publishedAt: '2023-01-11T10:52:36.428Z',
    title: 'Cacti and Succulents',
    rank: 1,
    image: {
      id: 25,
      name: '5.png',
      alternativeText: null,
      caption: null,
      width: 158,
      height: 152,
      formats: null,
      hash: '5_d2384a3938',
      ext: '.png',
      mime: 'image/png',
      size: 10.01,
      url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:50:17.828Z',
      updatedAt: '2023-01-11T10:51:05.935Z',
    },
  },
];

describe('Categories Component', () => {
  it('renders all category titles correctly', () => {
    const { getByText } = render(<Categories data={mockData} />);

    expect(getByText('Ferns')).toBeTruthy();
    expect(getByText('Cacti and Succulents')).toBeTruthy();
  });

  it('renders correct number of items', () => {
    const { getAllByText } = render(<Categories data={mockData} />);

    const titles = mockData.map(c => c.title);
    titles.forEach(title => {
      expect(getAllByText(title).length).toBeGreaterThan(0);
    });
  });

  it('renders correct images with correct URLs', () => {
    const { getAllByTestId } = render(<Categories data={mockData} />);
    const images = getAllByTestId('category-image');

    expect(images.length).toBe(mockData.length);

    images.forEach((image, index) => {
      expect(image.props.source.uri).toBe(mockData[index].image.url);
    });
  });

  it('matches snapshot', () => {
    const tree = render(<Categories data={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
