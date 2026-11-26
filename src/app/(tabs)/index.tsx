import {Button, StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {router} from "expo-router";

export default function RecordsScreen() {
  return (
    <View style={styles.container}>
      <Button title="Novo registro" onPress={() => router.push("/record/new")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
