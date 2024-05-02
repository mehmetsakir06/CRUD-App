import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../UserData";

export const userSlice = createSlice({
    name: "users",
    initialState: userData,
    reducers: {
        addNewUser: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const { addNewUser } = userSlice.actions;
export default userSlice.reducer;