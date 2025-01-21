import { createSlice } from "@reduxjs/toolkit";
const isTokenPresentInCookie = ()=>{
  const token = document.cookie.split("; ").find(cookie => cookie.trim().startsWith('token='));
  return !!token;
}
const loadUserFromLocalStorage = ()=>{
  try {
    const serializedState = localStorage.getItem('user');
    if(serializedState==null){
      return {user:JSON.parse()}
    }
    
  } catch (error) {
    return {user:null}
  }
}
const initialState = loadUserFromLocalStorage();
const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:(state,action)=> {
    state.user = action.payload.user;
    localStorage.setItem('user',JSON.stringify(state.user))
  },
  logout:(state)=>{
    localStorage.removeItem('user')
  }
})
export const {setUser,logout} = authSlice.actions;
export default authSlice.reducer;