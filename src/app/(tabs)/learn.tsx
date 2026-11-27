import {ScrollView, StyleSheet, Text, View} from "react-native";
import {SectionCard} from "../../components/SectionCard";
import {DistortionCard} from "../../features/distortions/DistortionCard";
import {DISTORTIONS} from "../../features/distortions/distortions";
import {RECORD_STEPS} from "../../features/records/recordSteps";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

export default function LearnScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Entender para repensar</Text>
        <Text style={styles.subtitle}>
          Conheça os passos do registro e os atalhos que a mente pega quando a emoção está forte.
        </Text>
      </View>

      <SectionCard title="Como funciona um registro" description="Sete passos, no seu tempo. Dá para parar e continuar depois.">
        {RECORD_STEPS.map((step, index) => (
          <View
            key={step.title}
            style={styles.step}
            accessible
            accessibilityLabel={`Passo ${index + 1}: ${step.title}. ${step.description}`}
          >
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.stepBody}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepText}>{step.description}</Text>
            </View>
          </View>
        ))}
      </SectionCard>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle} accessibilityRole="header">
          Distorções cognitivas
        </Text>
        <Text style={styles.sectionText}>
          São jeitos automáticos de pensar que pintam os fatos pior do que eles são. Todo mundo tem. Reconhecer um já ajuda a olhar de outro jeito.
        </Text>
      </View>

      <View style={styles.list}>
        {DISTORTIONS.map((distortion) => (
          <DistortionCard key={distortion.id} distortion={distortion} />
        ))}
      </View>

      <Text style={styles.footer}>
        Conteúdo educativo baseado na terapia cognitivo-comportamental (TCC). Não substitui o acompanhamento de um profissional.
      </Text>
    </ScrollView>
  );
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
    lineHeight: 21,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm + spacing.xs,
  },
  stepNumber: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  stepNumberText: {
    color: colors.secondaryDark,
    fontSize: 14,
    fontWeight: "700",
  },
  stepBody: {
    flex: 1,
    gap: 2,
  },
  stepTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  stepText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionHeader: {
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  sectionText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    gap: spacing.sm + spacing.xs,
  },
  footer: {
    marginTop: spacing.sm,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
});
