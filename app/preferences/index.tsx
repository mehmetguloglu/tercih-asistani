import { Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Button, Input, Stack, Text, XStack } from "tamagui";
import PreferencesItem from "../../components/preferences-components/PreferencesItem";
import {
  addPreferenceList,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
import { Link, useRouter } from "expo-router";
import { useAppDispatch } from "../../bussiness/hooks";
import { setSelectedPreferencesListId } from "../../bussiness/reducers/preferencesReducer";
import * as Burnt from "burnt";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchInput } from "../../components/inputs";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const PreferencesListItem = ({ item }) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  return (
    <Link
      href={{
        pathname: "/preferences/preferenceList/",
        params: { id: item.id, name: item.name },
      }}
      asChild
    >
      <Button
        size={"$5"}
        bw={1}
        mx={15}
        my={4}
        p={0}
        bg={"white"}
        // onPress={() => {
        //   router.push("/preferences/preferenceList/" + item.id + "/" + item.name);
        //   // dispatch(setSelectedPreferencesListId(item.id));
        // }}
        shadowColor="#000"
        shadowOffset={{
          width: 0,
          height: 2,
        }}
        shadowOpacity={0.27}
        shadowRadius={4.65}
        elevation={6}
      >
        <Text mx={15} f={1} color={"black"} fontSize={16} fontWeight={"500"}>
          {item.name}
        </Text>
        <Button borderWidth={0} bg={"white"} size={"$3"}>
          <MaterialIcons name="delete" size={24} color="darkred" />
        </Button>
      </Button>
    </Link>
  );
};

const Preferences = () => {
  const [input, setInput] = useState("");
  const { data, isLoading, mutate, error } = getPreferenceList();
  const { trigger } = addPreferenceList();
  const [showInput, setShowInput] = useState(false);
  const [preferenceInput, setPreferenceInput] = useState("");

  useMemo(() => {
    const checkFirstData = async () => {
      if (data && data.length === 0 && !isLoading && !error) {
        await trigger({ name: "Tercih Listem" } as any);
        mutate();
      }
    };
    checkFirstData();
  }, [data, isLoading, error]);
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
          {preferenceInput == "" ? (
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
          onPress={() => setShowInput(!showInput)}
          size={"$4"}
          mx={15}
          bg={"#1a73e8"}
        >
          <Text color={"white"} fontWeight={"600"}>
            Yeni Liste Oluştur
          </Text>
        </Button>
      </SafeAreaView>
    </Stack>
  );
};

export default Preferences;
