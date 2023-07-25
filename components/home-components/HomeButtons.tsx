import React from "react";
import { ImageBackground } from "react-native";
import { Text, Button, H5 } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const HomeButtons = ({ onPress, source, header, text }) => {
  return (
    <Button
      f={1}
      my={5}
      onPress={onPress}
      px={0}
      br={20}
      overflow="hidden"
      fd="column"
    >
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
        }}
        source={source}
        resizeMode="cover"
      >
        <LinearGradient
          f={1}
          zIndex={1}
          position="absolute"
          width="100%"
          height="100%"
          colors={[
            header === "Üniversiteler" ? "#D1ECFF10" : "#FFF5D110",
            header === "Üniversiteler" ? "#D1ECFF" : "#FFF5D1",
          ]}
          start={[0, 1]}
          end={[0, 0]}
          overflow="hidden"
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
        </LinearGradient>
      </ImageBackground>
    </Button>
  );
};

export default HomeButtons;
