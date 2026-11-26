import {router} from "expo-router";
import {Button, Text, View} from "react-native";

export default function LearnScreen() {
  return (
    <View>
      <Text>Aprender</Text>
      <Button title="Catastrofização" onPress={() => router.push({pathname: "/distortion/[id]", params: {id: "catastrophizing"}})} />
      <Button title="Leitura mental" onPress={() => router.push({pathname: "/distortion/[id]", params: {id: "mind-reading"}})} />
    </View>
  );
}
