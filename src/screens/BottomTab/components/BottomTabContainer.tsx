import React from "react";
import { NavigationScreenProp } from "react-navigation";
import BottomTab from "./BottomTabComponent";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
export const BottomTabContainer: React.FC<Props> = (props) => {
  const onTabSelect = (index: number) => {
    const { navigation } = props;
    const { [index]: selectedRoute } = navigation.state.routes;

    props.navigation.navigate({
      routeName: selectedRoute.routeName,
    });
  };

  return (
    <BottomTab
      selectedIndex={props.navigation.state.index}
      onTabSelect={onTabSelect}
    />
  );
};
