import React from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

interface Props {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}
const BottomTab: React.FC<Props> = (props) => {
  const { onTabSelect, selectedIndex } = props;

  return (
    <BottomNavigation selectedIndex={selectedIndex} onSelect={onTabSelect}>
      <BottomNavigationTab title="home.title" />
      <BottomNavigationTab title="settings.title" />
    </BottomNavigation>
  );
};

export default BottomTab;
