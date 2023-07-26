import { Dimensions } from "react-native";
import React, { useEffect, useMemo } from "react";
import { FlashList } from "@shopify/flash-list";
import { Button, Stack, Text } from "tamagui";
import PreferencesItem from "../../components/preferences-components/PreferencesItem";
import {
  addPreferenceList,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
const { width, height } = Dimensions.get("window");

const PreferencesListItem = ({ item }) => {
  return (
    <Button
      size={"$5"}
      bw={1}
      mx={15}
      my={4}
      onPress={() => {}}
      shadowColor="#000"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.23}
      shadowRadius={2.62}
      elevation={4}
    >
      <Text f={1} color={"black"} fontSize={16} fontWeight={"500"}>
        {item.name}
      </Text>
    </Button>
  );
};

const Preferences = () => {
  const { data, isLoading, mutate, error } = getPreferenceList();
  const { trigger } = addPreferenceList();

  useMemo(() => {
    const checkFirstData = async () => {
      if (data && data.length === 0 && !isLoading && !error) {
        await trigger({ name: "Tercih Listem" } as any);
        mutate();
      }
    };
    checkFirstData();
  }, [data, isLoading, error]);
  return (
    <Stack height={height}>
      {/* <PreferencesItem /> */}

      <FlashList
        estimatedItemSize={100}
        data={data}
        renderItem={({ item }: { item: any }) => {
          return <PreferencesListItem item={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Stack>
  );
};

export default Preferences;
