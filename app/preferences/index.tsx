import { Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Button, Input, Spinner, Stack, Text, XStack } from "tamagui";
import {
  addPreferenceList,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
import * as Burnt from "burnt";
import { Feather } from "@expo/vector-icons";
import { LoadingIndicator } from "../../components";
import PreferencesListItem from "../../components/preferences-components/PreferencesListItem";
import { Octicons } from "@expo/vector-icons";
import AdFullscreen from "../../components/advertising-components/AdFullscreen";
import { StatusBar } from "expo-status-bar";

const Preferences = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [preferenceInput, setPreferenceInput] = useState("");
  const { show, isLoaded, isShowing } = AdFullscreen();
  const { data, isLoading, mutate, error } = getPreferenceList();
  const { trigger, isMutating } = addPreferenceList();

  let filteredData = data;
  if (input != "") {
    filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  }
  const _handleAddPreferenceList = async () => {
    const result = await trigger({ name: preferenceInput } as any);
    if (result.isSuccessfull) {
      Burnt.toast({
        title: "Eklendi",
        preset: "done",
        duration: 2,
        haptic: "success",
      });
      mutate();
      setShowInput(false);
      setPreferenceInput("");
    } else {
      Burnt.toast({
        title: "Kayıt başarısız oldu",
        preset: "error",
        duration: 2,
        haptic: "error",
      });
    }
  };

  const _handleShowAddPreferenceList = () => {
    if (isLoaded === true && data?.length > 3) {
      show();
      setShowInput(!showInput);
    } else {
      setShowInput(!showInput);
    }
  };
  if (isShowing) {
    return <StatusBar hidden={true} />;
  }

  return (
    <Stack f={1}>
      <XStack
        mx={15}
        my={8}
        bg={"white"}
        px={8}
        borderRadius={16}
        ai={"center"}
      >
        <Feather
          style={{ padding: 8 }}
          name="search"
          size={24}
          color="#777777"
        />
        <Input
          f={1}
          bw={0}
          bg={"white"}
          p={0}
          value={input}
          onChangeText={(text) => {
            setInput(text);
          }}
          placeholder="Ara"
        />
        {input != "" ? (
          <Pressable onPress={() => setInput("")}>
            <Feather name="x" size={20} color="#777777" />
          </Pressable>
        ) : null}
      </XStack>
      {showInput ? (
        <XStack ai="center" mx={15} my={4}>
          <Input
            size={"$3.5"}
            f={1}
            mr={5}
            borderColor={"#1a73e8"}
            placeholder="Liste Adı Giriniz"
            value={preferenceInput}
            onChangeText={(e) => setPreferenceInput(e)}
          />
          {isMutating ? (
            <Spinner />
          ) : preferenceInput == "" ? (
            <Button
              onPress={() => setShowInput(!showInput)}
              bg={"#faa405"}
              m={0}
              size={"$3.5"}
              borderWidth={0}
            >
              <Text fontWeight={"600"} color={"white"}>
                Vazgeç
              </Text>
            </Button>
          ) : (
            <Button
              onPress={() =>
                data.find((item) => item.name == preferenceInput)
                  ? Burnt.toast({
                      title: "Bu isimde bir liste zaten var",
                      preset: "error",
                      duration: 2,
                      haptic: "error",
                    })
                  : preferenceInput != ""
                  ? _handleAddPreferenceList()
                  : setShowInput(!showInput)
              }
              m={0}
              size={"$3.5"}
              bg={"#1a73e8"}
              borderWidth={0}
            >
              <Text fontWeight={"600"} color={"white"}>
                Ekle
              </Text>
            </Button>
          )}
        </XStack>
      ) : null}
      <FlashList
        ListEmptyComponent={() => {
          return isLoading ? (
            <LoadingIndicator />
          ) : filteredData?.length === 0 ? (
            <Text m={15}>Sonuç bulunamadı.</Text>
          ) : null;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        estimatedItemSize={100}
        data={filteredData}
        renderItem={({ item }: { item: any }) => {
          return <PreferencesListItem item={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <SafeAreaView style={{ marginTop: 15 }}>
        <Button
          mb={15}
          onPress={() => _handleShowAddPreferenceList()}
          size={"$4"}
          mx={15}
          bg={"#1a73e8"}
        >
          <Text color={"white"} fontWeight={"600"}>
            Yeni Liste Oluştur
          </Text>
          {data?.length > 3 && isLoaded ? (
            <Octicons name="video" size={24} color="white" />
          ) : null}
        </Button>
      </SafeAreaView>
    </Stack>
  );
};

export default Preferences;
