import React from "react";
import { Stack, useRouter } from "expo-router";
import HeaderBack from "../../../components/buttons/HeaderBack";

const _layout = () => {
  const router = useRouter();
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
