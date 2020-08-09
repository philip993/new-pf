import { SET_DRAWER_OPEN, SET_DRAWER_CLOSE } from "./NavbarActionTypes";

export const setDrawerOpen = () => {
  return {
    type: SET_DRAWER_OPEN,
  };
};

export const setDrawerClose = () => {
  return {
    type: SET_DRAWER_CLOSE,
  };
};
