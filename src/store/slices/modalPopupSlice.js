import { createSlice  } from "@reduxjs/toolkit";


const initialState = {
    modal: false,
}

const modalPopupSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state, action)  {
            state.modal = action.payload;
        }
    }
})

export const { showModal } = modalPopupSlice.actions;
export default modalPopupSlice.reducer;
