import { loadData } from '../actions/loadData';
import { userChoiceRock, userChoicePaper, userChoiceScissors } from '../actions/captureUserChoice';

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
    case 'USER_CHOICE_ROCK':
      return userChoiceRock(state);
    case 'USER_CHOICE_PAPPER':
      return userChoicePaper(state);
    case 'USER_CHOICE_SCISSORS':
      return userChoiceScissors(state);
    default:
      return state;
  }
}