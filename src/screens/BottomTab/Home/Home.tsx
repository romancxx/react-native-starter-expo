import React from "react";
import {
  Layout,
  StyleService,
  useStyleSheet,
  Text
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import { Header } from "@components/index";
import { ArrowIosBackFill } from "@assets/icons";
import i18n from "@locales/i18n";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const styles = useStyleSheet(themedStyles);

  const onBack = () => {
    // NavigationService.goBack();
  };

  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title="Header"
        iconLeft={ArrowIosBackFill}
        iconLeftOnClick={onBack}
      />
      <Layout style={styles.container}>
        <SafeAreaView>
          <Text category="h4">{i18n.t("home.title")}</Text>
        </SafeAreaView>
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home;
