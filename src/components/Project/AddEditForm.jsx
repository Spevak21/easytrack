import { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
  addProjectThunk,
  editProjectThunk,
  addTaskThunk,
  editTaskThunk,
} from '../../store/projects-actions';
import { resetModal } from '../../store/data-actions';
import { uiActions } from '../../store/ui-slice';

import { deepClone, formatDate } from '../../util/helpers';
import { isDateScopeValid, isEmpty } from '../../util/validation';

import InputGroup from '../../UI/InputGroup';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';
import Select from '../../UI/Select';
import InputDateTime from '../../UI/InputDateTime';

function AddEditForm({ onClose }) {
  const dispatch = useDispatch();
  const formType = useSelector((state) => state.ui.formType);
  const tempData = useSelector((state) => state.data.tempData);
  const projects = useSelector((state) => state.projects);
  const [submitted, setSubmitted] = useState(false);

  const [type, item] = formType.split('-');

  let limit = null;
  if (item === 'task') {
    let targetProject = projects.find((project) => project.id === (type === 'new' ? tempData : tempData.projectId));
    limit = targetProject.deadline ? targetProject.deadline : null;
  } else if (item === 'project' && type === 'edit') {
    let targetProject = projects.find((project) => project.id === tempData.id);

    const latestTaskDeadline = targetProject.tasks.reduce((acc, task) => {
      if (
        task.deadline !== undefined &&
        task.status === 'active' &&
        task.deadline > acc
      ) {
        return task.deadline;
      }
      return acc;
    }, null);

    limit = latestTaskDeadline;
  }

  const {
    value: nameValue,
    handleChange: handleNameChange,
    invalid: nameInvalid,
  } = useInput(type === 'edit' && tempData?.name ? tempData.name : '', (value) => !isEmpty(value));

  const {
    value: dateValue,
    handleChange: handleDateChange,
    invalid: dateInvalid,
  } = useInput(type === 'edit' && tempData?.deadline ? formatDate(tempData.deadline, 'yyyy-mm-ddThh:mm:ss') : '',
    (value) => isDateScopeValid(value, item, limit) || isEmpty(value)
  );

  const {
    value: descriptionValue,
    handleChange: handleDescriptionChange,
    invalid: descriptionInvalid,
  } = useInput(type === 'edit' && tempData?.description ? tempData.description : '', (value) => !isEmpty(value));

  const handleFormCancel = (e) => {
    e.target.closest('form').reset();
    onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (nameInvalid || dateInvalid || descriptionInvalid) {
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return;
    }

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const tempDataClone = deepClone(tempData);

    if (data.deadlineDate && data.deadlineTime) {
      data.deadline = formatDate(data.deadlineDate + 'T' + data.deadlineTime, 'ms');
      delete data.deadlineDate;
      delete data.deadlineTime;
    } else if (data.deadline) {
      data.deadline = formatDate(data.deadline, 'ms');
    } else {
      if (tempDataClone) delete tempDataClone.deadline;
      delete data.deadline;
    }


    if (item === 'project') {
      if (type === 'new') {
        dispatch(addProjectThunk(data));
      } else if (type === 'edit') {
        dispatch(editProjectThunk({ ...tempDataClone, ...data }));
      }
      dispatch(resetModal());
    } else if (item === 'task') {
      if (type === 'new') {
        dispatch(addTaskThunk(data));
        dispatch(resetModal());
      } else if (type === 'edit') {
        dispatch(editTaskThunk({ ...tempDataClone, ...data }));
        dispatch(uiActions.setFormType('task-details'));
      }
    }
    dispatch(uiActions.setActionOrigin(null));
    e.target.reset();
  };

  let projectsOptions;
  let initialProject;
  if (item === 'task' && type === 'new') {
    const activeProjects = projects.filter((project) => project.status === 'active');
    projectsOptions = activeProjects.map((project) => ({
      text: project.name,
      value: project.id,
    }));
    initialProject = projectsOptions.find((project) => project.value === tempData);
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>
        {type === 'new' ? 'New' : 'Edit'}
        {item === 'project' ? ' project' : ' task'}:
      </h2>
      <hr />
      {item === 'task' && type === 'new' && (
        <InputGroup label="Project">
          <Select
            name="projectId"
            options={projectsOptions}
            initial={initialProject}
          />
        </InputGroup>
      )}
      <InputGroup
        label="Name"
        error={nameInvalid && submitted ? 'Please fill this field' : ''}
      >
        <Input
          name="name"
          value={nameValue}
          onChange={handleNameChange}
          autoFocus
        />
      </InputGroup>
      <InputDateTime 
        name="deadline"
        value={dateValue}
        label="Deadline"
        error={dateInvalid && submitted ? 'A' : ''}
        onChange={handleDateChange}
        type={item}
        limit={limit}
      />
      <InputGroup label="Priority">
        <Select
          name="priority"
          options={['low', 'medium', 'high']}
          initial={tempData && typeof tempData === 'object' ? tempData.priority : 'low'}
        />
      </InputGroup>
      <InputGroup
        label="Description"
        error={descriptionInvalid && submitted ? 'Please fill this field' : ''}
      >
        <Textarea
          rows={5}
          name="description"
          value={descriptionValue}
          onChange={handleDescriptionChange}
        />
      </InputGroup>
      <hr />
      <div className="button-group">
        <Button type="button" onClick={handleFormCancel}>
          Close
        </Button>
        <Button className="active" type="submit">
          {type === 'new' ? 'Create' : 'Edit'}
          {item === 'project' ? ' Project' : ' Task'}
        </Button>
      </div>
    </form>
  );
}

AddEditForm.propTypes = {
  onClose: PropTypes.func,
};

export default AddEditForm;
