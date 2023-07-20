// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Pressable,
//   SafeAreaView,
// } from "react-native";
// import React, { useState } from "react";
// import { setFilterPoints } from "../../../bussiness/reducers/universityDetailsReducer";
// import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
// import { useRouter } from "expo-router";
// import DismissKeyboardView from "../../../HOC/DismissKeyboardHOC";

// const UniversityDetailsFiltersPointScreen = () => {
//   const router = useRouter();
//   const { filterPoints } = useAppSelector(
//     (state) => state.universityDetailsReducer
//   );
//   const dispatch = useAppDispatch();
//   const [minPoint, setMinPoint] = useState(filterPoints[0]);
//   const [maxPoint, setMaxPoint] = useState(filterPoints[1]);

//   return (
//     <>
//       <DismissKeyboardView style={styles.container}>
//         <Text style={styles.headerText}>Taban Puan</Text>

//         <View style={styles.inputsView}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="En Düşük Puan Giriniz"
//             value={minPoint.toString()}
//             keyboardType="number-pad"
//             inputMode="numeric"
//             onChangeText={(e) =>
//               Number(e) <= 500 ? setMinPoint(Number(e)) : null
//             }
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder="En Yüksek Puan Giriniz"
//             value={maxPoint.toString()}
//             keyboardType="number-pad"
//             inputMode="numeric"
//             onChangeText={(e) =>
//               Number(e) <= 500 ? setMaxPoint(Number(e)) : null
//             }
//           />
//           {minPoint >= maxPoint ? (
//             <Text style={styles.pointWarningText}>
//               Lütfen üste düşük olan, alta yüksek olan puanı yazınız!
//             </Text>
//           ) : null}
//         </View>
//       </DismissKeyboardView>
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
//             return (
//               dispatch(setFilterPoints([0, 500])),
//               setMaxPoint(500),
//               setMinPoint(0)
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
//             backgroundColor: minPoint >= maxPoint ? "gray" : "#0066FF",
//             marginLeft: 5,
//             borderRadius: 8,
//             flex: 1,
//             alignItems: "center",
//             margin: 15,
//           }}
//           onPressIn={() => {
//             dispatch(
//               setFilterPoints([
//                 minPoint == 0 || minPoint > maxPoint ? 0 : Number(minPoint),
//                 maxPoint == 0 || minPoint > maxPoint ? 500 : Number(maxPoint),
//               ])
//             );
//             router.back();
//           }}
//           disabled={minPoint >= maxPoint ? true : false}
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

// export default UniversityDetailsFiltersPointScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   headerText: {
//     fontWeight: "600",
//     color: "#777777",
//     marginTop: 16,
//   },
//   inputsView: {},
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#D9D9D9",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//     marginVertical: 4,
//   },
//   pointWarningText: {
//     color: "red",
//     fontWeight: "600",
//     fontSize: 13,
//   },
// });
