import React from "react";
import { Pressable, Text } from "react-native";
import { Button } from "tamagui";
const LoadMoreDetailsButton = ({ onPress }) => {
  return (
    <Pressable
      style={{
        flex: 1,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginHorizontal: 15,
        marginTop: 8,

        borderRadius: 16,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, fontWeight: "700" }}>
        Daha fazla sonuç göster
      </Text>
    </Pressable>
  );
};

export default LoadMoreDetailsButton;
