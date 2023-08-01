import React from "react";
import { Stack } from "expo-router";
import HeaderBack from "../../../components/buttons/HeaderBack";

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitle: "Filtrele",
          headerLeft: () => <HeaderBack />,
          headerTitleAlign: "center",
        }}
        initialRouteName="ModalHomeScreen"
      />
    </>
  );
};

export default _layout;
