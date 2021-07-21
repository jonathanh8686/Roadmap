import * as React from 'react';

const ICON = `M 27.2 22.7 L 27.2 22.7 c 1.1 -1.6 1.8 -3.6 1.8 -5.7 c 0 -5.6 -4.5 -10 -10 -10 S 9 11.5 9 17 c 0 2 0.6 3.9 1.6 5.4 c 0 0.1 0.1 0.2 0.2 0.3 c 0 0 0.1 0.1 0.1 0.2 c 0.2 0.3 0.4 0.6 0.7 0.9 c 2.6 3.1 7.4 7.6 7.4 7.6 s 4.8 -4.5 7.4 -7.5 c 0.2 -0.3 0.5 -0.6 0.7 -0.9 c 0 -0.2 0.1 -0.2 0.1 -0.3 z`;
const DRIVING_ICON = `M 27.2 22.7 L 27.2 22.7 c 1.1 -1.6 1.8 -3.6 1.8 -5.7 c 0 -5.6 -4.5 -10 -10 -10 S 9 11.5 9 17 c 0 2 0.6 3.9 1.6 5.4 c 0 0.1 0.1 0.2 0.2 0.3 c 0 0 0.1 0.1 0.1 0.2 c 0.2 0.3 0.4 0.6 0.7 0.9 c 2.6 3.1 7.4 7.6 7.4 7.6 s 4.8 -4.5 7.4 -7.5 c 0.2 -0.3 0.5 -0.6 0.7 -0.9 c 0 -0.2 0.1 -0.2 0.1 -0.3 M 19 5 A 1 1 0 0 0 19 33 A 1 1 0 0 0 19 5 M 19 0 A 1 1 0 0 1 19 38 A 1 1 0 0 1 19 0 z`;

function Pin(props) {
  const { size = 20 } = props;
  const { color = '#d00' } = props;

  const pinStyle = {
    fill: color,
    stroke: 'none'
  };


  return (
    <svg height={size} viewBox="0 0 40 40" style={pinStyle}>
      {!props.driving && <path d={ICON} />}
      {props.driving && <path d={DRIVING_ICON}/>}
    </svg>
  );
}

export default React.memo(Pin);