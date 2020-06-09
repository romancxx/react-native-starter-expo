import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import settingsReducter, {
  SettingsState,
  settingsPersistConfig,
} from "@states/reducers/settings";
import authReducer, { AuthState, authPersistConfig } from "./reducers/auth";

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
}

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  settings: persistReducer(settingsPersistConfig, settingsReducter),
});
