import Ionicons from "@expo/vector-icons/Ionicons";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

type BarRowProps = {
  label: string;
  value: number;
  max: number;
  color: string;
  accessibilityLabel: string;
  hint?: string;
  onPress?: () => void;
};

export function BarRow({label, value, max, color, accessibilityLabel, hint, onPress}: BarRowProps) {
  // Evita divisão por zero e barra maior que o trilho.
  const percent = max > 0 ? Math.min(value / max, 1) * 100 : 0;

  const content = (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.right}>
          <Text style={styles.value}>{value}</Text>
          {onPress ? <Ionicons name="chevron-forward" size={16} color={colors.textMuted} /> : null}
        </View>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, {width: `${percent}%`, backgroundColor: color}]} />
      </View>
    </>
  );

  if (!onPress) {
    return (
      <View style={styles.container} accessible accessibilityLabel={accessibilityLabel}>
        {content}
      </View>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={hint}
      onPress={onPress}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.7,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  label: {
    color: colors.text,
    fontSize: 15,
  },
  value: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: "600",
  },
  track: {
    height: 10,
    overflow: "hidden",
    borderRadius: radius.full,
    backgroundColor: colors.border,
  },
  fill: {
    height: "100%",
    borderRadius: radius.full,
  },
});
