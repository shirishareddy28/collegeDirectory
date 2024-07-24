import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProfile, updateProfile } from '../api';

export const fetchProfileAsync = createAsyncThunk('profile/fetchProfile', async () => {
  const response = await fetchProfile();
  return response;
});

export const updateProfileAsync = createAsyncThunk('profile/updateProfile', async (profile) => {
  await updateProfile(profile);
  return profile;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileAsync.fulfilled, (state, action) => action.payload)
      .addCase(updateProfileAsync.fulfilled, (state, action) => action.payload);
  },
});

export default profileSlice.reducer;
