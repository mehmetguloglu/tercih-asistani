import { AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import React from "react";
import { Input, XStack } from "tamagui";

const ModalHomeButtons = ({ navigatePress, text }) => {
  return (
    <View>
      <Pressable
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 17,
          paddingRight: 7,
          paddingVertical: 8,
        }}
        onPressIn={navigatePress}
      >
        <Text style={{ fontWeight: "500" }}>{text}</Text>
        <AntDesign name="right" size={24} color="black" />
      </Pressable>
      <XStack pl={17} pr={7}>
        <Input
          f={1}
          mr={4}
          size={"$3"}
          borderColor={"lightgray"}
          placeholder="Minimum değer giriniz"
        />
        <Input f={1} ml={4} size={"$3"} borderColor={"lightgray"} />
      </XStack>
    </View>
  );
};
export default ModalHomeButtons;
