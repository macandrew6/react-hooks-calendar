import React from 'react';
import moment from 'moment';

export default function Calendar() {
  const value = moment();
  const startDay = value.clone().startOf('month');
  return <div>{startDay.format('MM/DD/YY')}</div>;
}
