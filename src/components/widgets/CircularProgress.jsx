import { useEffect, useId, useState } from 'react';
import PropTypes from 'prop-types';

import { colors, opacity } from '../../util/variables';
import { formatNumber } from '../../util/helpers';

function CircularProgress({ size, percentage, number = 0, color, title }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if ((!percentage && percentage !== 0) || (!number && number !== 0)) return;

    let start;
    let frameId;
    const duration = percentage * 20;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * percentage);

      setCurrent(currentValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrent(formatNumber(percentage));
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [percentage, number]);

  // useEffect(() => {
  //   if ((!percentage && percentage !== 0) || (!number && number !== 0)) return;
  //
  //   let intervalCounter = 0;
  //   let interval = setInterval(() => {
  //     if (intervalCounter < percentage - 1) {
  //       setCurrent((prev) => prev + 1);
  //       intervalCounter++;
  //     } else if (intervalCounter < percentage) {
  //       setCurrent(formatNumber(percentage));
  //       intervalCounter++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 20);
  // }, [percentage, number]);

  const filterId = useId();

  return (
    <svg
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <title>{title}</title>
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor={color}
            floodOpacity="1"
          />
        </filter>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 10}
        fill="none"
        stroke={colors.white + opacity[10]}
        strokeWidth="1"
      />

      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 10}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={2 * Math.PI * (size / 2 - 10)}
        strokeDashoffset={2 * Math.PI * (size / 2 - 10) * (1 - current / 100)}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        filter={`url(#${filterId})`}
      />

      <text
        x={size / 2}
        y={number ? size / 2 + size / 6 / 2 + 2 : size / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size / 6}
        fill={color}
      >
        {current}%
      </text>

      {number && (
        <text
          x={size / 2}
          y={size / 2 - size / 6 / 2 - 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={size / 6}
          fill={color}
        >
          {`(${number})`}
        </text>
      )}
    </svg>
  );
}

CircularProgress.propTypes = {
  size: PropTypes.number,
  percentage: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string,
};

export default CircularProgress;
