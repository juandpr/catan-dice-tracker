import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO,
  GAMES_SET
} from './const';

import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_NEW:
      if (state.current.dice.length > 0) {
        return {
          ...state,
          games: [
            ...state.games,
            state.current
          ],
          current: {
            dice: [],
            date: new Date(),
          }
        }
      } else {
        return {
          ...state,
          current: {
            dice: [],
            date: new Date(),
          }
        }
      }

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
    
    case DICE_UNDO:
      return {
        ...state,
        current: {
          ...state.current,
          dice: [
            ...state.current.dice.slice(0, -1)
          ]
        }
      };

    case GAMES_SET:
      return {
        ...state,
        games: [
          ...state.games,
          ...action.games.games
        ],
        current: action.games.current
      }

    default:
      return state;
  }
}

export default reducer;
