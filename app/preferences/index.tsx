import { Dimensions } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Stack, Text } from "tamagui";
import PreferencesItem from "../../components/preferences-components/PreferencesItem";
const { width, height } = Dimensions.get("window");
const Preferences = () => {
  const data = [{ id: 1, name: "test" }];
  return (
    <Stack height={height}>
      <PreferencesItem />

      {/* <FlashList
        estimatedItemSize={100}
        data={data}
        renderItem={({ item }) => {
          return <Text fontSize={16}>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </Stack>
  );
};

export default Preferences;
