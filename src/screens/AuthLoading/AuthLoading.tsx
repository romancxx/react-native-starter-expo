import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import NavigationService from "@services/navigation";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import {
  Layout,
  ThemedComponentProps,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import { selectIsAuth } from "@states/selectors";

interface Props extends ThemedComponentProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AuthLoading: React.FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const { navigation } = props;
    NavigationService.setRefNavigator(navigation);

    if (isAuth) {
      NavigationService.navigate("App");
    } else {
      NavigationService.navigate("Auth");
    }
  }, []);

  return (
    <Layout style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
});

export default AuthLoading;
