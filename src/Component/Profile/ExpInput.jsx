import React, { useState } from "react";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { TextField, FormHelperText, FormControlLabel, Checkbox } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

function ExpInput(props) {
    const select = fields;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [checked, setChecked] = useState(false);  
    const [about, setAbout] = useState(
        "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
    );

    const today = dayjs();
    const minSelectableDate = dayjs('2000-01-01');

    const isDateValid =
        !startDate || !endDate || dayjs(startDate).isBefore(endDate) || dayjs(startDate).isSame(endDate);

    const commonDatePickerProps = {
        views: ['month', 'year'],
        maxDate: today,
        slotProps: {
            popper: {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false,
                        },
                    },
                    {
                        name: 'flip',
                        enabled: false,
                    },
                ],
                placement: 'bottom-start',
            },
        },
    };

    return (<div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col gap-3">
                <div className="text-lg font-semibold">Edit Experience</div>

                <div className="flex gap-10">
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>

                <SelectInput {...select[2]} />


                <div className="flex flex-col gap-1">
                    <label>Summery</label>

                    <TextField
                        multiline
                        minRows={3}
                        variant="outlined"
                        placeholder="Enter Summery...."
                        fullWidth
                        value={about}
                        onChange={(event) => setAbout(event.target.value)}
                    />
                </div>

                <div className="flex gap-10">
                    <div className="flex flex-col w-full">
                        <label className="mb-1">Start date</label>
                        <DatePicker
                            sx={{ '& .MuiSvgIcon-root': { color: "#b0b0b0" } }}
                            {...commonDatePickerProps}
                            minDate={minSelectableDate}
                            value={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                // Clear end date if it's earlier than the new start date
                                if (endDate && date && dayjs(endDate).isBefore(date)) {
                                    setEndDate(null);
                                }
                            }}
                            slotProps={{
                                textField: {
                                    error: !isDateValid,
                                },
                            }}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="mb-1">End date</label>
                        <DatePicker disabled={checked}
                            sx={{ '& .MuiSvgIcon-root': { color: "#b0b0b0" } }}
                            {...commonDatePickerProps}
                            minDate={startDate || minSelectableDate} // Dynamic minDate
                            value={endDate}
                            onChange={(date) => setEndDate(date)}
                            slotProps={{
                                textField: {
                                    error: !isDateValid,
                                },
                            }}
                        />
                    </div>
                </div>

                {!isDateValid && (
                    <FormHelperText error>
                        Start date must be before or equal to end date.
                    </FormHelperText>
                )}
            </div>
        </LocalizationProvider>

        <FormControlLabel control={<Checkbox onChange={(event)=>setChecked(event.currentTarget.checked)} />} label="Currently working here" />

        <div className="cursor-pointer flex  items-center gap-2">

<button onClick={()=>props.setEdit(false)}
    className="w-fit box-border border-2 border-bright-sun-400 text-bright-sun-400 font-semibold flex justify-center py-1.5 px-5 rounded-md"
    type="submit"
>
    Save
</button>

<button onClick={()=>props.setEdit(false)}
    className="w-fit box-border text-red-500 bg-[rgba(255,100,0,0.1)] font-semibold flex justify-center py-2 px-5 rounded-md"
    type="submit"
>
    Cancel
</button>

</div>   
        </div>
    );
}

export default ExpInput;
