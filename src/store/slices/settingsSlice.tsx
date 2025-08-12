import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type PageStatus = 'onboarding' | 'main';

const initialState = {
  pageStatus: 'onboarding' as PageStatus,
};

export const initializeSettings = createAsyncThunk<PageStatus>(
  'settings/initializeSettings',
  async () => {
    const status = await AsyncStorage.getItem('pageStatus');
    return (status === 'main' ? 'main' : 'onboarding') as PageStatus;
  },
);

export const setPageStatusToMain = createAsyncThunk(
  'settings/setPageStatusToMain',
  async () => {
    await AsyncStorage.setItem('pageStatus', 'main');
  },
);

export const resetPageStatusToOnboarding = createAsyncThunk(
  'settings/resetPageStatusToOnboarding',
  async () => {
    await AsyncStorage.setItem('pageStatus', 'onboarding');
  },
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      initializeSettings.fulfilled,
      (state, action: PayloadAction<PageStatus>) => {
        state.pageStatus = action.payload;
      },
    );
    builder.addCase(setPageStatusToMain.fulfilled, state => {
      state.pageStatus = 'main';
    });
    builder.addCase(resetPageStatusToOnboarding.fulfilled, state => {
      state.pageStatus = 'onboarding';
    });
  },
});

export default settingsSlice.reducer;
