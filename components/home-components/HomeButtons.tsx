import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Text, Button, H5 } from "tamagui";

const HomeButtons = ({ onPress, source, header, text }) => {
  return (
    <Button
      f={1}
      my={5}
      bg="white"
      onPress={onPress}
      px={0}
      br={14}
      overflow="hidden"
      bw={0}
    >
      <ImageBackground
        style={styles.image}
        source={source}
        resizeMode="stretch"
      >
        <H5
          color={header === "Üniversiteler" ? "#1a73e8" : "#faa405"}
          mx={20}
          mt={16}
        >
          {header}
        </H5>
        <Text mx={20} mt={2}>
          {text}
        </Text>
      </ImageBackground>
    </Button>
  );
};

export default HomeButtons;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: "100%",
  },
});
