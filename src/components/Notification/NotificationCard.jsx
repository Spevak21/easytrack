import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { dataActions } from '../../store/data-slice';

import { colors, opacity, shadows } from '../../util/variables';

const StyledNotificationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 25rem;
  max-width: 35rem;
  padding: 1.6rem;
  color: ${colors.white};
  background-color: ${colors.white + opacity[3]};
  border-radius: 0.8rem;
  border: 1px solid
    ${({ $state }) => {
      if ($state === 'success') {
        return colors.valid;
      } else if ($state === 'failed') {
        return colors.invalid;
      } else if ($state === 'warning') {
        return colors.warning;
      } else if ($state === 'default') {
        return colors.blue5;
      }
    }};

  box-shadow: ${({ $state }) => {
    if ($state === 'success') {
      return shadows.outerGlowActiveValid;
    } else if ($state === 'failed') {
      return shadows.outerGlowActiveInvalid;
    } else if ($state === 'warning') {
      return shadows.outerGlowActiveWarning;
    } else if ($state === 'default') {
      return shadows.outerGlowActive;
    }
  }};
  backdrop-filter: blur(20px);
  cursor: pointer;
  transition: all 0.5s ease-out;

  ${({ $exitAnimate }) => {
    if ($exitAnimate) {
      return `opacity: 0;
      transform: translateX(100%);`;
    }
  }}

  @supports (-webkit-hyphens: none) and (not (overflow: -webkit-marquee)) {
    background-color: ${colors.blue2 + opacity[75]} !important;
  }

  @starting-style {
    opacity: 0;
    transform: translateY(-100%);
  }

  h4 {
    margin: 0;
    font-size: 2rem;
    line-height: 120%;
  }

  p {
    font-size: 1.6rem;
    line-height: 120%;
    white-space: pre-line;
  }

  progress {
    position: relative;
    height: 0.5rem;
    background-color: ${colors.blue1};
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
    width: 100%;

    &::-webkit-progress-bar {
      background-color: ${colors.blue1};
    }

    &::-webkit-progress-value {
      background-color: ${({ $state }) => {
        if ($state === 'success') {
          return colors.valid;
        } else if ($state === 'failed') {
          return colors.invalid;
        } else if ($state === 'warning') {
          return colors.warning;
        } else if ($state === 'default') {
          return colors.blue5;
        }
      }};
    }
  }
`;

function NotificationCard({ id, title, message, duration=5000, state = 'default' }) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(duration);
  const [willUnmount, setWillUnmounting] = useState(false);

  const handleRemove = () => {
    setWillUnmounting(true);
    setTimeout(() => {
      dispatch(dataActions.removeNotification(id));
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev - 10);
    }, 10);

    const timeout = setTimeout(() => {
      setWillUnmounting(true);
    }, duration);

    const timeout2 = setTimeout(() => {
      dispatch(dataActions.removeNotification(id));
    }, duration + 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [id, duration, dispatch]);

  return (
    <StyledNotificationCard
      $state={state}
      $exitAnimate={willUnmount}
      onClick={handleRemove}
    >
      <h4>{title}</h4>
      <hr />
      <p>{message}</p>
      <progress value={progress} max={duration} />
    </StyledNotificationCard>
  );
}

NotificationCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  state: PropTypes.string,
  duration: PropTypes.number
};

export default NotificationCard;
