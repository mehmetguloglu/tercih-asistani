import { Dimensions, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "tamagui";
const LoadMoreButton = ({ onPress }) => {
  return (
    <Pressable
      style={{
        flex: 1,
        height: 76,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 6,
        marginHorizontal: 15,
        borderRadius: 16,
        backgroundColor: "#dbead5",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <AntDesign name="pluscircleo" size={24} color="green" />

      <Text mx={5} fontSize={16} fontWeight={"800"}>
        Daha fazla sonuç göster
      </Text>
    </Pressable>
  );
};

export default LoadMoreButton;
