
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
  mainBgColor: string;
  titleBorderRadius: number;
  fontSize: number;
  
}

const initialState: InputState = {
  title: '',
  description: '',
  titleColor: '',
  descriptionColor: '',
  mainBgColor: '',
  titleBorderRadius: 0,
  fontSize: 0,
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<Partial<InputState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateInput } = inputSlice.actions;
export default inputSlice.reducer;
