import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";
import {Pressable, StyleSheet, Text} from "react-native";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

export function HelpButton() {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Ajuda: contatos do CVV e do SAMU"
      hitSlop={8}
      onPress={() => router.push("/help")}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name="help-buoy-outline" size={18} color={colors.primaryDark} />
      <Text style={styles.label}>Ajuda</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: "600",
  },
});
