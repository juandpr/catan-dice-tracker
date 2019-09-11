import {
  GAME_NEW,
  GAME_SELECT,
  DICE_THROW,
  DICE_UNDO
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
