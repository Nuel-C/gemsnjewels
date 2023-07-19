import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:'none'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state = action.payload
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer