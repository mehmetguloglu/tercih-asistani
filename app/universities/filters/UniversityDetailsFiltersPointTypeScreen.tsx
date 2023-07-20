// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import { setFilterPointType } from "../../../bussiness/reducers/universityDetailsReducer";
// import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
// import { useRouter } from "expo-router";

// const UniversityDetailsFiltersPointTypeScreen = () => {
//   const dispatch = useAppDispatch();
//   const { filterPointType } = useAppSelector(
//     (state) => state.universityDetailsReducer
//   );
//   const router = useRouter();
//   const [selectedPointType, setSelectedPointType] = useState([
//     filterPointType[0],
//     filterPointType[1],
//     filterPointType[2],
//     filterPointType[3],
//   ]);

//   return (
//     <>
//       <ScrollView style={styles.container}>
//         <Text
//           style={{
//             fontWeight: "600",
//             color: "#777777",
//             marginTop: 16,
//             marginBottom: 4,
//             fontSize: 14,
//           }}
//         >
//           Puan Türü
//         </Text>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setSelectedPointType([
//               selectedPointType[0] == "" ? "say" : "",
//               selectedPointType[1],
//               selectedPointType[2],
//               selectedPointType[3],
//             ]);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor:
//                   selectedPointType[0] === "say" ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor:
//                     selectedPointType[0] === "say" ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Sayısal</Text>
//         </Pressable>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setSelectedPointType([
//               selectedPointType[0],
//               selectedPointType[1] == "" ? "ea" : "",
//               selectedPointType[2],
//               selectedPointType[3],
//             ]);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor: selectedPointType[1] ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor: selectedPointType[1] ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Eşit Ağırlık</Text>
//         </Pressable>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setSelectedPointType([
//               selectedPointType[0],
//               selectedPointType[1],
//               selectedPointType[2] == "" ? "soz" : "",
//               selectedPointType[3],
//             ]);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor: selectedPointType[2] ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor: selectedPointType[2] ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Sözel</Text>
//         </Pressable>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setSelectedPointType([
//               selectedPointType[0],
//               selectedPointType[1],
//               selectedPointType[2],
//               selectedPointType[3] == "" ? "dil" : "",
//             ]);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor: selectedPointType[3] ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor: selectedPointType[3] ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Dil</Text>
//         </Pressable>
//       </ScrollView>

//       <SafeAreaView
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-end",
//           backgroundColor: "white",
//         }}
//       >
//         <Pressable
//           style={{
//             paddingVertical: 10,
//             backgroundColor: "#F3F3F3",
//             marginRight: 5,
//             borderRadius: 8,
//             flex: 1,
//             alignItems: "center",
//             margin: 15,
//           }}
//           onPressIn={() => {
//             dispatch(setFilterPointType([]));
//             setSelectedPointType(["", "", "", ""]);
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 14,
//               color: "#BD1E07",
//               fontWeight: "500",
//             }}
//           >
//             Temizle
//           </Text>
//         </Pressable>
//         <Pressable
//           style={{
//             paddingVertical: 10,
//             backgroundColor: "#0066FF",
//             marginLeft: 5,
//             borderRadius: 8,
//             flex: 1,
//             margin: 15,
//             alignItems: "center",
//           }}
//           onPressIn={() => {
//             dispatch(
//               setFilterPointType([
//                 selectedPointType[0] == "say" ? "say" : "",
//                 selectedPointType[1] == "ea" ? "ea" : "",
//                 selectedPointType[2] == "soz" ? "soz" : "",
//                 selectedPointType[3] == "dil" ? "dil" : "",
//               ])
//             );
//             router.back();
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 14,
//               color: "white",
//               fontWeight: "500",
//             }}
//           >
//             Uygula
//           </Text>
//         </Pressable>
//       </SafeAreaView>
//     </>
//   );
// };

// export default UniversityDetailsFiltersPointTypeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//   },
//   buttons: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 8,
//   },
//   borderView: {
//     borderWidth: 1,
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     margin: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   sectionView: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
// });
