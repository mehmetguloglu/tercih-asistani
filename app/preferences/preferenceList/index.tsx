import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { getPreferenceListItems } from "../../../bussiness/actions/preferences";
import { FlashList } from "@shopify/flash-list";
import PreferencesItem from "../../../components/preferences-components/PreferencesItem";
import HeaderBack from "../../../components/buttons/HeaderBack";
import { LoadingIndicator } from "../../../components";

const PreferenceList = () => {
  const { id, name } = useLocalSearchParams();
  const { data, isLoading, mutate } = getPreferenceListItems(id);
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: Array.isArray(name) ? name[0] : name,
          headerTitleAlign: "center",
          headerLeft: () => <HeaderBack />,
        }}
      />
      {isLoading ? <LoadingIndicator /> : null}
      <FlashList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        estimatedItemSize={100}
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: { item: any }) => (
          <PreferencesItem preferenceItem={item} />
        )}
      />
    </>
  );
  //   return (
  // <FlashList
  // data={data}
  // keyExtractor={(item:any) => item.id.toString()}
  // renderItem={({ item }: { item: any }) => <PreferencesItem item={item} />}
  // />
  //   );
};

export default PreferenceList;
