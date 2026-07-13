//stores the data of the user for the slice

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        userData : null
    },
    reducers : { // reducer changes the initial state with time
       setUserData: (state, action) =>{  //the value we put here changes it wiht the initialState value
          state.userData = action.payload
       }
    }
})

export const {setUserData} = userSlice.actions
export default userSlice.reducer