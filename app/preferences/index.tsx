import { Dimensions } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Stack, Text } from "tamagui";
import PreferencesItem from "../../components/preferences-components/PreferencesItem";
const { width, height } = Dimensions.get("window");
const Preferences = () => {
  const data = [
    { id: 1, name: "test" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
    { id: 4, name: "test4" },
    { id: 5, name: "test5" },
    { id: 6, name: "test6" },
    { id: 7, name: "test7" },
    { id: 8, name: "test8" },
    { id: 9, name: "test9" },
    { id: 10, name: "test10" },
    { id: 11, name: "test11" },
  ];
  return (
    <Stack height={height}>
      <PreferencesItem />

      <FlashList
        estimatedItemSize={100}
        data={data}
        renderItem={({ item }) => {
          return <Text fontSize={16}>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Stack>
  );
};

export default Preferences;
