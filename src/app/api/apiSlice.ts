import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotel, RoomsResponse } from 'types';

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const collectionId = process.env.REACT_APP_COLLECTION_ID || '';

type GetRoomsQueryParamsType = {
    hotelId: string;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getHotels: builder.query<Hotel[], void>({
            query: () => ({
                url: '/hotels',
                params: { 'collection-id': collectionId },
            }),
        }),
        getRooms: builder.query<
            RoomsResponse,
            Partial<GetRoomsQueryParamsType>
        >({
            query: ({ hotelId }) => `roomRates/${collectionId}/${hotelId}`,
        }),
    }),
});

export const { useGetHotelsQuery, useGetRoomsQuery } = apiSlice;
