import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function CloseIcon(props: SvgProps) {
  return (
    <Svg width={10} height={9} viewBox="0 0 10 9" {...props}>
      <Path
        d="M1.201 8.278a.645.645 0 00.889.005L5 5.373l2.905 2.91c.24.24.65.24.889-.005a.64.64 0 00.005-.888L5.894 4.48l2.905-2.906a.635.635 0 00-.005-.888.64.64 0 00-.889-.005L5 3.59 2.09.68A.645.645 0 001.2.686a.643.643 0 00-.005.883l2.91 2.91-2.91 2.916c-.23.229-.239.644.005.883z"
        {...props}
      />
    </Svg>
  );
}

export default CloseIcon;
