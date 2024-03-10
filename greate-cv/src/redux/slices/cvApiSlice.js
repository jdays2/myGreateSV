import { CV_URL } from '../../utils/constants';
import apiSlice from './apiSlice';

export const cvApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCv: builder.query({
			query: () => ({
				url: CV_URL,
				credentials: 'include',
				keepUnusedDataFor: 5,
				providesTags: ['Cv'],
			}),
		}),
	}),
});

export const { useGetCvQuery } = cvApiSlice;
