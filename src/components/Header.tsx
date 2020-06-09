import React from "react";
import { SafeAreaView } from "react-native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

interface PropsComponent {
  title: string;
  iconRight?: any;
  iconLeft?: any;
  iconLeftOnClick?: any;
  iconRightOnClick?: any;
}

type Props = PropsComponent & NavigationInjectedProps;

const HeaderComponent: React.FC<Props> = (props) => {
  const {
    iconLeft = null,
    iconLeftOnClick,
    iconRightOnClick,
    iconRight = null,
    title,
  } = props;

  const renderLeftControl = () => {
    if (iconLeft) {
      return <TopNavigationAction icon={iconLeft} onPress={iconLeftOnClick} />;
    }
  };
  const renderRightControl = () => {
    if (iconRight) {
      return (
        <TopNavigationAction icon={iconRight} onPress={iconRightOnClick} />
      );
    }
  };

  return (
    <SafeAreaView>
      <TopNavigation
        title={title}
        titleStyle={{ fontSize: wp(5) }}
        alignment="center"
        leftControl={renderLeftControl()}
        rightControls={renderRightControl()}
      />
    </SafeAreaView>
  );
};

export const Header = withNavigation(HeaderComponent);
