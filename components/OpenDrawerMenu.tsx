import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack } from "tamagui";
import { useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";

const OpenDrawerMenu = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}
    >
      {({ pressed }) => (
        <Stack p={12} als="center" br="$5">
          <Feather
            name="menu"
            size={24}
            color="black"
            style={{ transform: [{ scale: pressed ? 0.95 : 1 }] }}
          />
        </Stack>
      )}
    </Pressable>
  );
};

export default OpenDrawerMenu;
