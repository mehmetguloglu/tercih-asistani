import { Stack } from "expo-router";
import React from "react";
import HeaderBack from "../../../components/buttons/HeaderBack";

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="ModalHomeScreen"
      >
        <Stack.Screen
          name="ModalHomeScreen"
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: "Filtrele",
            headerLeft: () => <HeaderBack />,
          }}
        />
      </Stack>
    </>
  );
};
export default _layout;
