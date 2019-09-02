import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO
} from './const';

import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
  
}

export default reducer;
