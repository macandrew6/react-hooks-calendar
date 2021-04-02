import React, { useState } from 'react';
import './styles.css';
import moment from 'moment';

import Calendar from './calendar';

export default function App() {
  const [value, setValue] = useState(moment());
  return <Calendar value={value} onChange={setValue} />;
}
