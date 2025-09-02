import React, { useState, useRef, useEffect } from 'react';
import {
  Autocomplete,
  TextField,
  Checkbox,
  ListItemText,
  Chip,
  Box,
  createFilterOptions,
} from '@mui/material';
import {
  IconCaretUpFilled,
  IconCaretDownFilled,
} from '@tabler/icons-react';

const filter = createFilterOptions();

const MultiInput = ({ options = [], title = 'Select', icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalOptions, setInternalOptions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Transform string-based options into objects if necessary
    const transformed = options.map((opt) =>
      typeof opt === 'string' ? { title: opt } : opt
    );
    setInternalOptions(transformed);
  }, [options]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleToggle = (event, newValue) => {
    const lastValue = newValue[newValue.length - 1];
    if (lastValue?.inputValue) {
      const newItem = { title: lastValue.inputValue };
      setInternalOptions((prev) => [...prev, newItem]);
      setSelectedItems([...newValue.slice(0, -1), newItem]);
    } else {
      setSelectedItems(newValue);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    setSelectedItems((prev) =>
      prev.filter((item) => item.title !== itemToRemove.title)
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="main text-white text-center py-1 rounded cursor-pointer select-none shadow-md transition flex items-center gap-1"
      >
        <div className="text-bright-sun-400 p-2 bg-mine-shaft-900 rounded-full">
          {Icon && <Icon stroke={2} className="w-6 h-6" />}
        </div>

        {selectedItems.length > 0 ? (
          <div className="w-[80%] flex flex-wrap gap-1 justify-start">
            {selectedItems.slice(0, 2).map((item) => (
              <Chip
                key={item.title}
                label={item.title}
                color="background"
                onDelete={() => handleRemoveItem(item)}
              />
            ))}
            {selectedItems.length > 2 && (
              <Chip
                label={`+${selectedItems.length - 2}`}
                color="background"
              />
            )}
          </div>
        ) : (
          <span className="w-[80%] text-left text-mine-shaft-200">
            {title}
          </span>
        )}

        <div>
          {isOpen ? (
            <IconCaretUpFilled className="w-4 h-4" />
          ) : (
            <IconCaretDownFilled className="w-4 h-4" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="w-[18%] shadow-inner bg-mine-shaft-900 rounded-none absolute">
          <Box>
            <Autocomplete
              multiple
              freeSolo
              disablePortal
              open
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const isExisting = options.some(
                  (option) =>
                    option.title.toLowerCase() ===
                    params.inputValue.toLowerCase()
                );

                if (params.inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue: params.inputValue,
                    title: `Add "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              options={internalOptions}
              getOptionLabel={(option) => {
                if (typeof option === 'string') return option;
                if (option.inputValue) return option.inputValue;
                return option.title;
              }}
              value={selectedItems}
              onChange={handleToggle}
              renderTags={() => null}
              renderOption={(props, option, { selected }) => (
                <li
                  {...props}
                  style={{
                    borderRadius: 0,
                    backgroundColor: '#2d2d2d',
                    padding: '8px',
                    alignItems: 'center',
                    marginLeft:0
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262626')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2d2d2d')}
                >
                  {!option.inputValue && (
                    <Checkbox
                      checked={selected}
                      color="third"
                      sx={{
                        backgroundColor: 'transparent',
                      }}
                    />
                  )}
                  <ListItemText
                    primary={option.title}
                    sx={{
                      backgroundColor: 'transparent',
                      color: '#b0b0b0',
                    }}
                  />
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      backgroundColor: '#262626',
                      border: '1px solid #3d3d3d',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                />
              )}
              componentsProps={{
                paper: {
                  sx: {
                    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    borderRadius: 0,
                    
                    // backgroundColor: '#2d2d2d',
                  },
                },
                listbox: {
                  sx: {
                    scrollbarWidth: 'none',
                    padding: '0px',
                    border: '1px solidrgb(226, 26, 26)',
                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.3)',
                    
                  },
                },
              }}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default MultiInput;
