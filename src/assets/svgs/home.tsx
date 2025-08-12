import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function HomeIcon(props: SvgProps) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <Path
        {...props}
        d="M6.501 3.042h12.008c-.067-.813-.56-1.256-1.47-1.256H7.962c-.901 0-1.404.443-1.46 1.256zm-1.935 2.67h15.878c-.133-.878-.588-1.377-1.594-1.377H6.16c-1.006 0-1.461.5-1.594 1.377zm1.12 16.61h13.629c1.973 0 3.007-.998 3.007-2.901v-9.303c0-1.903-1.034-2.9-3.007-2.9H5.685c-1.982 0-3.006.988-3.006 2.9v9.303c0 1.903 1.024 2.9 3.006 2.9z"
      />
    </Svg>
  );
}

export default HomeIcon;
