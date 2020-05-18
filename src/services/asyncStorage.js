/**
 * @flow
 */
import AsyncStorage from '@react-native-community/async-storage';

const setItem = (key: string, item: string) => AsyncStorage.setItem(key, JSON.stringify(item));

const getItem = (key: string, defaultItem?: any) =>
  AsyncStorage.getItem(key)
    .then(JSON.parse)
    .catch(error => {
      console.log(error);
      return defaultItem;
    });

const clearStorage = () => AsyncStorage.clear();

const removeItem = (key: string) => AsyncStorage.removeItem(key);

export default {
  setItem,
  getItem,
  removeItem,
  clearStorage,
};
