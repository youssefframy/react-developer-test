import CategoryActionTypes from "./category-types";

export const changeCategory = category => ({
  type: CategoryActionTypes.CHANGE_CATEGORY,
  payload: category
});
