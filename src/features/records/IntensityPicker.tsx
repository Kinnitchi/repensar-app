import {StyleSheet, Text, View} from "react-native";
import {Chip} from "../../components/Chip";
import {colors} from "../../theme/colors";
import {spacing} from "../../theme/spacing";

// De 10 em 10: preciso o bastante para comparar antes e depois, sem travar a pessoa num número exato.
const LEVELS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

type IntensityPickerProps = {
  label: string;
  value: number | null;
  onChange: (value: number) => void;
};

export function IntensityPicker({label, value, onChange}: IntensityPickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.levels}>
        {LEVELS.map((level) => (
          <Chip key={level} label={String(level)} selected={value === level} onPress={() => onChange(level)} accessibilityLabel={`${label} ${level}`} />
        ))}
      </View>
      <View style={styles.scale}>
        <Text style={styles.scaleText}>0 = nada</Text>
        <Text style={styles.scaleText}>100 = o máximo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  levels: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  scale: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scaleText: {
    color: colors.textMuted,
    fontSize: 13,
  },
});
