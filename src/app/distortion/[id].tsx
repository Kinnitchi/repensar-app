import Ionicons from "@expo/vector-icons/Ionicons";
import {router, Stack, useLocalSearchParams} from "expo-router";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {PrimaryButton} from "../../components/PrimaryButton";
import {SectionCard} from "../../components/SectionCard";
import {DISTORTIONS} from "../../features/distortions/distortions";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

export default function DistortionDetailScreen() {
  const {id} = useLocalSearchParams<{id: string}>();
  const distortion = DISTORTIONS.find((item) => item.id === id);

  if (!distortion) {
    return (
      <View style={styles.notFound}>
        <Stack.Screen options={{title: "Distorção"}} />
        <Ionicons name="search-outline" size={32} color={colors.textMuted} />
        <Text style={styles.notFoundTitle}>Não encontramos essa distorção</Text>
        <Text style={styles.notFoundText}>O link pode estar desatualizado. A lista completa fica na aba Aprender.</Text>
        <PrimaryButton title="Ver distorções" onPress={() => router.navigate("/learn")} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* Troca o título "Distorção" do cabeçalho pelo nome desta distorção. */}
      <Stack.Screen options={{title: distortion.name}} />

      <Text style={styles.summary}>{distortion.summary}</Text>

      <SectionCard title="Como ela aparece" description="Um pensamento típico dessa distorção:">
        <View style={styles.quote}>
          <Text style={styles.quoteText}>“{distortion.example}”</Text>
        </View>
      </SectionCard>

      <SectionCard title="Pergunta para questionar" description="Quando notar esse pensamento, experimente se perguntar:">
        <View style={styles.question}>
          <Ionicons name="help-circle-outline" size={22} color={colors.secondaryDark} />
          <Text style={styles.questionText}>{distortion.question}</Text>
        </View>
      </SectionCard>

      <View style={styles.note}>
        <Ionicons name="heart-outline" size={18} color={colors.textMuted} />
        <Text style={styles.noteText}>Notar uma distorção não é motivo para se cobrar. Todo mundo pega esses atalhos, e perceber já é um passo.</Text>
      </View>

      <PrimaryButton title="Fazer um registro" icon="create-outline" onPress={() => router.push("/record/new")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.md,
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  summary: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 26,
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
  question: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
    padding: spacing.sm + spacing.xs,
    borderRadius: radius.sm,
    backgroundColor: colors.secondarySoft,
  },
  questionText: {
    flex: 1,
    color: colors.secondaryDark,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
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
    fontSize: 14,
    lineHeight: 20,
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
