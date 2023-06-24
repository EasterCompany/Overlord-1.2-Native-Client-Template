import {AppRegistry} from 'react-native';
import App from './src/App';
import appInfo from './app.json';

AppRegistry.registerComponent(appInfo.name, () => App);
