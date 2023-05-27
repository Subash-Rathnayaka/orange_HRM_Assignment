import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {presister, store} from './src/shared/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/shared/navigation/navigator';
import NotificationAlert from './src/screens/notificationAlert/notificationAlert.component';
import Loader from './src/screens/loader/loader.component';

function App() {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={presister}>
        <AppNavigator />
        <NotificationAlert />
        <Loader />
      </PersistGate>
    </Provider>
  );
}

export default App;
