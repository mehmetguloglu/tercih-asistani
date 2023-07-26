import { Dimensions, SafeAreaView } from "react-native";
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
        // onPress={() => {
        //   router.push("/preferences/preferenceList/" + item.id + "/" + item.name);
        //   // dispatch(setSelectedPreferencesListId(item.id));
        // }}
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
    </Link>
  );
};

const Preferences = () => {
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
      {showInput ? (
        <XStack mx={15} my={4}>
          <Input
            size={"$3.5"}
            f={1}
            mr={5}
            placeholder="Liste Adı Giriniz"
            value={preferenceInput}
            onChangeText={(e) => setPreferenceInput(e)}
          />
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
            <Text color={"white"}> Ekle</Text>
          </Button>
        </XStack>
      ) : null}
      <FlashList
        estimatedItemSize={100}
        data={data}
        renderItem={({ item }: { item: any }) => {
          return <PreferencesListItem item={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <SafeAreaView>
        <Button
          onPress={() => setShowInput(!showInput)}
          size={"$4"}
          mx={15}
          bg={"#1a73e8"}
        >
          <Text color={"white"} fontWeight={"500"}>
            Yeni Liste Ekle
          </Text>
        </Button>
      </SafeAreaView>
    </Stack>
  );
};

export default Preferences;
