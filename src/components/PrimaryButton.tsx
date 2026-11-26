import Ionicons from "@expo/vector-icons/Ionicons";
import type {ComponentProps} from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type IconName = ComponentProps<typeof Ionicons>["name"];

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  icon?: IconName;
};

export function PrimaryButton({title, onPress, icon}: PrimaryButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      {icon && <Ionicons name={icon} size={20} color={colors.onPrimary} />}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    backgroundColor: colors.primaryDark,
  },
  pressed: {
    opacity: 0.85,
    transform: [{scale: 0.98}],
  },
  title: {
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});
