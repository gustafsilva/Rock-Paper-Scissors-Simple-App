import { loadData } from '../actions/loadData';

const initialState = {
  isReady: false,
  game: {
    userChoice: null,
    robotChoice: null,
    winningUser: false
  }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOAD_DATA':
      return loadData(state);
    default:
      return state;
  }
}