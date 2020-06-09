import React from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import AppContainer from "@navigation/AppRootNavigation";
import { mapping } from "@eva-design/eva";
import { AppState } from "@states/reducer";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@states/store";
import NavigationService from "@services/navigation";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ConnectedIntlProvider> */}
        <ConnectedApplicationProvider mapping={mapping}>
          <IconRegistry icons={EvaIconsPack} />
          <AppContainer
            ref={(navigatorRef) => {
              NavigationService.setRefNavigator(navigatorRef);
            }}
          />
        </ConnectedApplicationProvider>
        {/* </ConnectedIntlProvider> */}
      </PersistGate>
    </Provider>
  );
};

// ========================================================
// UI Kitten
// ========================================================
const mapStateToPropsTheme = (state: AppState) => {
  return { theme: state.settings.theme.values };
};

const ConnectedApplicationProvider = connect(mapStateToPropsTheme)(
  ApplicationProvider
);

export default App;
