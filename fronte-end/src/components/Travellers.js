/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Travellers() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={travellers}
      getOptionLabel={(option) => option.number + " " + option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Travellers" variant="outlined" />
      )}
    />
  );
}

const travellers = [
  { number: 1, title: "Traveller" },
  { number: 2, title: "Travellers" },
  { number: 3, title: "Travellers" },
  { number: 4, title: "Travellers" },
  { number: 5, title: "Travellers" },
  { number: 6, title: "Travellers" },
  { number: 7, title: "Travellers" },
  { number: 8, title: "Travellers" },
  { number: 9, title: "Travellers" },
  { number: 10, title: "Travellers" },
];
