import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import { store } from '../store/index';
import RockPaperScissorsSimpleApp from '../RockPaperScissorsSimpleApp';

/** Configuration component, responsible for initializing data, putting app inside a Container
 * and initiating main component.
 *
 * @export
 * @class Setup
 * @extends {React.Component}
 */
export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <RockPaperScissorsSimpleApp />
        </Container>
      </Provider>
    );
  }
}