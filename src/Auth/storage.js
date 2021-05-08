/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'authUser';

const _storeData = async user => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(user));
  } catch (error) { }
};

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) { }
};
const _removeData = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) { }
};

export default { _storeData, _retrieveData, _removeData };
