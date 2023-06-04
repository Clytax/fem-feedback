import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Types
import { Categories, FilterState } from "@/types/features/filter";
const initialState: FilterState = {
  categories: [
    { name: "All", active: true },
    { name: "UI", active: false },
    { name: "UX", active: false },
    { name: "Enhancement", active: false },
    { name: "Bug", active: false },
    { name: "Feature", active: false },
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    toggleFilterCategory(state, action: PayloadAction<Categories>) {
      const category = action.payload;
      if (category !== "All" && state.categories[0].active === true) {
        state.categories[0].active = false;
      } else if (category === "All") {
        state.categories.forEach((item) => {
          item.active = false;
        });
        state.categories[0].active = true;
        return;
      }
      const categoryIndex = state.categories.findIndex(
        (item) => item.name === category
      );
      const activeCategories = state.categories.filter(
        (item) => item.active === true
      );
      if (
        activeCategories.length === 1 &&
        activeCategories[0].name === category
      ) {
        return;
      }
      state.categories[categoryIndex].active =
        !state.categories[categoryIndex].active;
    },
  },
});

export const { toggleFilterCategory } = filterSlice.actions;

export default filterSlice.reducer;
