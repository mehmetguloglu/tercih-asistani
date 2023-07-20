import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { XStack, Text } from "tamagui";
import Line from "../Line";
import DetailsItemText from "../DetailsItemText";
import Ribbon from "../Ribbon";

const UniversityDetailsItem = ({ item }) => {
  const [selected, setSelected] = useState(true);
  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");

  let pointType = "";
  let typeColor = "white";
  switch (item.pointType) {
    case "EA":
      pointType = "Eşit Ağırlık";
      typeColor = "#3268bf";
      break;
    case "SAY":
      pointType = "Sayısal";
      typeColor = "green";
      break;
    case "DİL":
      pointType = "Dil";
      typeColor = "#eda547";
      break;
    case "SÖZ":
      pointType = "Sözel";
      typeColor = "#cc434a";
      break;
  }

  return (
    <XStack
      bg={"white"}
      mx={15}
      my={8}
      borderRadius={8}
      borderWidth={1}
      f={1}
      borderColor={!selected ? typeColor : "white"}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          setSelected(!selected);
        }}
      >
        <XStack ai="center" px={15} py={12}>
          {selected ? (
            <Ionicons name="add" size={20} color="#0066FF" />
          ) : (
            <AntDesign name="minus" size={20} color="#0066FF" />
          )}
          <Text color={"black"} ml={9} fontSize={14} fontWeight={"500"}>
            {item.oldDepartmentName
              ? item.oldDepartmentName
              : item.department.name}
          </Text>
        </XStack>

        <Line ml={15} mr={3} />

        <XStack ai="center" px={15} my={12}>
          <DetailsItemText info={basePoint} detailsName={"Taban Puan"} />
          <DetailsItemText
            info={item.yksSuccessRanking}
            detailsName={"Başarı Sıralaması"}
          />
        </XStack>

        {!selected ? (
          <>
            <XStack ai="center" px={15} my={12}>
              <DetailsItemText info={pointType} detailsName={"Puan Türü"} />
              <DetailsItemText
                info={item.educationTime}
                detailsName={"Öğrenim Süresi"}
              />
            </XStack>

            <XStack ai="center" px={15} my={12}>
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
          item.pointType == "EA"
            ? "#3268bf"
            : item.pointType == "DİL"
            ? "#eda547"
            : item.pointType == "SÖZ"
            ? "#cc434a"
            : "green"
        }
        bgb={
          item.pointType == "EA"
            ? "#174082"
            : item.pointType == "DİL"
            ? "#b37019"
            : item.pointType == "SÖZ"
            ? "#96171d"
            : "darkgreen"
        }
        text={
          item.pointType == "EA"
            ? "Eşit Ağırlık"
            : item.pointType == "DİL"
            ? "Dil"
            : item.pointType == "SÖZ"
            ? "Sözel"
            : "Sayısal"
        }
      />
    </XStack>
  );
};

export default UniversityDetailsItem;
