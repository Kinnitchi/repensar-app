import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";

export default function RecordsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repensar...</Text>
      <Text style={styles.subtitle}>Registro de pensamentos</Text>
      <StatusBar style="auto" />
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
