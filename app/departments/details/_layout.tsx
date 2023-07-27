import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useAppSelector } from "../../../bussiness/hooks";
import HeaderBack from "../../../components/buttons/HeaderBack";
import PreferencesButton from "../../../components/PreferencesButton";

const _layout = () => {
  const {
    selectedDepartment,
  }: {
    selectedDepartment: any;
  } = useAppSelector((state) => state.departmentDetailsReducer);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </>
  );
};

export default _layout;
