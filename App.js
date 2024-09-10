import React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/redux_location/store';
import { initializeDatabase } from './src/database/database';
import {Provider as MobXProvider} from 'mobx-react';
import dayStore from './src/mobx_days/stores/DayStore';
import transportStore from './src/mobx_days/stores/TransportStore';

export default function App() {
  initializeDatabase();  
  return (
    <MobXProvider dayStore={dayStore} transportStore={transportStore}>
        <ReduxProvider store={store}>
          <AppNavigation />
        </ReduxProvider>
    </MobXProvider>
  );
}