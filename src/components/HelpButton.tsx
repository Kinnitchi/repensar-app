import {router} from "expo-router";
import {Button} from "react-native";

export function HelpButton() {
  return <Button title="Ajuda" onPress={() => router.push("/help")} />;
}
