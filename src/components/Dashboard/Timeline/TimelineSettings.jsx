import { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { resetModal } from '../../../store/data-actions';
import { uiActions } from '../../../store/ui-slice';

import { setLocalStorageItem } from '../../../util/helpers';

import InputGroup from '../../../UI/InputGroup';
import Button from '../../../UI/Button';
import Select from '../../../UI/Select';
import Slider from '../../../UI/Slider';

function TimelineSettings({ onClose }) {
  const dispatch = useDispatch();
  const timeline = useSelector((state) => state.ui.timeline);
  const [startTime, setStartTime] = useState(timeline.startAt);
  const [endTime, setEndTime] = useState(timeline.endAt);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.startAt = +data.startAt;
    data.endAt = +data.endAt;

    dispatch(uiActions.setTimeline(data));
    setLocalStorageItem('timeline', data);

    dispatch(resetModal());
  };

  const handleStartChange = (e) => {
    setStartTime(+e.target.value);
  };

  const handleEndChange = (e) => {
    setEndTime(+e.target.value);
  };

  const rowLabels = [
    { value: 'days-full', text: 'Days full ( Monday, Tuesday etc. )' },
    { value: 'days-short', text: 'Days short ( Mon, Tue etc. )' },
    { value: 'dates-full', text: 'Dates full ( DD.MM.YYYY )' },
    { value: 'dates-short', text: 'Dates short ( DD.MM. )' },
  ];

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>Timeline Settings</h2>
      <hr />
      <InputGroup label="Clock type">
        <Select
          name="clockType"
          options={['12h', '24h']}
          initial={timeline.clockType}
        />
      </InputGroup>
      <InputGroup label="Start at">
        <Slider
          name="startAt"
          min={0}
          max={24}
          value={startTime}
          onChange={handleStartChange}
        />
      </InputGroup>
      <InputGroup label="End at">
        <Slider
          name="endAt"
          min={0}
          max={24}
          value={endTime}
          onChange={handleEndChange}
        />
      </InputGroup>
      <InputGroup label="Row label">
        <Select
          name="rowLabel"
          options={rowLabels}
          initial={rowLabels.find((label) => label.value === timeline.rowLabel)}
        />
      </InputGroup>
      <hr />
      <div className="button-group">
        <Button type="button" onClick={onClose}>
          Close
        </Button>
        <Button className="active" type="submit">
          Save changes
        </Button>
      </div>
    </form>
  );
}

TimelineSettings.propTypes = {
  onClose: PropTypes.func,
};

export default TimelineSettings;
