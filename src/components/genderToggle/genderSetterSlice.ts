import { createSlice } from '@reduxjs/toolkit'

type Gender = 'male' | 'female';

interface GenderSetterState {
  avatar: Gender;
  voice: Gender;
}

// TODO: 상태 영구저장, 초기화
const initialState: GenderSetterState = {
  avatar: 'female',
  voice: 'female',
};

export const genderSetterSlice = createSlice({
  name: 'genderSetter',
  initialState,
  reducers: {
    setMaleVoice: (state) => {
      state.voice = 'male';
    },
    setFemaleVoice: (state) => {
      state.voice = 'female';
    },
    setMaleAvatar: (state) => {
      state.avatar = 'male';
    },
    setFemaleAvatar: (state) => {
      state.avatar = 'female';
    },
  }
});

export const { setFemaleAvatar, setFemaleVoice, setMaleAvatar, setMaleVoice } = genderSetterSlice.actions

export default genderSetterSlice.reducer