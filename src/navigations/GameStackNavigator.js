import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import InstructionsScreen from '../screens/Instructions/InstructionsScreen';
import GameScreen from '../screens/Game/GameScreen';
import ResultGameScreen from '../screens/Game/ResultGameScreen';

export const GameStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Instructions: InstructionsScreen,
  Game: GameScreen,
  ResultGame: ResultGameScreen
});