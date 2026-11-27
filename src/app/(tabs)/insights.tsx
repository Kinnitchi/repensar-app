import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {PrimaryButton} from "../../components/PrimaryButton";
import {SectionCard} from "../../components/SectionCard";
import {BarRow} from "../../features/insights/BarRow";
import {MIN_COMPLETED_FOR_INSIGHTS, MOCK_INSIGHTS, type InsightsSummary} from "../../features/insights/mockInsights";
import {StatTile} from "../../features/insights/StatTile";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

export default function InsightsScreen() {
  // Para ver o estado vazio, troque MOCK_INSIGHTS por EMPTY_INSIGHTS (aqui e no import).
  const insights: InsightsSummary = MOCK_INSIGHTS;
  const hasEnoughData = insights.completedRecords >= MIN_COMPLETED_FOR_INSIGHTS;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Seus padrões</Text>
        <Text style={styles.subtitle}>{insights.periodLabel}</Text>
      </View>

      {hasEnoughData ? <InsightsContent insights={insights} /> : <NotEnoughData completed={insights.completedRecords} />}

      <PrivacyNote />
    </ScrollView>
  );
}

function InsightsContent({insights}: {insights: InsightsSummary}) {
  const relief = insights.averageBefore - insights.averageAfter;
  // Math.max(0, ...) evita -Infinity quando a lista está vazia.
  const maxEmotion = Math.max(0, ...insights.topEmotions.map((item) => item.count));
  const maxDistortion = Math.max(0, ...insights.topDistortions.map((item) => item.count));

  return (
    <>
      <View style={styles.tiles}>
        <StatTile value={insights.totalRecords} label="registros" />
        <StatTile value={insights.completedRecords} label="concluídos" />
      </View>

      <SectionCard
        title="Antes e depois de reavaliar"
        description={`Intensidade média da emoção, de 0 a 100, nos ${insights.completedRecords} registros concluídos.`}
      >
        <BarRow
          label="Antes"
          value={insights.averageBefore}
          max={100}
          color={colors.accent}
          accessibilityLabel={`Antes de reavaliar: ${insights.averageBefore} de 100`}
        />
        <BarRow
          label="Depois"
          value={insights.averageAfter}
          max={100}
          color={colors.secondary}
          accessibilityLabel={`Depois de reavaliar: ${insights.averageAfter} de 100`}
        />
        <View style={styles.highlight}>
          <Text style={styles.highlightText}>
            {relief > 0 ? `Em média, a emoção ficou ${relief} pontos mais leve.` : "Nem sempre a emoção diminui, e tudo bem. Registrar já é um passo."}
          </Text>
        </View>
      </SectionCard>

      <SectionCard title="Emoções mais frequentes" description="Quantas vezes cada uma apareceu nos registros.">
        {insights.topEmotions.map((emotion) => (
          <BarRow
            key={emotion.id}
            label={emotion.label}
            value={emotion.count}
            max={maxEmotion}
            color={colors.primary}
            accessibilityLabel={`${emotion.label}: ${countLabel(emotion.count)}`}
          />
        ))}
      </SectionCard>

      <SectionCard title="Distorções mais comuns" description="Toque em uma para entender como ela funciona.">
        {insights.topDistortions.map((distortion) => (
          <BarRow
            key={distortion.id}
            label={distortion.label}
            value={distortion.count}
            max={maxDistortion}
            color={colors.accent}
            accessibilityLabel={`${distortion.label}: ${countLabel(distortion.count)}`}
            hint="Abre a explicação desta distorção"
            onPress={() => router.push({pathname: "/distortion/[id]", params: {id: distortion.id}})}
          />
        ))}
      </SectionCard>
    </>
  );
}

function NotEnoughData({completed}: {completed: number}) {
  const missing = MIN_COMPLETED_FOR_INSIGHTS - completed;

  return (
    <View style={styles.empty}>
      <View style={styles.emptyIcon}>
        <Ionicons name="bar-chart-outline" size={32} color={colors.secondaryDark} />
      </View>
      <Text style={styles.emptyTitle}>Seus padrões aparecem aqui</Text>
      <Text style={styles.emptyText}>
        Com {MIN_COMPLETED_FOR_INSIGHTS} registros concluídos, o Repensar mostra quais emoções e distorções aparecem mais.{" "}
        {missing === 1 ? "Falta 1" : `Faltam ${missing}`}, sem pressa.
      </Text>
      <View style={styles.emptyAction}>
        <PrimaryButton title="Novo registro" icon="add" onPress={() => router.push("/record/new")} />
      </View>
    </View>
  );
}

function PrivacyNote() {
  return (
    <View style={styles.note}>
      <Ionicons name="lock-closed-outline" size={18} color={colors.textMuted} />
      <Text style={styles.noteText}>
        Esses números mostram padrões, não diagnósticos. Se fizer sentido, leve para a conversa com quem acompanha você. Seus registros ficam só neste aparelho.
      </Text>
    </View>
  );
}

function countLabel(count: number) {
  return count === 1 ? "apareceu em 1 registro" : `apareceu em ${count} registros`;
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.md,
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  header: {
    gap: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
  },
  tiles: {
    flexDirection: "row",
    gap: spacing.md,
  },
  highlight: {
    padding: spacing.sm + spacing.xs,
    borderRadius: radius.sm,
    backgroundColor: colors.secondarySoft,
  },
  highlightText: {
    color: colors.secondaryDark,
    fontSize: 15,
    fontWeight: "600",
  },
  empty: {
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
  },
  emptyAction: {
    marginTop: spacing.sm,
  },
  note: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  noteText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
