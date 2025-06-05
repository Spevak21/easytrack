import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { dataActions } from '../../store/data-slice';

import { sortByPriority } from '../../util/helpers';

import ProjectCard from './ProjectCard';
import Button from '../../UI/Button';

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 1.6rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
  }
`;

function Projects() {
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.data.tempData);

  const [projectID, setProjectID] = useState(() => {
    if (tempData) {
      return Object.hasOwn(tempData, 'projectId') ? tempData.projectId : tempData.id;
    }
  });

  const data = useSelector((state) => state.projects);
  const projects = data.filter((project) => project.status === 'active');
  const sortedProjects = sortByPriority(projects);

  const handleProjectAddModal = () => {
    dispatch(uiActions.setFormType('new-project'));
  };

  return (
    <StyledProjects>
      <Button className="active" onClick={handleProjectAddModal}>
        Create Project
      </Button>
      {projects.length !== 0 ? (
        <ul>
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={project.id === projectID}
              onClick={() => setProjectID((prev) => prev !== project.id ? project.id : null)
              }
            />
          ))}
        </ul>
      ) : (
        <p className="warning">
          Looks like you have no active projects. Add project to start tracking.
        </p>
      )}
    </StyledProjects>
  );
}

export default Projects;
