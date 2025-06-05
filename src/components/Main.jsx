import styled from 'styled-components';
import PropTypes from 'prop-types';

import Welcome from './Welcome';
import Dashboard from './Dashboard/Dashboard';
import Projects from './Project/Projects';
import Trackers from './Tracker/Trackers';
import Archives from './Archive/Archives';

const StyledMain = styled.main`
  position: relative;
  z-index: 1;

  height: 100%;
  padding: 2.4rem;
  overflow-x: hidden;
  overflow-y: auto;

  ${({ $page, $isMini }) => {
    if ($page !== 'welcome') {
      if ($isMini) {
        return 'margin-left: 8rem;';
      } else {
        return 'margin-left: 24rem;';
      }
    }
  }}

  @media only screen and (max-width: 1024px) {
    padding: 1.6rem;
  }
`;

function Main({ page, isMini }) {
  let content;
  if (page === 'welcome') {
    content = <Welcome />;
  } else if (page === 'dashboard') {
    content = <Dashboard />;
  } else if (page === 'projects') {
    content = <Projects />;
  } else if (page === 'trackers') {
    content = <Trackers />;
  } else if (page === 'archive') {
    content = <Archives />;
  }

  return (
    <StyledMain $page={page} $isMini={isMini}>
      {content}
    </StyledMain>
  );
}

Main.propTypes = {
  page: PropTypes.node,
  isMini: PropTypes.bool,
};

export default Main;
