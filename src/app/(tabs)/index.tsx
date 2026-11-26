import {StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {router} from "expo-router";

export default function RecordsScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Repensar...</Text>
      <Text style={styles.subtitle}>Registro de pensamentos</Text>
      <StatusBar style="auto" /> */}

      <Button title="Abrir registro 1" onPress={() => router.push("/record/1")} />
      <Button title="Abrir registro 2" onPress={() => router.push("/record/2")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    marginTop: 8,
  },
});
