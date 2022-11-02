import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    noOfCakes: 50
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.noOfCakes = state.noOfCakes - action.payload;

        },
        restocked: (state, action) => {
            state.noOfCakes = state.noOfCakes + parseInt(action.payload)
        }
    }
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions