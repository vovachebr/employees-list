import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export const Header = ({value, onChange}) =>
  <div>
    <FormControlLabel control={<Checkbox checked={value} onChange={onChange} />} label="Выделить всё" />
  </div>
