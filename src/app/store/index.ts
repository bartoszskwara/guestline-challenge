import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { apiSlice } from 'app/api/apiSlice';
import themeReducer from 'app/ThemeProvider/themeSlice';
import filterReducer from 'components/FilterPanel/filterSlice';
import hotelsReducer from 'pages/Home/store/hotelsSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter: filterReducer,
        hotels: hotelsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
