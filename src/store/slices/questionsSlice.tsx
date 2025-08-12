import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { QuestionsState } from '../../types/questions';
import { QuestionService } from '../../services/questions';

const initialState: QuestionsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await QuestionService.fetchQuestions();
    return response;
  },
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch questions';
      });
  },
});

export default questionsSlice.reducer;
