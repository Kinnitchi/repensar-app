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
  disabled?: boolean;
};

export function PrimaryButton({title, onPress, icon, disabled = false}: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{disabled}}
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed, disabled && styles.disabled]}
    >
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
  // Apagado, mas ainda legível: a pessoa entende que o botão existe e o que falta para liberar.
  disabled: {
    opacity: 0.45,
  },
  title: {
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});
