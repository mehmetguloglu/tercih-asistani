import React from "react";
import { Stack } from "expo-router";
import HeaderBack from "../../components/buttons/HeaderBack";
import { PreferencesButton } from "../../components";

const unstable_settings = {
  initialRouteName: "index",
};
const _layout = () => (
  <>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Bölümler",
          headerLeft: () => <HeaderBack />,
          headerTitleAlign: "center",
          headerRight: () => <PreferencesButton />,
        }}
      />
      <Stack.Screen name="details" options={{ headerShown: false }} />
      <Stack.Screen name="filters" options={{ presentation: "modal" }} />
    </Stack>
  </>
);

export default _layout;
