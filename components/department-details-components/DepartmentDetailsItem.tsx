import { Pressable } from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import DetailsItemText from "../DetailsItemText";
import { Button, Spinner, Stack, Text, XStack, YStack } from "tamagui";
import Line from "../Line";
import Ribbon from "../Ribbon";
import AddPreferencesListItemModal from "../AddPreferencesListItemModal";
import {
  addPreferenceItem,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
import * as Burnt from "burnt";

const DepartmentDetailsItem = ({ item, departmentName }) => {
  const { data, isLoading, mutate } = getPreferenceList();
  const [selected, setSelected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");
  const { trigger, isMutating } = addPreferenceItem();

  const _handleAddPreferenceDirect = async () => {
    const result = await trigger({
      universityPreferenceId: item.id,
      preferenceListId: data[0].id,
    } as any);
    if (result.isSuccessfull) {
      Burnt.toast({
        title: "Eklendi",
        preset: "done",
        duration: 2,
        haptic: "success",
      });
    } else {
      Burnt.toast({
        title: result.message,
        preset: "error",
        duration: 2,
        haptic: "error",
      });
    }
  };

  return (
    <YStack f={1}>
      <XStack
        f={1}
        bg={"white"}
        mx={15}
        my={8}
        br={8}
        borderWidth={1}
        borderColor={
          !selected
            ? item.university.type == 2
              ? "#3268bf"
              : item.university.type == 1
              ? "#eda547"
              : "#cc434a"
            : "white"
        }
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
              <Text color={"black"} fontSize={14} fontWeight={"500"}>
                {item.university.name}
              </Text>
              <Text fontSize={12} fontWeight={"500"} color={"#9594A4"}>
                {item.oldDepartmentName
                  ? item.oldDepartmentName
                  : departmentName}
              </Text>
            </YStack>
            {/* <Button
              disabled={isMutating}
              aspectRatio={1}
              p={0}
              bw={0}
              m={0}
              mr={-10}
              br={30}
              bg="white"
              onPress={() => {
                data?.length != 1
                  ? setModalVisible(!modalVisible)
                  : _handleAddPreferenceDirect();
              }}
            >
              {isMutating ? (
                <Spinner />
              ) : (
                <Feather name="check-circle" size={24} color={"green"} />
              )}
            </Button> */}
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
        {/*  Add button to add preference*/}
        <Button
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
          disabled={isMutating}
          aspectRatio={1}
          p={0}
          bw={0}
          br={30}
          bg="white"
          onPress={() => {
            data?.length != 1
              ? setModalVisible(!modalVisible)
              : _handleAddPreferenceDirect();
          }}
        >
          {isMutating ? (
            <Spinner />
          ) : (
            // <Feather name="check-circle" size={24} color={"green"} />
            <MaterialIcons name="add-task" size={26} color="green" />
          )}
        </Button>
      </XStack>
      <AddPreferencesListItemModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        universityPreferenceId={item.id}
      />
    </YStack>
  );
};

export default DepartmentDetailsItem;
