// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedUniversityType } from "../../../bussiness/reducers/departmentDetailsReducer";
// import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
// import { useRouter } from "expo-router";

// const ModalUniversityTypeScreen = () => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const { selectedUniversityType } = useAppSelector(
//     (state) => state.departmentDetailsReducer
//   );
//   const [governmentChecked, setGovernmentChecked] = useState(
//     selectedUniversityType[0]
//   );
//   const [foundationChecked, setFoundationChecked] = useState(
//     selectedUniversityType[1]
//   );
//   const [abroadChecked, setAbroadChecked] = useState(selectedUniversityType[2]);
//   return (
//     <>
//       <View style={styles.container}>
//         <Text
//           style={{
//             fontWeight: "600",
//             color: "#777777",
//             marginTop: 16,
//             marginBottom: 4,
//             fontSize: 14,
//           }}
//         >
//           Üniversite Türü
//         </Text>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setGovernmentChecked(!governmentChecked);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor: governmentChecked ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor: governmentChecked ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Devlet Üniversiteleri</Text>
//         </Pressable>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setFoundationChecked(!foundationChecked);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor: foundationChecked ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor: foundationChecked ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Vakıf Üniversiteleri</Text>
//         </Pressable>
//         <Pressable
//           style={styles.buttons}
//           onPressIn={() => {
//             setAbroadChecked(!abroadChecked);
//           }}
//         >
//           <View
//             style={[
//               {
//                 borderColor: abroadChecked ? "#0066ff" : "#D9D9D9",
//               },
//               styles.borderView,
//             ]}
//           >
//             <View
//               style={[
//                 {
//                   backgroundColor: abroadChecked ? "#0066ff" : "white",
//                 },
//                 styles.sectionView,
//               ]}
//             />
//           </View>
//           <Text>Yurtdışı Üniversiteleri</Text>
//         </Pressable>
//       </View>
//       <SafeAreaView
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
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
//           onPress={() => {
//             return (
//               dispatch(setSelectedUniversityType([false, false, false])),
//               setAbroadChecked(false),
//               setFoundationChecked(false),
//               setGovernmentChecked(false)
//             );
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
//           onPress={() => {
//             return (
//               dispatch(
//                 setSelectedUniversityType([
//                   governmentChecked,
//                   foundationChecked,
//                   abroadChecked,
//                 ])
//               ),
//               router.back()
//             );
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

// export default ModalUniversityTypeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 15,
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
