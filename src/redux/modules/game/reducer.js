import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO,
  GAMES_SET
} from './const';

import { format } from 'date-fns';

import initialState from './initialState';
import uuid from "uuid";

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
            date: getFormattedDate(),
            id: uuid.v1()
          }
        }
      } else {
        return {
          ...state,
          current: {
            dice: [],
            date: getFormattedDate(),
            id: uuid.v1()
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
};

const getFormattedDate = () => {
  let date = new Date();
  date = format(date, 'dd/MM/yy HH:mm');

  return date;
};

export default reducer;
