import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";
import {useState, type ComponentProps} from "react";
import {Pressable, ScrollView, StyleSheet, Switch, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {PrimaryButton} from "../components/PrimaryButton";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type IconName = ComponentProps<typeof Ionicons>["name"];

const FEATURES: {icon: IconName; title: string; text: string}[] = [
  {icon: "create-outline", title: "Registre no seu tempo", text: "Sete passos curtos. Dá para parar e continuar depois."},
  {icon: "bulb-outline", title: "Perceba seus padrões", text: "Veja quais emoções e distorções aparecem mais."},
  {icon: "lock-closed-outline", title: "Seus dados ficam com você", text: "Seus registros ficam só neste aparelho."},
];

export default function OnboardingScreen() {
  const [accepted, setAccepted] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={[styles.content, {paddingBottom: insets.bottom + spacing.xl}]}>
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Ionicons name="leaf-outline" size={36} color={colors.secondaryDark} />
        </View>
        <Text style={styles.title} accessibilityRole="header">
          Boas-vindas ao Repensar
        </Text>
        <Text style={styles.subtitle}>Um diário para registrar pensamentos difíceis e olhar para eles com mais equilíbrio, usando técnicas da TCC.</Text>
      </View>

      <View style={styles.features}>
        {FEATURES.map((feature) => (
          <View key={feature.title} style={styles.feature} accessible accessibilityLabel={`${feature.title}. ${feature.text}`}>
            <View style={styles.featureIcon}>
              <Ionicons name={feature.icon} size={22} color={colors.primaryDark} />
            </View>
            <View style={styles.featureBody}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureText}>{feature.text}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.notice}>
        <Ionicons name="information-circle-outline" size={20} color={colors.accentDark} />
        <Text style={styles.noticeText}>O Repensar não substitui acompanhamento psicológico ou psiquiátrico. Em crise, ligue 188 (CVV) ou 192 (SAMU).</Text>
      </View>

      {/* A linha inteira liga e desliga o consentimento: alvo de toque maior que só o Switch. */}
      <Pressable
        accessibilityRole="switch"
        accessibilityState={{checked: accepted}}
        accessibilityLabel="Concordo em guardar meus registros de saúde neste aparelho"
        onPress={() => setAccepted(!accepted)}
        style={[styles.consent, accepted && styles.consentAccepted]}
      >
        <Text style={styles.consentText}>Entendo que meus registros são dados de saúde e concordo em guardá-los neste aparelho.</Text>
        <Switch
          // Escondido do leitor de tela: quem anuncia o consentimento é a linha inteira, uma vez só.
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          value={accepted}
          onValueChange={setAccepted}
          trackColor={{false: colors.outline, true: colors.primary}}
          thumbColor={accepted ? colors.primaryDark : colors.onPrimary}
        />
      </Pressable>
      <Text style={styles.lgpd}>Pela LGPD, dados de saúde são dados sensíveis. Por isso pedimos o seu consentimento antes de começar.</Text>

      <PrimaryButton title="Começar" disabled={!accepted} onPress={() => router.dismissTo("/")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    padding: spacing.md,
  },
  hero: {
    alignItems: "center",
    gap: spacing.sm,
    paddingTop: spacing.md,
  },
  heroIcon: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xs,
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
  },
  features: {
    gap: spacing.md,
  },
  feature: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm + spacing.xs,
  },
  featureIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    backgroundColor: colors.surface,
  },
  featureBody: {
    flex: 1,
    gap: 2,
  },
  featureTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  featureText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  notice: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
    padding: spacing.sm + spacing.xs,
    borderRadius: radius.sm,
    backgroundColor: colors.accentSoft,
  },
  noticeText: {
    flex: 1,
    color: colors.accentDark,
    fontSize: 14,
    lineHeight: 20,
  },
  consent: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  consentAccepted: {
    borderColor: colors.primaryDark,
  },
  consentText: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    lineHeight: 21,
  },
  lgpd: {
    marginTop: -spacing.sm,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
