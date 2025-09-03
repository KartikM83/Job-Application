import React from "react";
import {
  IconMapPin,
  IconCalendarMonth,
  IconBookmark
} from '@tabler/icons-react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

// Static avatar imports
import avatar0 from '../../assets/Avatar/avatar.png';
import avatar1 from '../../assets/Avatar/avatar1.png';
import avatar2 from '../../assets/Avatar/avatar2.png';
import avatar3 from '../../assets/Avatar/avatar3.png'; // Add more if needed

const avatars = {
  avatar0,
  avatar1,
  avatar2,
  avatar3
};

function TalentCards(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2d2d2d',
    boxShadow: 24,
    p: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);

  return (
    <div className="flex flex-col gap-4 w-[22rem] p-4 rounded-xl bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 p-2 bg-mine-shaft-800 rounded-full">
            <img
              className="rounded-full"
              src={avatars[props.image]}
              alt={props.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg">{props.name}</div>
            <div className="text-[13px]">
              <div>{props.role} &#x2022; {props.company}</div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer">
          <IconBookmark stroke={2} />
        </div>
      </div>

      <div className="flex gap-2">
        {props.topSkills.map((skill, index) => (
          <div key={index} className="px-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
            {skill}
          </div>
        ))}
      </div>

      <div>
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            fontSize: "12px",
            color: "#b0b0b0",
          }}
        >
          {props.about}
        </Box>
      </div>

      <div>
        <Box sx={{ border: "0.1px solid #4f4f4f", borderRadius: 1 }}>
          <Divider sx={{ borderColor: "#4f4f4f" }} />
        </Box>
      </div>

      {props.invited ? (
        <div className="flex gap-2 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} />
          Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="text-mine-shaft-300 font-bold">
            &#8377;{props.expectedCtc}
          </div>
          <div className="flex text-xs text-mine-shaft-300 items-center gap-1">
            <IconMapPin stroke={2} className="w-5 h-5" />
            {props.location}
          </div>
        </div>
      )}

      <div>
        <Box sx={{ border: "0.1px solid #4f4f4f", borderRadius: 1 }}>
          <Divider sx={{ borderColor: "#4f4f4f" }} />
        </Box>
      </div>

      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <div>
                <button
                  className="w-full box-border border-2 border-bright-sun-400 text-bright-sun-400 font-semibold flex justify-center py-1.5 rounded-md"
                  type="submit"
                >
                  Profile
                </button>
              </div>
            </Link>

            <div>
              {props.posted ? (
                <button
                  onClick={handleOpen}
                  className="w-full box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex gap-2 justify-center items-center py-2 rounded-md"
                  type="submit"
                >
                  Schedule <IconCalendarMonth />
                </button>
              ) : (
                <button
                  className="w-full box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md"
                  type="submit"
                >
                  Message
                </button>
              )}
            </div>
          </>
        )}

        {props.invited && (
          <>
            <div>
              <button
                className="w-full box-border border-2 border-bright-sun-400 text-bright-sun-400 font-semibold flex justify-center py-1.5 rounded-md"
                type="submit"
              >
                Accept
              </button>
            </div>
            <div>
              <button
                className="w-full box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex gap-2 justify-center items-center py-2 rounded-md"
                type="submit"
              >
                Reject
              </button>
            </div>
          </>
        )}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex flex-col gap-3">
            <div className="font-bold text-lg">Schedule Interview</div>

            <div className="flex flex-col gap-3">
              {/* Date Picker */}
              <div className="flex flex-col gap-1">
                <div>Date</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    slotProps={{
                      textField: {
                        placeholder: 'Select a date',
                        variant: 'outlined',
                        label: "",
                        fullWidth: true,
                        InputProps: {
                          sx: {
                            backgroundColor: '#3d3d3d',
                            '& .MuiSvgIcon-root': { color: '#ffbd20' }
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>

              {/* Time Picker */}
              <div className="flex flex-col gap-1">
                <div>Time</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                    slotProps={{
                      textField: {
                        placeholder: "Choose time",
                        variant: 'outlined',
                        label: "",
                        fullWidth: true,
                        InputProps: {
                          sx: {
                            backgroundColor: '#3d3d3d',
                            '& .MuiSvgIcon-root': { color: '#ffbd20' }
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default TalentCards;
