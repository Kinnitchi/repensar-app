import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";
import {Pressable, StyleSheet, Text, View} from "react-native";
import type {RecordSummary} from "../features/records/mockRecords";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

type RecordCardProps = {
  record: RecordSummary;
};

export function RecordCard({record}: RecordCardProps) {
  const {emotion} = record;
  const isDraft = record.status === "draft";
  const date = dateFormatter.format(new Date(record.occurredAt));
  const result = emotion.after === null ? `${emotion.before}` : `${emotion.before} → ${emotion.after}`;
  const accessibilityLabel = isDraft
    ? `Rascunho de ${date}. ${record.situation}. ${emotion.name} em ${emotion.before}.`
    : `Registro de ${date}. ${record.situation}. ${emotion.name} foi de ${emotion.before} para ${emotion.after}.`;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={() => router.push({pathname: "/record/[id]", params: {id: record.id}})}
      style={({pressed}) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.row}>
        <Text style={styles.date}>{date}</Text>
        {isDraft && (
          <View style={styles.draftBadge}>
            <Text style={styles.draftText}>Rascunho</Text>
          </View>
        )}
      </View>

      <Text style={styles.situation} numberOfLines={2}>
        {record.situation}
      </Text>

      <View style={styles.row}>
        <View style={[styles.emotion, isDraft && styles.emotionDraft]}>
          <Text style={[styles.emotionText, isDraft && styles.emotionTextDraft]}>
            {emotion.name} {result}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  pressed: {
    opacity: 0.85,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: {
    color: colors.textMuted,
    fontSize: 13,
  },
  draftBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
    backgroundColor: colors.accentSoft,
  },
  draftText: {
    color: colors.accentDark,
    fontSize: 12,
    fontWeight: "600",
  },
  situation: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  emotion: {
    paddingHorizontal: 10,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  emotionDraft: {
    backgroundColor: colors.background,
  },
  emotionText: {
    color: colors.secondaryDark,
    fontSize: 14,
    fontWeight: "600",
  },
  emotionTextDraft: {
    color: colors.textMuted,
  },
});
