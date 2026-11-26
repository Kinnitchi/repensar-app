import {router} from "expo-router";
import {Button, StyleSheet, View} from "react-native";

export default function RecordsScreen() {
  return (
    <View style={styles.container}>
      <Button title="Novo registro" onPress={() => router.push("/record/new")} />

      {/* Temporário: some na parte C, quando os cartões de registro chegarem */}
      <Button title="Abrir registro 1" onPress={() => router.push("/record/1")} />
      <Button title="Abrir registro 2" onPress={() => router.push("/record/2")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
