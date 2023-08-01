import React, { useState } from "react";
import { Stack } from "expo-router";
import HeaderBack from "../../components/buttons/HeaderBack";
import { Button, Text } from "tamagui";
import * as Burnt from "burnt";
import { Pressable } from "react-native";
import { setDeveloperMode } from "../../bussiness/reducers/developerModeReducer";
import { useAppDispatch, useAppSelector } from "../../bussiness/hooks";

const _layout = () => {
  const dispatch = useAppDispatch();
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );

  let developerModeCount = 0;

  const _handleDeveloperCount = () => {
    developerModeCount++;
  };

  const _handleDeveloperMode = () => {
    if (developerModeCount > 10) {
      dispatch(setDeveloperMode(true));
      Burnt.toast({
        title: "Geliştirici modu açıldı",
        preset: "done",
        duration: 1,
        haptic: "success",
      });
    }
  };
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: () => (
            <Pressable
              onLongPress={() => _handleDeveloperMode()}
              onPress={() => _handleDeveloperCount()}
            >
              <Text fontSize={17}> Tercihlerim</Text>
            </Pressable>
          ),
          headerTitleAlign: "center",
          headerLeft: () => <HeaderBack />,
        }}
      />
      <Stack.Screen
        name="preferenceList"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
