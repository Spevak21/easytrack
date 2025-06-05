import { useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

import { colors, shadows } from '../util/variables';

import LightSwitch from './widgets/LightSwitch';

import NeonFlicker from '../sounds/neon-flicker.wav';

const StyledWelcome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  height: 100%;
  width: 100%;
  max-width: 100rem;
  margin-inline: auto;
  padding: 4.8rem 2.4rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.6rem;
  }

  #logo-symbol {
    overflow: visible;

    &.animate {
      .ring {
        path {
          opacity: 0.1;
        }
        .group-1 path {
          animation: 0.75s linear 0.85s neon-flicker forwards;
        }

        .group-2 path {
          animation: 0.75s linear 1.1s neon-flicker forwards;
        }

        .group-3 path {
          animation: 0.75s linear 1.35s neon-flicker forwards;
        }
      }

      .check {
        opacity: 0.1;
        animation: 0.75s linear 1.6s neon-flicker forwards;
      }
    }

    .ring {
      path {
        opacity: 0.1;
      }
      .group-1 path {
        fill: ${colors.blue5};
        filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      }

      .group-2 path {
        fill: ${colors.blue4};
        filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      }

      .group-3 path {
        fill: ${colors.blue3};
        filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      }
    }

    .check {
      fill: ${colors.blue4};
      filter: drop-shadow(0 0 24px rgba(0, 96, 251, 0.6));
      opacity: 0.1;
    }
  }

  h1 {
    text-align: center;

    &.animate {
      span:first-of-type {
        color: ${colors.blue5};
        animation: 0.75s linear 1.25s neon-flicker forwards;
      }
      span:last-of-type {
        color: ${colors.blue4};
        animation: 0.75s linear 1.5s neon-flicker forwards;
      }
    }

    span {
      opacity: 0.1;
      text-shadow: ${shadows.outerGlowActive};

      &:first-of-type {
        color: ${colors.blue5};
      }

      &:last-of-type {
        color: ${colors.blue4};
      }
    }
  }

  p {
    font-size: 2rem;
    line-height: 120%;
    text-align: center;
  }
`;

function Welcome() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleCtaClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      new Audio(NeonFlicker)
        .play()
        .catch((err) => console.error('Audio play failed:', err));

      setTimeout(() => {
        if (projects.length) {
          dispatch(uiActions.changePage('dashboard'));
        } else {
          dispatch(uiActions.changePage('projects'));
        }
      }, 3500);
    }
  };

  return (
    <StyledWelcome>
      <div>
        <svg
          id="logo-symbol"
          className={isAnimating ? 'animate' : ''}
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          viewBox="0 0 256 256"
        >
          <g className="ring">
            <g className="group-3">
              <path d="M21.33,128c0-9.49,1.28-18.77,3.63-27.52l-20.59-5.55C1.49,105.49,0,116.59,0,128c0,35.31,14.29,67.31,37.44,90.56l15.15-15.15c-19.31-19.2-31.25-45.87-31.25-75.41Z" />
              <path d="M164.48,228.27c-11.41,4.16-23.68,6.4-36.48,6.4-6.29,0-12.48-.53-18.45-1.6l-3.73,21.01c7.15,1.28,14.61,1.92,22.19,1.92,15.36,0,30.08-2.67,43.73-7.68l-7.25-20.05Z" />
              <path d="M201.39,23.15l-12.27,17.49c12.69,8.85,23.47,20.48,31.25,34.03l18.45-10.67c-9.39-16.21-22.19-30.19-37.44-40.85Z" />
            </g>
            <g className="group-2">
              <path d="M220.37,181.33c-9.28,16.21-22.83,29.65-39.04,39.04l10.67,18.56c19.41-11.2,35.63-27.41,46.83-46.93l-18.45-10.67Z" />
              <path d="M54.61,23.15c-18.35,12.8-33.07,30.29-42.67,50.77l19.41,9.07c7.89-17.07,20.27-31.68,35.52-42.35l-12.27-17.49Z" />
            </g>
            <g className="group-1">
              <path d="M73.92,12.05l8.96,19.31c13.65-6.4,29.01-10.03,45.12-10.03s31.47,3.63,45.12,10.03l8.96-19.31C165.65,4.27,147.31,0,128,0s-37.65,4.27-54.08,12.05Z" />
              <path d="M248.32,84.16l-20.05,7.36c4.16,11.41,6.4,23.68,6.4,36.48s-2.24,25.17-6.4,36.48l20.05,7.36c4.91-13.65,7.68-28.48,7.68-43.84s-2.77-30.19-7.68-43.84Z" />
              <path d="M66.88,215.36l-12.27,17.49c9.07,6.4,18.99,11.63,29.65,15.47l7.25-20.05c-8.85-3.2-17.07-7.57-24.64-12.91Z" />
            </g>
          </g>
          <polygon
            className="check"
            points="173.25 82.75 112.92 143.08 82.75 112.92 67.66 128 112.92 173.25 128 158.17 188.34 97.83 173.25 82.75"
          />
        </svg>

        <h1 className={isAnimating ? 'animate' : ''}>
          <span>Easy</span>
          <span>Track</span>
        </h1>
      </div>
      <p>
        My personal project management hub—designed to simplify the way you
        organize, track, and achieve your goals. Whether you&apos;re managing
        daily tasks or long-term projects, this tool helps you stay on top of
        your progress, maintain focus, and reach new milestones with ease.
      </p>
      <LightSwitch onClick={handleCtaClick} animated={isAnimating} />
    </StyledWelcome>
  );
}

export default Welcome;
