import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ProfileIcon(props: SvgProps) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <Path
        d="M12.952 11.772c2.384 0 4.456-2.002 4.456-4.61a4.456 4.456 0 00-4.456-4.484c-2.384 0-4.456 1.95-4.456 4.505 0 2.587 2.06 4.589 4.456 4.589zm-7.476 9.656h14.94c1.192 0 1.905-.52 1.905-1.387 0-2.69-3.598-6.402-9.38-6.402-5.771 0-9.37 3.712-9.37 6.402 0 .866.713 1.387 1.905 1.387z"
        {...props}
      />
    </Svg>
  );
}

export default ProfileIcon;
