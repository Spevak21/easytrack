import { getCurrentTimestamp } from './helpers';

export const isEmpty = (value) => {
  return value.trim() === '';
};

export const isDateScopeValid = (value, item, limit = null) => {
  const fullDate = new Date(value);
  const timestamp = fullDate.getTime();
  const isPast = timestamp < getCurrentTimestamp();

  if (item === 'project') {
    // Limit is lowest active task deadline (bottom limit)
    return limit ? !isPast && timestamp > limit : !isPast;
  } else if (item === 'task') {
    // Limit is project deadline (top limit)
    return limit ? !isPast && timestamp < limit : !isPast;
  }
};
