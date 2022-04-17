import {createStore, createHook} from 'react-sweet-state';
import {TaskModel} from '../model/TaskModel';
const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: any[] = []; 
  },
  // actions that trigger store mutation
  actions: {
    increment:
      () =>
      ({setState, getState}) => {
        // mutate state synchronously
        setState({
          count: getState().count,
        });
      },
  },
});

const useCounter = createHook(Store);
export default useCounter;
