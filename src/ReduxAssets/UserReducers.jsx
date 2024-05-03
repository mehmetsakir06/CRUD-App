import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../UserData";

export const userSlice = createSlice({
    name: "users",
    initialState: userData,
    reducers: {
        addNewUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, surname, email, phone, address } = action.payload;
            const updUser = state.find(user => user.id == id);
            if (updUser) {
                updUser.name = name;
                updUser.surname = surname;
                updUser.email = email;
                updUser.phone = phone;
                updUser.address = address;

            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            return (state.find(user => user.id == id) && state.filter(f => f.id !== id))
        }
    }
}
)
export const { addNewUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;