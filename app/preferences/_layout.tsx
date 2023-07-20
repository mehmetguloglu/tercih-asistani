import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HeaderBack from "../../components/buttons/HeaderBack";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Tercihlerim",
          headerTitleAlign: "center",
          headerLeft: () => <HeaderBack />,
        }}
      />
    </Stack>
  );
};

export default _layout;
