import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
  bollywood:[]
}

const Slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    getBollywood(state, action) {
      //   console.log('data chatched',action);
      // const { id, text } = action.payload
      // state.todos.push({
      //   id,
      //   text,
      //   completed: false
      // })
      const data = {
        id:nanoid(),
        name:action.payload
      }
      state.bollywood.push(data)
    },
    
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getBollywood} = Slice.actions

// Export the slice reducer as the default export
export default Slice.reducer