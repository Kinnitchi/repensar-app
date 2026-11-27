import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";
import type {Distortion} from "./distortions";

type DistortionCardProps = {
  distortion: Distortion;
};

export function DistortionCard({distortion}: DistortionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${distortion.name}. ${distortion.summary}`}
      accessibilityHint="Abre a explicação, um exemplo e uma pergunta para questionar"
      onPress={() => router.push({pathname: "/distortion/[id]", params: {id: distortion.id}})}
      style={({pressed}) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.body}>
        <Text style={styles.name}>{distortion.name}</Text>
        <Text style={styles.summary}>{distortion.summary}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  pressed: {
    opacity: 0.85,
  },
  body: {
    flex: 1,
    gap: spacing.xs,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  summary: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});
