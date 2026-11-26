import {Button, Text, View} from "react-native";
import {router} from "expo-router";

export default function SettingsScreen() {
  return (
    <View>
      <Button title="Ver boas-vindas" onPress={() => router.push("/onboarding")} />
    </View>
  );
}
