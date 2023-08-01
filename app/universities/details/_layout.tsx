import React from "react";
import { Stack } from "expo-router";
import { useAppSelector } from "../../../bussiness/hooks";
import HeaderBack from "../../../components/buttons/HeaderBack";
import { PreferencesButton } from "../../../components";

const _layout = () => {
  const { selectedUniversity }: { selectedUniversity: any } = useAppSelector(
    (state) => state.universityDetailsReducer
  );
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="[name]"
          options={{
            headerShown: true,
            headerTitle: selectedUniversity.name,
            headerBackTitleVisible: false,
            headerLeft: () => <HeaderBack />,
            headerTitleAlign: "center",
            headerRight: () => <PreferencesButton />,
          }}
        />
      </Stack>
    </>
  );
};

export default _layout;
