import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const CrossIcon = () => {
  return (
    <Image
      style={styles.CrossIcon}
      contentFit="cover"
      source={require("../assets/pictures/crossblue")}
    />
  );
};

const styles = StyleSheet.create({
    CrossIcon: {
    width: 24,
    height: 24,
  },
});

export default CrossIcon;
