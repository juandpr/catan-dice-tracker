import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO,
  GAMES_SET
} from './const';
import initialState from './initialState';

import { format } from 'date-fns';
import uuid from 'uuid';

const reducer = (state = initialState, action) => {
  const getCurrentGame = () => state.games.find(game => {
    return game.id === state.current;
  });

  switch (action.type) {
    case GAME_NEW: {
      const newId = uuid.v1();

      return {
        ...state,
        games: [
          ...state.games,
          {
            dice: [],
            date: getFormattedDate(),
            id: newId
          }
        ],
        current: newId
      }
    }

    case DICE_THROW: {
      const currentGame = getCurrentGame();

      const newGame = {
        ...currentGame,
        dice: [
          ...currentGame.dice,
          action.value
        ]
      };

      const newGames = state.games.map(game => {
        if (game.id === state.current) {
          return newGame;
        } else {
          return game;
        }
      });

      return {
        ...state,
        games: [
          ...newGames
        ]
      };
    }

    case GAME_SELECT: {
      return {
        ...state,
        current: action.id
      }
    }

    case DICE_UNDO: {
      const currentGame = getCurrentGame();

      const newGame = {
        ...currentGame,
        dice: [
          ...currentGame.dice.slice(0, -1),
        ]
      }

      const newGames = state.games.map(game => {
        if (game.id === state.current) {
          return newGame;
        } else {
          return game;
        }
      });
    
  
      return {
        ...state,
        games: newGames
      };
    }

    case GAMES_SET: {
      return {
        games: action.games.games,
        current: action.games.current
      }
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
