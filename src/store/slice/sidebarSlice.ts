import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SidebarItem {
    id:string,
    label:string,
    path:string
}
interface SidebarState{
    items:SidebarItem[]
}

const initialState:SidebarState={
    items:[]
}

const sidebarSlice=createSlice({
    name:"Sidebar",
    initialState,
    reducers:{
      setSidebarItems(state, action: PayloadAction<SidebarItem[]>) {
      state.items = action.payload;
    },
    }

})

export const {setSidebarItems } = sidebarSlice.actions;
export default sidebarSlice.reducer;