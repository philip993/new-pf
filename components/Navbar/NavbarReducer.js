import { SET_DRAWER_OPEN, SET_DRAWER_CLOSE } from "./NavbarActionTypes";

const initalState = {
  isOpen: false,
};

export const NavbarReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_DRAWER_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case SET_DRAWER_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
