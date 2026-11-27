import {Children, type ReactNode} from "react";
import {StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

type SettingsGroupProps = {
  title: string;
  children: ReactNode;
};

export function SettingsGroup({title, children}: SettingsGroupProps) {
  // Children.toArray transforma as linhas numa lista, para colocar uma divisória entre elas.
  const rows = Children.toArray(children);

  return (
    <View style={styles.group}>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      <View style={styles.card}>
        {rows.map((row, index) => (
          <View key={index} style={index > 0 ? styles.divider : undefined}>
            {row}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    gap: spacing.sm,
  },
  title: {
    paddingHorizontal: spacing.xs,
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  card: {
    overflow: "hidden",
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  divider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
});
