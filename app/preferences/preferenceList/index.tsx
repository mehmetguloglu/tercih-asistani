import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { getPreferenceListItems } from "../../../bussiness/actions/preferences";
import { FlashList } from "@shopify/flash-list";
import PreferencesItem from "../../../components/preferences-components/PreferencesItem";
import HeaderBack from "../../../components/buttons/HeaderBack";
import { LoadingIndicator } from "../../../components";
import { Text } from "tamagui";

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
        ListEmptyComponent={() => {
          return isLoading ? (
            <LoadingIndicator />
          ) : data?.length === 0 ? (
            <Text m={15}>Sonuç bulunamadı.</Text>
          ) : null;
        }}
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
};

export default PreferenceList;
