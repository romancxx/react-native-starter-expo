import React from "react";
import {
  Spinner,
  Text,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  onPress(): any;
  text: string;
  loading?: boolean;
  style?: any;
}
export const SpinnerButton: React.FC<Props> = (props) => {
  const { loading = false, onPress, style, text } = props;
  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        ...style,
      }}
    >
      {loading ? (
        <Spinner status="alternative" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "#3366ff",
    borderRadius: 4,
    minHeight: hp(5.3),
    justifyContent: "center",
    minWidth: wp(25),
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: wp(3.6),
    fontWeight: "bold",
    paddingLeft: wp(6),
    paddingRight: wp(6),
  },
});
