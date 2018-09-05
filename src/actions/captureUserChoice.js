const userChoiceRock = (state) => {
  return {
    ...state,
    game: {
      ...state.game,
      userChoice: "ROCK"
    }
  };
}

const userChoicePaper = (state) => {
  return {
    ...state,
    game: {
      ...state.game,
      userChoice: "PAPER"
    }
  };
}

const userChoiceScissors = (state) => {
  return {
    ...state,
    game: {
      ...state.game,
      userChoice: "SCISSORS"
    }
  }
}

module.exports = {
  userChoiceRock,
  userChoicePaper,
  userChoiceScissors
}