import Constants from "expo-constants";
import {router} from "expo-router";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {SettingsGroup} from "../../features/settings/SettingsGroup";
import {SettingsRow} from "../../features/settings/SettingsRow";
import {colors} from "../../theme/colors";
import {spacing} from "../../theme/spacing";

// Versão lida do app.json, para não precisar atualizar o número em dois lugares.
const appVersion = Constants.expoConfig?.version ?? "dev";

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <SettingsGroup title="Privacidade e segurança">
        <SettingsRow icon="phone-portrait-outline" label="Seus registros ficam neste aparelho" description="Nada é enviado para a internet." />
        <SettingsRow icon="finger-print-outline" label="Bloquear com digital ou rosto" description="Pede a biometria ao abrir o app." soon />
      </SettingsGroup>

      <SettingsGroup title="Seus dados">
        <SettingsRow icon="download-outline" label="Exportar meus registros" description="Gera um arquivo com tudo o que você escreveu." soon />
        <SettingsRow icon="trash-outline" label="Apagar todos os dados" description="Remove seus registros deste aparelho de vez." soon />
      </SettingsGroup>

      <SettingsGroup title="Apoio">
        <SettingsRow icon="help-buoy-outline" label="Ajuda e contatos de crise" description="CVV 188 e SAMU 192." onPress={() => router.push("/help")} />
        <SettingsRow
          icon="leaf-outline"
          label="Ver boas-vindas"
          description="Rever a apresentação e o consentimento."
          onPress={() => router.push("/onboarding")}
        />
      </SettingsGroup>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Repensar · versão {appVersion}</Text>
        <Text style={styles.footerText}>O Repensar não substitui acompanhamento psicológico ou psiquiátrico.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  footer: {
    alignItems: "center",
    gap: spacing.xs,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
});
