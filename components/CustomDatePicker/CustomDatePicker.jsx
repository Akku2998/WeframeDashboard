import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export function CustomDatePicker() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex items-center justify-center w-80 border rounded-lg border-grey-50">
      <Datepicker
        value={value}
        onChange={handleValueChange}
        startFrom={new Date("2016-07-02T23:58:48.000+00:00")}
        minDate={new Date("2016-07-02T23:58:48.000+00:00")}
        separator="OR"
      />
    </div>
  );
}
