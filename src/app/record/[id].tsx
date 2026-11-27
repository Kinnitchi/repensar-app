import Ionicons from "@expo/vector-icons/Ionicons";
import {router, useLocalSearchParams} from "expo-router";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {PrimaryButton} from "../../components/PrimaryButton";
import {SectionCard} from "../../components/SectionCard";
import {DISTORTIONS} from "../../features/distortions/distortions";
import {EMOTIONS} from "../../features/records/emotions";
import {MOCK_RECORD_DETAILS} from "../../features/records/mockRecordDetails";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

export default function RecordDetailScreen() {
  const {id} = useLocalSearchParams<{id: string}>();
  // Temporário: na etapa do banco, o registro vem do SQLite pelo id.
  const record = MOCK_RECORD_DETAILS.find((item) => item.id === id);

  if (!record) {
    return (
      <View style={styles.notFound}>
        <Ionicons name="document-text-outline" size={32} color={colors.textMuted} />
        <Text style={styles.notFoundTitle}>Não encontramos esse registro</Text>
        <Text style={styles.notFoundText}>Ele pode ter sido apagado. Seus registros ficam na tela inicial.</Text>
        <PrimaryButton title="Ver registros" onPress={() => router.navigate("/")} />
      </View>
    );
  }

  const emotionName = EMOTIONS.find((emotion) => emotion.id === record.emotionId)?.name ?? "Emoção";
  const distortions = DISTORTIONS.filter((distortion) => record.distortionIds.includes(distortion.id));
  const {intensityBefore: before, intensityAfter: after} = record;
  const relief = before !== null && after !== null ? before - after : null;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.top}>
        <View style={styles.row}>
          <Text style={styles.date}>{dateFormatter.format(new Date(record.occurredAt))}</Text>
          {record.status === "draft" ? (
            <View style={styles.draftBadge}>
              <Text style={styles.draftText}>Rascunho</Text>
            </View>
          ) : null}
        </View>

        {before !== null ? (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              {emotionName} {before}
              {after !== null ? ` → ${after}` : ""}
            </Text>
          </View>
        ) : null}

        {relief !== null && relief > 0 ? <Text style={styles.relief}>Ficou {relief} pontos mais leve depois de repensar.</Text> : null}
      </View>

      <SectionCard title="Situação">
        <Answer text={record.situation} />
      </SectionCard>

      <SectionCard title="Emoção">
        <Answer text={record.emotionId ? `${emotionName}${before !== null ? `, ${before} de 100` : ""}` : ""} />
      </SectionCard>

      <SectionCard title="Pensamento automático">
        {record.automaticThought ? (
          <View style={styles.quote}>
            <Text style={styles.quoteText}>“{record.automaticThought}”</Text>
          </View>
        ) : (
          <Answer text="" />
        )}
      </SectionCard>

      <SectionCard title="Distorções" description={distortions.length > 0 ? "Toque em uma para rever a explicação." : undefined}>
        {distortions.length > 0 ? (
          <View style={styles.tags}>
            {distortions.map((distortion) => (
              <Pressable
                key={distortion.id}
                accessibilityRole="button"
                accessibilityLabel={distortion.name}
                accessibilityHint="Abre a explicação desta distorção"
                onPress={() => router.push({pathname: "/distortion/[id]", params: {id: distortion.id}})}
                style={({pressed}) => [styles.tag, pressed && styles.pressed]}
              >
                <Text style={styles.tagText}>{distortion.name}</Text>
                <Ionicons name="chevron-forward" size={14} color={colors.accentDark} />
              </Pressable>
            ))}
          </View>
        ) : (
          <Answer text="" />
        )}
      </SectionCard>

      <SectionCard title="Evidências">
        <View style={styles.evidence}>
          <Text style={styles.subLabel}>A favor do pensamento</Text>
          <Answer text={record.evidenceFor} />
        </View>
        <View style={styles.evidence}>
          <Text style={styles.subLabel}>Contra o pensamento</Text>
          <Answer text={record.evidenceAgainst} />
        </View>
      </SectionCard>

      <SectionCard title="Pensamento alternativo">
        {record.alternativeThought ? (
          <View style={styles.alternative}>
            <Text style={styles.alternativeText}>{record.alternativeThought}</Text>
          </View>
        ) : (
          <Answer text="" />
        )}
      </SectionCard>

      <SectionCard title="Reavaliação">
        <Answer text={reevaluationText(emotionName, before, after)} />
      </SectionCard>
    </ScrollView>
  );
}

// Campo vazio aparece como "Ainda não preenchido", sem cara de erro: rascunho é normal.
function Answer({text}: {text: string}) {
  if (!text) {
    return <Text style={styles.empty}>Ainda não preenchido.</Text>;
  }
  return <Text style={styles.answer}>{text}</Text>;
}

function reevaluationText(emotionName: string, before: number | null, after: number | null) {
  if (after === null) {
    return "";
  }
  return before === null ? `${emotionName} ficou em ${after}.` : `${emotionName} foi de ${before} para ${after}.`;
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.md,
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  top: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  date: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 14,
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
  result: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  resultText: {
    color: colors.secondaryDark,
    fontSize: 18,
    fontWeight: "700",
  },
  relief: {
    color: colors.textMuted,
    fontSize: 14,
  },
  answer: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 23,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 15,
    fontStyle: "italic",
  },
  quote: {
    paddingVertical: spacing.xs,
    paddingLeft: spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  quoteText: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    fontStyle: "italic",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    minHeight: 36,
    paddingHorizontal: spacing.sm + spacing.xs,
    borderRadius: radius.full,
    backgroundColor: colors.accentSoft,
  },
  pressed: {
    opacity: 0.7,
  },
  tagText: {
    color: colors.accentDark,
    fontSize: 14,
    fontWeight: "600",
  },
  evidence: {
    gap: spacing.xs,
  },
  subLabel: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  alternative: {
    padding: spacing.sm + spacing.xs,
    borderRadius: radius.sm,
    backgroundColor: colors.secondarySoft,
  },
  alternativeText: {
    color: colors.secondaryDark,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: "600",
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    padding: spacing.lg,
  },
  notFoundTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  notFoundText: {
    marginBottom: spacing.sm,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
  },
});
