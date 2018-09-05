import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Content, H2 } from 'native-base';
import { styles } from './stylesGameScreen';
import { connect } from 'react-redux';

const imgRock = require("../../../assets/img/rock.png");
const imgPaper = require("../../../assets/img/paper.png");
const imgScissors = require("../../../assets/img/scissors.png");

class GameScreen extends Component {
  static navigationOptions = {
    title: "Play Game"
  }

  constructor(props) {
    super(props);

    this.userChoice = this.userChoice.bind(this);
  }

  userChoice(choice) {
    switch (choice) {
      case 'ROCK':
        this.props.userChoiceRock();
      case 'PAPER':
        this.props.userChoicePaper();
      default:
        this.props.userChoiceScissors();
    }
    this.props.navigation.navigate("ResultGame");
  }

  render() {
    return (
      <Content>
        <View style={styles.title}>
          <H2>Make your move</H2>
        </View>

        <View style={styles.images}>
          <TouchableOpacity onPress={() => this.userChoice("ROCK")}>
            <View style={styles.image}>
              <Image source={imgRock} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.userChoice("PAPER")} >
            <Image source={imgPaper} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.userChoice("SCISSORS")}>
            <Image source={imgScissors} style={styles.image} />
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {
    userChoice: state.userChoice
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userChoiceRock: () => dispatch({ type: 'USER_CHOICE_ROCK' }),
    userChoicePaper: () => dispatch({ type: 'USER_CHOICE_PAPER' }),
    userChoiceScissors: () => dispatch({ type: 'USER_CHOICE_SCISSORS ' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);