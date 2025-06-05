import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
  finishProjectThunk,
  discardProjectThunk,
  removeProjectThunk,
  restoreProjectThunk,
  finishTaskThunk,
  discardTaskThunk,
  removeTaskThunk,
  restoreTaskThunk,
} from '../store/project-actions';
import { resetModal } from '../store/data-actions';

import { colors } from '../util/variables';

import Button from '../UI/Button';
import Input from '../UI/Input';

const StyledConfirmation = styled.form`
  span {
    font-weight: bold;
    &.red {
      color: ${colors.invalid};
    }
  }

  p {
    line-height: 2rem;
  }
`;

function Confirmation({ type, onClose }) {
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.data.tempData);
  const [inputValue, setInputValue] = useState('');

  let condition = false;
  if (type === 'remove-project') {
    condition = inputValue === 'DELETE-PROJECT';
  } else if (type === 'remove-task') {
    condition = inputValue === 'DELETE-TASK';
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (type === 'finish-project') {
      dispatch(finishProjectThunk(tempData));
    } else if (type === 'discard-project') {
      dispatch(discardProjectThunk(tempData));
    } else if (type === 'remove-project') {
      dispatch(removeProjectThunk(tempData));
    } else if (type === 'restore-project') {
      dispatch(restoreProjectThunk(tempData));
    } else if (type === 'finish-task') {
      dispatch(finishTaskThunk(tempData));
    } else if (type === 'discard-task') {
      dispatch(discardTaskThunk(tempData));
    } else if (type === 'remove-task') {
      dispatch(removeTaskThunk(tempData));
    } else if (type === 'restore-task') {
      dispatch(restoreTaskThunk(tempData));
    }

    dispatch(resetModal());
  };

  return (
    <StyledConfirmation className="form" onSubmit={handleFormSubmit}>
      <h2>
        {type === 'finish-project' && 'Sweet, sweet victory!'}
        {type === 'finish-task' && 'Stepping stone to success!'}
        {(type === 'discard-project' || type === 'discard-task') && 'Are you sure?'}
        {(type === 'restore-project' || type === 'restore-task') && 'Change of mind?'}
        {(type === 'remove-project' || type === 'remove-task') && 'This is permanent!'}
      </h2>
      <hr />
      {type === 'finish-project' && (
        <p>
          Finish the project &quot;<span>{tempData.name}</span>&quot;?
          <br />
          Any remaining active tasks will be finished.
        </p>
      )}
      {type === 'finish-task' && (
        <p>
          Finish the task &quot;<span>{tempData.name}</span>&quot;?
        </p>
      )}
      {type === 'discard-project' && (
        <p>
          Discard the project &quot;<span>{tempData.name}</span>&quot;?
          <br />
          Any remaining active tasks will be discarded.
        </p>
      )}
      {type === 'discard-task' && (
        <p>
          Discard the task &quot;<span>{tempData.name}</span>&quot;?
        </p>
      )}
      {type === 'restore-project' && (
        <p>
          Restore the project &quot;<span>{tempData.name}</span>&quot;?
        </p>
      )}
      {type === 'restore-task' && (
        <p>
          Restore the task &quot;<span>{tempData.name}</span>&quot;?
        </p>
      )}
      {type === 'remove-project' && (
        <>
          <p>
            Permanently delete the project &quot;<span>{tempData.name}</span>
            &quot;?
            <br />
            Type &quot;<span className="red">DELETE-PROJECT</span>&quot; to
            confirm this action.
          </p>
          <Input value={inputValue} onChange={handleOnChange} />
        </>
      )}
      {type === 'remove-task' && (
        <>
          <p>
            Permanently delete the task &quot;<span>{tempData.name}</span>
            &quot;?
            <br />
            Type &quot;<span className="red">DELETE-TASK</span>&quot; to confirm
            this action.
          </p>
          <Input value={inputValue} onChange={handleOnChange} />
        </>
      )}
      <hr />
      <div className="button-group">
        <Button type="button" onClick={onClose}>
          No
        </Button>
        {(type === 'restore-project' || type === 'restore-task') && (
          <Button className="active" type="submit" autoFocus>
            Restore the {type === 'restore-project' ? 'project' : 'task'}
          </Button>
        )}
        {type !== 'restore-project' &&
          type !== 'restore-task' &&
          type !== 'remove-project' &&
          type !== 'remove-task' && (
            <Button
              className={`${type === 'finish-task' || type === 'finish-project' ? 'confirm' : 'delete'}`}
              type="submit"
              autoFocus
            >
              {type === 'finish-task' && 'Finish the task'}
              {type === 'discard-task' && 'Discard the task'}
              {type === 'finish-project' && 'Finish the project'}
              {type === 'discard-project' && 'Discard the project'}
            </Button>
          )}
        {condition && (
          <Button
            className={`${type === 'finish-task' || type === 'finish-project' ? 'confirm' : 'delete'}`}
            type="submit"
            autoFocus
          >
            {type === 'remove-task' && 'Delete the task'}
            {type === 'remove-project' && 'Delete the project'}
          </Button>
        )}
      </div>
    </StyledConfirmation>
  );
}

Confirmation.propTypes = {
  type: PropTypes.string,
  onClose: PropTypes.func,
};

export default Confirmation;
