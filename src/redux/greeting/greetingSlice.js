import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../../api/fetchAPI';

const FETCH_GREETING = 'world/FETCH_GREETING';

const initialState = {
  status: 'default',
  greeting: {
    id: '',
    language: '',
    flagCode: '',
    message: '',
  },
};

export const fetchRandomGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const greeting = await fetchAPI();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (_state, action) => (
      { status: 'ready', greeting: { ...action.payload } }
    ));
  },
});

export default greetingSlice;
