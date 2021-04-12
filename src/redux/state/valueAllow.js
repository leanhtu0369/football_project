import { createSlice } from "@reduxjs/toolkit";

export const competitionAllowSlice = createSlice({
  name: 'competitionAllow',
  initialState: {
    competitionAllow: [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021]
  },
  reducers: {

  }
})

export default competitionAllowSlice.reducer
