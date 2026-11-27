import {Pressable, StyleSheet, Text} from "react-native";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type ChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
};

export function Chip({label, selected, onPress, accessibilityLabel}: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{selected}}
      accessibilityLabel={accessibilityLabel ?? label}
      hitSlop={4}
      onPress={onPress}
      style={({pressed}) => [styles.chip, selected && styles.selected, pressed && styles.pressed]}
    >
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minWidth: 48,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.sm + spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.surface,
  },
  selected: {
    borderColor: colors.primaryDark,
    backgroundColor: colors.primaryDark,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    color: colors.text,
    fontSize: 15,
  },
  labelSelected: {
    color: colors.onPrimary,
    fontWeight: "600",
  },
});
