import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SelectInput({ options = [], label = '', placeholder = '', required = true }) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setData(options);
  }, [options]);

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      {label && (
        <Typography
          variant="subtitle1"
          sx={{ mb: 1 }}
          component="label"
          className={required ? 'MuiFormLabel-root MuiInputLabel-root Mui-focused Mui-required' : ''}
        >
          {label}
          {required && (
            <span className="MuiFormLabel-asterisk text-red-600" aria-hidden="true">
              &nbsp;*
            </span>
          )}
        </Typography>
      )}

      <Autocomplete
        freeSolo
        filterOptions={(options, state) => {
          const filtered = options.filter((option) =>
            option.toLowerCase().includes(state.inputValue.toLowerCase())
          );

          if (
            state.inputValue !== '' &&
            !options.includes(state.inputValue)
          ) {
            filtered.push(`Add "${state.inputValue}"`);
          }

          return filtered;
        }}
        options={data}
        value={value}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(e, newValue) => {
          if (typeof newValue === 'string' && newValue.startsWith('Add "')) {
            const custom = newValue.replace(/^Add "/, '').replace(/"$/, '');
            setValue(custom);
            setData((prev) => [...prev, custom]); // optional: add to options list
            // console.log("Created new value:", custom);
          } else {
            setValue(newValue);
            // console.log("Selected value:", newValue);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            required={required}
            InputProps={{
              ...params.InputProps,
              sx: { fontWeight: 'semibold' },
            }}
          />
        )}
      />
    </Box>
  );
}

export default SelectInput;
