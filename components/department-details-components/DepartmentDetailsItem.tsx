import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DetailsItemText from "../DetailsItemText";
import { Text, XStack, YStack } from "tamagui";
import Line from "../Line";
import Ribbon from "../Ribbon";

const DepartmentDetailsItem = ({ item, departmentName }) => {
  const [selected, setSelected] = useState(true);
  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");
  return (
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
          <YStack ml={9}>
            <Text color={"black"} fontSize={14} fontWeight={"500"}>
              {item.university.name}
            </Text>
            <Text fontSize={12} fontWeight={"500"} color={"#9594A4"}>
              {item.oldDepartmentName ? item.oldDepartmentName : departmentName}
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
                    : "Dil"
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
    </XStack>
  );
};

export default DepartmentDetailsItem;
