import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO,
  GAMES_SET
} from './const';

export const newGame = _ => (
  {
    type: GAME_NEW
  }
);

export const selectGame = (index) => (
  {
    type: GAME_SELECT,
    index
  }
);

export const throwDice = (value) => (
  {
    type: DICE_THROW,
    value
  }
);

export const undoDice = _ => (
  {
    type: DICE_UNDO
  }
);

export const setGames = (games) => (
  {
    type: GAMES_SET,
    games
  }
);
