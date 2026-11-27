import {StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

type StepProgressProps = {
  current: number; // começa em 0
  total: number;
};

export function StepProgress({current, total}: StepProgressProps) {
  const label = `Passo ${current + 1} de ${total}`;

  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel="Progresso do registro"
      accessibilityValue={{min: 1, max: total, now: current + 1, text: label}}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.segments}>
        {Array.from({length: total}, (_, index) => (
          <View key={index} style={[styles.segment, index <= current && styles.segmentDone]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  segments: {
    flexDirection: "row",
    gap: spacing.xs,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: radius.full,
    backgroundColor: colors.border,
  },
  segmentDone: {
    backgroundColor: colors.primaryDark,
  },
});
