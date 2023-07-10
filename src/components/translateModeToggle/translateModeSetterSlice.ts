import { createSlice } from '@reduxjs/toolkit'

type TranslateMode = 'text2SignLang' | 'signLang2Text';

interface TranslateModeSetterState {
  value: TranslateMode;
}

// TODO: 상태 영구저장, 초기화
const initialState: TranslateModeSetterState = {
  value: 'text2SignLang'
};

export const translateModeSetterSlice = createSlice({
  name: 'translateModeSetter',
  initialState,
  reducers: {
    setText2signLang: (state) => {
      state.value = 'text2SignLang';
    },
    setSignLang2text: (state) => {
      state.value = 'signLang2Text';
    }
  }
});

export const { setSignLang2text, setText2signLang } = translateModeSetterSlice.actions

export default translateModeSetterSlice.reducer