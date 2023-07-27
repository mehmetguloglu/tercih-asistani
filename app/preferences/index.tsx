import { Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import {
  AlertDialog,
  Button,
  Input,
  Stack,
  Text,
  XStack,
  YStack,
} from "tamagui";
import PreferencesItem from "../../components/preferences-components/PreferencesItem";
import {
  addPreferenceList,
  deletePreferenceList,
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
import { LoadingIndicator } from "../../components";
const { width, height } = Dimensions.get("window");

const PreferencesListItem = ({ item }) => {
  const { data, isLoading, mutate, error } = getPreferenceList();
  const { trigger: deleteTrigger } = deletePreferenceList();

  const _handleDeletePreferenceList = async () => {
    const result = await deleteTrigger(item.id);
    if (result.isSuccessfull) {
      Burnt.toast({
        title: "Silindi",
        preset: "done",
        duration: 2,
        haptic: "success",
      });
      mutate();
    } else {
      Burnt.toast({
        title: "Silme başarısız oldu",
        preset: "error",
        duration: 2,
        haptic: "error",
      });
    }
  };
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
        <AlertDialog native>
          <AlertDialog.Trigger asChild>
            <Button borderWidth={0} bg={"white"} size={"$3"}>
              <MaterialIcons name="delete" size={24} color="darkred" />
            </Button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay
              key="overlay"
              animation="quick"
              opacity={0.5}
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
            <AlertDialog.Content
              bordered
              elevate
              key="content"
              animation={[
                "quick",
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
              exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
              x={0}
              scale={1}
              opacity={1}
              y={0}
            >
              <YStack space>
                <AlertDialog.Description>
                  Tercih listesini silmek istediğinize emin misiniz?
                </AlertDialog.Description>

                <XStack space="$3" justifyContent="flex-end">
                  <AlertDialog.Cancel asChild>
                    <Button>İptal</Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action
                    onPress={() => _handleDeletePreferenceList()}
                    asChild
                  >
                    <Button>Sil</Button>
                  </AlertDialog.Action>
                </XStack>
              </YStack>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog>
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
      {isLoading ? <LoadingIndicator /> : null}
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
          mb={15}
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
