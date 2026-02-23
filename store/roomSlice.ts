import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Filters = {
  sport: string;
  day: "today" | "tomorrow" | "weekend" | "any";
  distanceKm: number;
};

type RoomState = {
  activeRoomId: string | null;
  filters: Filters;
};

const initialState: RoomState = {
  activeRoomId: null,
  filters: {
    sport: "any",
    day: "any",
    distanceKm: 10
  }
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setActiveRoom(state, action: PayloadAction<string>) {
      state.activeRoomId = action.payload;
    },
    updateFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = { ...state.filters, ...action.payload };
    }
  }
});

export const { setActiveRoom, updateFilters } = roomSlice.actions;
export default roomSlice.reducer;
