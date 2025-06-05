import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import { colors, opacity, shadows } from '../../util/variables';
import { resetBgOnMouseLeave, trackMouse } from '../../util/helpers';

import ArchiveCard from './ArchiveCard';

const StyledArchives = styled.section`
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    width: 100%;
    background-clip: padding-box;
  }

  .tabs {
    flex-direction: row;
    gap: 1.6rem;
    font-size: 1.6rem;
    border-bottom: 2px solid
      ${({ $status }) => {
        if ($status === 'all') {
          return colors.blue5 + opacity[75];
        } else if ($status === 'finished') {
          return colors.validDark + opacity[75];
        } else if ($status === 'discarded') {
          return colors.invalidDark + opacity[75];
        }
      }};

    li {
      text-align: center;
      padding: 0.8rem 0;
      width: 12rem;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      cursor: pointer;
      transition: all 0.25s ease-out;

      &.all.target {
        background-color: ${colors.blue5 + opacity[75]};
        border-color: ${colors.blue5};
        box-shadow: ${shadows.outerGlowHover};
      }
      &.finished.target {
        background-color: ${colors.validDark + opacity[75]};
        border-color: ${colors.validDark};
        box-shadow: ${shadows.outerGlowHoverValid};
      }
      &.discarded.target {
        background-color: ${colors.invalidDark + opacity[75]};
        border-color: ${colors.invalidDark};
        box-shadow: ${shadows.outerGlowHoverInvalid};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
  }
`;

function Archives() {
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.data.tempData);

  const [projectID, setProjectID] = useState(() => {
    if (tempData) {
      return Object.hasOwn(tempData, 'projectId') ? tempData.projectId : tempData.id;
    }
  });

  const projects = useSelector((state) => state.projects);
  const allArchivedProjects = projects.filter((project) => project.status !== 'active');
  const finishedProjects = projects.filter((project) => project.status === 'finished');
  const discardedProjects = projects.filter((project) => project.status === 'discarded');

  const [projectCategory, setProjectCategory] = useState(() => {
    if (finishedProjects.length && discardedProjects.length) {
      return 'all';
    } else if (finishedProjects.length && !discardedProjects.length) {
      return 'finished';
    } else if (!finishedProjects.length && discardedProjects.length) {
      return 'discarded';
    }
  });

  let targetProjects;
  if (projectCategory === 'all') {
    if (finishedProjects.length && discardedProjects.length) {
      targetProjects = allArchivedProjects;
    } else if (finishedProjects.length && !discardedProjects.length) {
      setProjectCategory('finished');
      targetProjects = finishedProjects;
    } else if (!finishedProjects.length && discardedProjects.length) {
      setProjectCategory('discarded');
      targetProjects = discardedProjects;
    }
  } else if (projectCategory === 'finished') {
    if (finishedProjects.length) {
      targetProjects = finishedProjects;
    } else {
      setProjectCategory('all');
      targetProjects = allArchivedProjects;
    }
  } else if (projectCategory === 'discarded') {
    if (discardedProjects.length) {
      targetProjects = discardedProjects;
    } else {
      setProjectCategory('all');
      targetProjects = allArchivedProjects;
    }
  }

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  useEffect(() => {
    if (allArchivedProjects.length === 0 && projects.length > 0) {
      dispatch(uiActions.changePage('dashboard'));
    } else if (allArchivedProjects.length === 0 && !projects.length) {
      dispatch(uiActions.changePage('projects'));
    }
  }, [allArchivedProjects, projects, dispatch]);

  return (
    <StyledArchives $status={projectCategory}>
      <div
        className="box"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
      >
        <ul className="tabs">
          {finishedProjects.length > 0 && discardedProjects.length > 0 && (
            <li
              className={`all ${projectCategory === 'all' ? 'target' : ''}`}
              onClick={() => setProjectCategory('all')}
            >
              All
            </li>
          )}
          {finishedProjects.length > 0 && (
            <li
              className={`finished ${projectCategory === 'finished' ? 'target' : ''}`}
              onClick={() => setProjectCategory('finished')}
            >
              Finished
            </li>
          )}
          {discardedProjects.length > 0 && (
            <li
              className={`discarded ${projectCategory === 'discarded' ? 'target' : ''}`}
              onClick={() => setProjectCategory('discarded')}
            >
              Discarded
            </li>
          )}
        </ul>
        <ul>
          {targetProjects &&
            targetProjects.map((project) => (
              <ArchiveCard
                key={project.id}
                project={project}
                isExpanded={project.id === projectID}
                onClick={() => setProjectID((prev) => prev !== project.id ? project.id : null)}
              />
            ))}
        </ul>
      </div>
    </StyledArchives>
  );
}

export default Archives;
