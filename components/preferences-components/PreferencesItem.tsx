import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { AlertDialog, Button, Spinner, Text, XStack, YStack } from "tamagui";
import DetailsItemText from "../DetailsItemText";
import Line from "../Line";
import Ribbon from "../Ribbon";
import { MaterialIcons } from "@expo/vector-icons";
import * as Burnt from "burnt";
import {
  deletePreferenceItem,
  getPreferenceListItems,
} from "../../bussiness/actions/preferences";

const PreferencesItem = ({ preferenceItem }) => {
  const { universityPreference: item } = preferenceItem;
  const [selected, setSelected] = useState(true);
  const { trigger: deleteTrigger, isMutating } = deletePreferenceItem();
  const { mutate } = getPreferenceListItems(preferenceItem.preferenceListId);

  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");

  const _handleDeletePreferenceList = async () => {
    const result = await deleteTrigger(preferenceItem.id);
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
    <XStack
      bg={"white"}
      mx={15}
      my={8}
      borderRadius={8}
      borderWidth={1}
      f={1}
      borderColor={!selected ? "#0066FF" : "white"}
    >
      <Pressable
        style={{ flex: 1 }}
        disabled={isMutating}
        onPress={() => {
          setSelected(!selected);
        }}
      >
        <XStack px={15} py={12} ai="center">
          {selected ? (
            <Ionicons name="add" size={20} color="#0066FF" />
          ) : (
            <AntDesign name="minus" size={20} color="#0066FF" />
          )}
          <YStack ml={9} f={1}>
            <Text fontSize={14} fontWeight={"500"}>
              {item.university.name}
            </Text>
            <Text fontSize={12} color={"#9594A4"} fontWeight={"500"}>
              {item.oldDepartmentName
                ? item.oldDepartmentName
                : item.department.name}
            </Text>
          </YStack>
        </XStack>
        <Line ml={15} mr={3} />

        <XStack ai="center" my={12} px={15}>
          <DetailsItemText info={basePoint} detailsName={"Taban Puan"} />
          <DetailsItemText
            info={item.yksSuccessRanking}
            detailsName={"Başarı Sıralaması"}
          />
        </XStack>

        {!selected ? (
          <>
            <XStack ai="center" my={12} px={15}>
              <DetailsItemText
                info={
                  item.pointType == "SAY"
                    ? "Sayısal"
                    : item.pointType == "EA"
                    ? "Eşit Ağırlık"
                    : item.pointType == "SÖZ"
                    ? "Sözel"
                    : item.pointType == "DİL"
                    ? "Dil"
                    : "TYT"
                }
                detailsName={"Puan Türü"}
              />
              <DetailsItemText
                info={item.educationTime}
                detailsName={"Öğrenim Süresi"}
              />
            </XStack>

            <XStack ai="center" my={12} px={15}>
              <DetailsItemText
                info={item.generalQuota}
                detailsName={"Kontenjan"}
              />
              <DetailsItemText
                info={item.faculty.name}
                detailsName={"Fakülte Adı"}
              />
            </XStack>
          </>
        ) : null}
      </Pressable>
      <Ribbon
        bg={
          item.university.type == 2
            ? "#3268bf"
            : item.university.type == 1
            ? "#eda547"
            : "#cc434a"
        }
        bgb={
          item.university.type == 2
            ? "#174082"
            : item.university.type == 1
            ? "#b37019"
            : "#96171d"
        }
        text={
          item.university.type == 2
            ? "Devlet"
            : item.university.type == 1
            ? "Vakıf"
            : "Yurtdışı"
        }
      />
      <AlertDialog native>
        <AlertDialog.Trigger asChild>
          {/* <Button
                disabled={isMutating}
                borderWidth={0}
                bg={"white"}
                size={"$3"}
              >
                {isMutating ? (
                  <Spinner />
                ) : (
                  <MaterialIcons name="delete" size={24} color="darkred" />
                )}
              </Button> */}
          <Button
            disabled={isMutating}
            shadowColor="#000"
            shadowOffset={{
              width: 0,
              height: 12,
            }}
            shadowOpacity={0.58}
            shadowRadius={16.0}
            elevation={24}
            zIndex={1}
            right={-10}
            bottom={10}
            position="absolute"
            aspectRatio={1}
            p={0}
            bw={0}
            br={30}
            bg="white"
          >
            {isMutating ? (
              <Spinner />
            ) : (
              // <Feather name="check-circle" size={24} color={"green"} />
              <MaterialIcons name="delete" size={24} color="darkred" />
            )}
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
                Tercihinizi silmek istediğinize emin misiniz?
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
    </XStack>
  );
};

export default PreferencesItem;
