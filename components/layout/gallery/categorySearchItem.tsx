import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const itemList = [
  '10~20 Inch',
  '20~30 Inch',
  '30~40 Inch',
  '40~50 Inch',
  'Bigger',
];

function getStyles(item, items, theme) {
  return {
    fontWeight:
      items.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CategorySearchItem() {
  const theme = useTheme();
  const [items, setItems] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItems(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 2, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">size(inch)</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={items}
          onChange={handleChange}
          input={<OutlinedInput label="Item" />}
          MenuProps={MenuProps}
          sx={{ height: 55 }}
        >
          {itemList.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, items, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
