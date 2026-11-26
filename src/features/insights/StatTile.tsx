import {StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

type StatTileProps = {
  value: number;
  label: string;
};

export function StatTile({value, label}: StatTileProps) {
  return (
    <View style={styles.tile} accessible accessibilityLabel={`${value} ${label}`}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    gap: spacing.xs,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  value: {
    color: colors.primaryDark,
    fontSize: 28,
    fontWeight: "700",
  },
  label: {
    color: colors.textMuted,
    fontSize: 14,
  },
});
