import { createStore } from 'redux';
import rootReducer from './modules'
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'CATAN_DICE_TRACKER';

const saveState = async (state) => {
  const serializedState = JSON.stringify(state);

  try {
    await AsyncStorage.setItem(STORAGE_KEY, serializedState)
  } catch (e) {
    console.log('unable to save state');
  }
};

export const loadState = async () => {
  try {
    const state = await AsyncStorage.getItem(STORAGE_KEY);

    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export default function configureStore() {
  const store = createStore(rootReducer);

  store.subscribe(() => {
    saveState(store.getState())
  });

  return store;
}