import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Group {
  id: string;
  name: string;

}
interface GroupState {
  list: Group[];
  selectedGroupId: string | null;
}
const initialState: GroupState = {
  list: [],
  selectedGroupId: null,
};

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroupList(state, action: PayloadAction<Group[]>) {
      state.list = action.payload;
    },
    setSelectedGroup(state, action: PayloadAction<string>) {
      state.selectedGroupId = action.payload;
    },
    clearSelectedGroup(state) {
      state.selectedGroupId = null;
    },
  },
});

export const {
  setGroupList,
  setSelectedGroup,
  clearSelectedGroup,
} = groupSlice.actions;

export default groupSlice.reducer;
