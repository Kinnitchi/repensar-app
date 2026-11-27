import Ionicons from "@expo/vector-icons/Ionicons";
import type {ComponentProps} from "react";
import {Alert, Linking, ScrollView, StyleSheet, Text, View} from "react-native";
import {PrimaryButton} from "../components/PrimaryButton";
import {SecondaryButton} from "../components/SecondaryButton";
import {SectionCard} from "../components/SectionCard";
import {CRISIS_CONTACTS} from "../constants/crisis";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type IconName = ComponentProps<typeof Ionicons>["name"];
type ContactPhone = (typeof CRISIS_CONTACTS)[number]["phone"];

// O Record obriga a ter um ícone para cada telefone da lista: se entrar um contato novo, o TypeScript avisa.
const CONTACT_ICONS: Record<ContactPhone, IconName> = {
  "188": "heart-outline",
  "192": "medkit-outline",
};

const CVV_SITE = "https://cvv.org.br/";

const BREATHING_STEPS = ["Inspire devagar contando até 4.", "Solte o ar contando até 6.", "Repita algumas vezes, sem pressa."];

function callNumber(phone: string) {
  Linking.openURL(`tel:${phone}`).catch(() => {
    Alert.alert("Não foi possível abrir o discador", `Ligue para ${phone} pelo seu telefone.`);
  });
}

function openCvvSite() {
  Linking.openURL(CVV_SITE).catch(() => {
    Alert.alert("Não foi possível abrir o site", "Acesse cvv.org.br pelo navegador.");
  });
}

export default function HelpScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="help-buoy-outline" size={32} color={colors.primaryDark} />
        </View>
        <Text style={styles.title} accessibilityRole="header">
          Você não precisa enfrentar isso sem ajuda
        </Text>
        <Text style={styles.subtitle}>Se está difícil agora, fale com alguém. As ligações são gratuitas.</Text>
      </View>

      {CRISIS_CONTACTS.map((contact) => (
        <View key={contact.phone} style={styles.contact}>
          <View style={styles.contactRow}>
            <View style={styles.contactIcon}>
              <Ionicons name={CONTACT_ICONS[contact.phone]} size={22} color={colors.primaryDark} />
            </View>
            <View style={styles.contactBody}>
              <Text style={styles.contactName}>
                {contact.name} · {contact.phone}
              </Text>
              <Text style={styles.contactText}>{contact.description}</Text>
            </View>
          </View>
          <PrimaryButton title={`Ligar para o ${contact.name} (${contact.phone})`} icon="call" onPress={() => callNumber(contact.phone)} />
        </View>
      ))}

      <View style={styles.site}>
        <Text style={styles.siteText}>Prefere escrever? O CVV também atende por chat no site.</Text>
        <SecondaryButton title="Abrir o site do CVV" onPress={openCvvSite} />
      </View>

      <SectionCard title="Enquanto isso, respire" description="Um jeito simples de acalmar o corpo:">
        {BREATHING_STEPS.map((text, index) => (
          <View key={text} style={styles.breathStep}>
            <View style={styles.breathNumber}>
              <Text style={styles.breathNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.breathText}>{text}</Text>
          </View>
        ))}
      </SectionCard>

      <Text style={styles.footer}>
        Em risco imediato, ligue 192 ou vá ao pronto-socorro mais próximo. O Repensar não substitui acompanhamento psicológico ou psiquiátrico.
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
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
  },
  headerIcon: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    backgroundColor: colors.surface,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
  },
  contact: {
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm + spacing.xs,
  },
  contactIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    backgroundColor: colors.background,
  },
  contactBody: {
    flex: 1,
    gap: spacing.xs,
  },
  contactName: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
  },
  contactText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
  },
  site: {
    gap: spacing.sm,
  },
  siteText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  breathStep: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm + spacing.xs,
  },
  breathNumber: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  breathNumberText: {
    color: colors.secondaryDark,
    fontSize: 14,
    fontWeight: "700",
  },
  breathText: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    lineHeight: 21,
  },
  footer: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
});
