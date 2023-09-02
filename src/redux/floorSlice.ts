import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IData, IFloorsState} from "../types/types";
import {API_URL} from "../App";

const initialState: IFloorsState = {
  data: null,
  status: 'idle',
  error: null
}

export const fetchFloors = createAsyncThunk<IData>(
  'floors/fetchFloors',
  async () => {
    const response = await fetch(API_URL + '/test/json/')
    return (await response.json()) as IData
  }
)

const floorSlice = createSlice({
  name: 'floors',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder
      .addCase(fetchFloors.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchFloors.rejected, (state, action: AnyAction) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(fetchFloors.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        const payload = action.payload
        payload.sections[6].title = 'Fargo Quartz'
        payload.sections[7].title = 'Fargo Duropolymer'
        state.data = action.payload
      })
  })
})

export const selectElements = (state: IFloorsState, section: string = '') => {

  if (state.data) {

    const selectedSection = state.data.sections.find(item => item.title.toLowerCase() === section.toLowerCase())

    if (selectedSection) {
      return selectedSection.items.map(item => {
        return state.data?.elements[item]
      })

    } else return []

  } else return []

}

export const selectElement = (state: IFloorsState, id: string = '') => {

  for (const elem in state.data?.elements) {
    if (state.data?.elements[elem].id === id) {
      return state.data?.elements[elem]
    }
  }
}

export default floorSlice.reducer
