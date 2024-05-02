import { configureStore } from '@reduxjs/toolkit'
import UserReducers from './UserReducers'

export default configureStore({
    reducer: {
        users: UserReducers,
    },
})