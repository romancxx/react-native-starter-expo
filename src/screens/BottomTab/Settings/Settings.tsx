import React from "react";
import {
  Layout,
  Button,
  Toggle,
  Text,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  themeChangeLight,
  themeChangeDark,
  localeChange,
} from "@states/actions/settings";
import { ThemeName } from "@states/reducers/settings";
import { logout } from "@states/actions/auth";
import i18n from "@locales/i18n";
import NavigationService from "@services/navigation";
import { Updates } from "expo";
import { selectTheme, selectLocale } from "@states/selectors";

interface Props {}

const Settings: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const styles = useStyleSheet(themedStyles);
  const theme = useSelector(selectTheme);
  const locale = useSelector(selectLocale);

  const logoutUser = () => {
    dispatch(logout());
    NavigationService.navigate("Login");
  };

  const onThemeChange = () => {
    if (theme.name === ThemeName.DARK) {
      dispatch(themeChangeLight());
    } else {
      dispatch(themeChangeDark());
    }
  };

  const onLocaleChange = () => {
    if (locale === "en") {
      dispatch(localeChange("fr"));
    } else {
      dispatch(localeChange("en"));
    }
    setTimeout(() => {
      Updates.reload();
    }, 300);
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={{ padding: "5%" }} category="h4">
          {i18n.t("settings.title")}
        </Text>
        <Text>Theme</Text>
        <Toggle
          style={{ padding: "2%" }}
          checked={theme.name === ThemeName.DARK}
          onChange={onThemeChange}
        />
        <Layout
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>EN</Text>
          <Toggle
            style={{ padding: "2%" }}
            checked={locale === "fr"}
            onChange={() => onLocaleChange()}
          />
          <Text>FR</Text>
        </Layout>
        <Button
          style={{ justifyContent: "flex-end" }}
          onPress={() => logoutUser()}
        >
          {i18n.t("settings.title")}
        </Button>
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

export default Settings;
