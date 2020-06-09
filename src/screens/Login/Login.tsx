import React, { useEffect } from "react";
import {
  Layout,
  Text,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { login } from "@states/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerButton } from "@components/index";
import NavigationService from "@services/navigation";
import { selectAuthLoading, selectIsAuth } from "@states/selectors";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Login: React.FC<Props> = (props) => {
  const { navigation } = props;
  const styles = useStyleSheet(themedStyles);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const loading = useSelector(selectAuthLoading);

  useEffect(() => {
    NavigationService.setRefNavigator(navigation);

    if (isAuth) {
      NavigationService.navigate("App");
    } else {
      NavigationService.navigate("Auth");
    }
  }, [isAuth]);

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text category="h4">React-Native-Starter</Text>
        <SpinnerButton
          onPress={() => dispatch(login("", ""))}
          text="login.title"
          loading={loading}
        />
      </SafeAreaView>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
