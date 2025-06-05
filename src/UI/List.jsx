import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useScrollShade } from '../hooks/useScrollShade';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: ${({ $padding }) => $padding}rem;

  ${({ $scrollState }) => {
    if ($scrollState.overflowing) {
      return `background: linear-gradient(to bottom, ${
        $scrollState.position !== 'top'
          ? 'rgba(0, 0, 0, 0.15) 0%, transparent 1.6rem'
          : ''
      } ${$scrollState.position === 'middle' ? ', ' : ''} ${
        $scrollState.position !== 'bottom'
          ? 'transparent calc(100% - 1.6rem), rgba(0, 0, 0, 0.15) 100%'
          : ''
      });`;
    }
  }}
`;

function List({ children, category }) {
  const { scrollState, containerRef, checkScroll } = useScrollShade();

  let paddingLeft = 0;
  if (
    containerRef.current &&
    containerRef.current.scrollHeight > containerRef.current.clientHeight
  ) {
    paddingLeft = 0.8;
  }

  useEffect(() => {
    checkScroll();
  }, [category, checkScroll]);

  return (
    <StyledList
      ref={containerRef}
      onScroll={checkScroll}
      $scrollState={scrollState}
      $padding={paddingLeft}
    >
      {children}
    </StyledList>
  );
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  category: PropTypes.string,
};

export default List;
