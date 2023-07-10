import { configureStore } from '@reduxjs/toolkit'
import translateModeSetterReducer from '../components/translateModeToggle/translateModeSetterSlice';
import genderSetterReducer from '../components/genderToggle/genderSetterSlice';

const store = configureStore({
  reducer: {
    translateModeSetter: translateModeSetterReducer,
    genderSetter: genderSetterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;