/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import TodoState from './TodoState';
import {Provider} from 'mobx-react';
import Entry from './Entry';

const App = (props) => {
  return (
    <Provider todoState={TodoState}>
      <Entry />
    </Provider>
  );
};

export default App;
