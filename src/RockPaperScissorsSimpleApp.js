import React, { Component } from "react";
import { View } from 'react-native';
import { Spinner, Text } from 'native-base';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import { connect } from 'react-redux';


/**
 * Main component, responsible for initializing screen and loaded static data.
 *
 * @class RockPaperScissorsSimpleApp
 * @extends {React.Component}
 */
class RockPaperScissorsSimpleApp extends Component {
  componentWillMount() {
    /* Loading dependencies */
    this.loadFonts();
  }
  async loadFonts() {
    /* Loading Fonts ... */
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    /* After loading */
    this.props.dataLoaded();
  }
  
  render() {
    if (this.props.isReady === false) {
      /* If the dependencies are not loaded */
      return (
        <View style={styles.loading}>
          <Spinner color="blue" />
          <Text>Loading Game...</Text>
        </View>
      );
    }
    else {
      /* If everything is already loaded */
      return (
        <WelcomeScreen />
      );
    }
  }
}

const styles = {
  loading: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    height: "100%"
  }
};

/* Mapping Data*/
function mapStateToProps(state) {
  return {
    isReady: state.isReady
  };
};
/* Mapping Actions */
function mapDispatchToProps(dispatch) {
  return {
    dataLoaded: () => dispatch({ type: 'LOAD_DATA' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RockPaperScissorsSimpleApp);