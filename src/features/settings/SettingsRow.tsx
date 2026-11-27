import Ionicons from "@expo/vector-icons/Ionicons";
import type {ComponentProps} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

type IconName = ComponentProps<typeof Ionicons>["name"];

type SettingsRowProps = {
  icon: IconName;
  label: string;
  description?: string;
  onPress?: () => void;
  // Recurso que depende do banco ou da segurança (etapas seguintes): aparece, mas não reage ao toque.
  soon?: boolean;
};

export function SettingsRow({icon, label, description, onPress, soon = false}: SettingsRowProps) {
  const content = (
    <>
      <View style={styles.icon}>
        <Ionicons name={icon} size={20} color={soon ? colors.textMuted : colors.primaryDark} />
      </View>
      <View style={styles.body}>
        <Text style={[styles.label, soon && styles.labelSoon]}>{label}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
      {soon ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Em breve</Text>
        </View>
      ) : null}
      {!soon && onPress ? <Ionicons name="chevron-forward" size={18} color={colors.textMuted} /> : null}
    </>
  );

  if (soon || !onPress) {
    const spoken = [label, description, soon ? "Em breve" : undefined].filter(Boolean).join(". ");
    return (
      <View style={styles.row} accessible accessibilityLabel={spoken}>
        {content}
      </View>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={description}
      onPress={onPress}
      style={({pressed}) => [styles.row, pressed && styles.pressed]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm + spacing.xs,
    minHeight: 56,
    paddingVertical: spacing.sm + spacing.xs,
    paddingHorizontal: spacing.md,
  },
  pressed: {
    backgroundColor: colors.background,
  },
  icon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    gap: 2,
  },
  label: {
    color: colors.text,
    fontSize: 16,
  },
  labelSoon: {
    color: colors.textMuted,
  },
  description: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
    backgroundColor: colors.background,
  },
  badgeText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
});
