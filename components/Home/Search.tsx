import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { primary } from "@/constants/Colors";
import { EvilIcons } from "@expo/vector-icons";

export default function Search() {
  const router = useRouter();

  return (
    <View style={styles.search}>
      <Pressable style={styles.innerSearch} >
        <EvilIcons name="search" size={24} color="black" />
        <Text>Search ...</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    width:'90%',
    paddingHorizontal:20,
    padding: 5,
    borderWidth: 2,
    borderColor: primary.white,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  innerSearch:{
    flexDirection:'row',
    gap:20,
    padding:5,
    alignItems:'center'
  },
});
