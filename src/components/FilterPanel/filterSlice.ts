import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterStateType {
    rating: number;
    adults: number;
    children: number;
}

const initialState: FilterStateType = {
    rating: 0,
    adults: 0,
    children: 0,
};

const { actions, reducer } = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setRatingFilter: (state, action) => {
            state.rating =
                action.payload === state.rating ? undefined : action.payload;
        },
        incrementFilter: (
            state,
            action: PayloadAction<{ filterName: 'adults' | 'children' }>
        ) => {
            state[action.payload.filterName] =
                state[action.payload.filterName] + 1;
        },
        decrementFilter: (
            state,
            action: PayloadAction<{ filterName: 'adults' | 'children' }>
        ) => {
            const value = state[action.payload.filterName] - 1;
            state[action.payload.filterName] = value < 0 ? 0 : value;
        },
    },
});

export const { setRatingFilter, incrementFilter, decrementFilter } = actions;

export default reducer;
