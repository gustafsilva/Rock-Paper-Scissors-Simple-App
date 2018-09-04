import React, { Component } from "react";
import { View, Image } from "react-native";
import { H1, Button, Text } from 'native-base';

import { styles } from './styles';

const imgWelcome = require('../../../assets/img/welcome.png');

/**
 * Welcome Screen for the App, the first screen the user will see.
 * From this screen the user can the instructions about the game or can start playing.
 *
 * @export
 * @class WelcomeScreen
 * @extends {React.Component}
 */
export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null /* remove the header of the screen */
  }

  render() {
    return (
      <View style={styles.container}>
        <H1>Rock-Paper-Scissors Simple</H1>

        <Image source={imgWelcome} style={styles.image} />

        <View style={styles.buttons}>
          <Button
            success
            onPress={() => this.props.navigation.navigate("Game")}
            style={styles.button}
          >
            <Text>Play Game</Text>
          </Button>

          <Button
            info
            onPress={() => this.props.navigation.navigate("Instructions")}
            style={styles.button}
          >
            <Text>Instructions</Text>
          </Button>
        </View>
      </View>
    );
  }
}