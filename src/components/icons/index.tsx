import React from 'react';
import { iconsMap } from './icons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#B0B0B0' }) => {
  const SvgIcon = iconsMap[name];
  return <SvgIcon width={size} height={size} fill={color} />;
};

export default Icon;
