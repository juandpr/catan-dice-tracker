import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO
} from './const';

import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_NEW:
      state.games.push(state.current);
      state.current = {
        dice: [],
        date: new Date(),
      };
      return state;

    case DICE_THROW:
      return {
        ...state,
        current: {
          ...state.current,
          dice: [
            ...state.current.dice,
            action.value
          ]
        }
      };
    
    case GAME_SELECT:
      state.current = state.games[action.index];
      return state;

    default:
      return state;
  }
}

export default reducer;
