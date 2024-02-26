/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WebViewScreen from './app/Screen/WebViewScreen';

AppRegistry.registerComponent(appName, () => WebViewScreen);
