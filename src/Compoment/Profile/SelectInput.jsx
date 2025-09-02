import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SelectInput({
  options = [],
  label = "",
  placeholder = "",
  value = "",
  required = true,
}) {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setData(options);
    setSelectedValue(value);
    setInputValue(value);
  }, [options, value]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleChange = (event, newValue) => {
    if (typeof newValue === "string" && newValue.startsWith('Add "')) {
      const created = newValue.replace(/^Add "/, "").replace(/"$/, "");
      setData((prev) => [...prev, created]);
      setSelectedValue(created);
      setInputValue(created);
    } else {
      setSelectedValue(newValue || "");
      setInputValue(newValue || "");
    }
  };

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      {label && (
        <Typography
          variant="subtitle1"
          sx={{ mb: 1 }}
          component="label"
          className={
            required
              ? "MuiFormLabel-root MuiInputLabel-root Mui-focused Mui-required"
              : ""
          }
        >
          {label}
          {required && (
            <span
              className="MuiFormLabel-asterisk text-red-600"
              aria-hidden="true"
            >
              &nbsp;*
            </span>
          )}
        </Typography>
      )}

      <Autocomplete
        freeSolo
        options={data}
        getOptionLabel={(option) => option}
        value={selectedValue}
        inputValue={inputValue}
        filterOptions={(options) => {
          const input = inputValue.trim().toLowerCase();
          const hasExactMatch = data.some(
            (option) => option.toLowerCase() === input
          );

          // If inputValue exists but is not in options, and user hasn't typed anything:
          if (inputValue && !hasExactMatch && input === value.toLowerCase()) {
            return [`Add "${inputValue}"`];
          }


          if (inputValue && hasExactMatch && input === value.toLowerCase()) {
            return options;
          }
         
         

          // Normal filter
          const filtered = options.filter((option) =>
            option.toLowerCase().includes(input)
          );

          if (input !== "" && !hasExactMatch) {
            filtered.push(`Add "${inputValue}"`);
          }

          return filtered;
        }}
        onInputChange={handleInputChange}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            required={required}
            InputProps={{
              ...params.InputProps,
              sx: { fontWeight: "semibold" },
            }}
          />
        )}
      />
    </Box>
  );
}

export default SelectInput;
