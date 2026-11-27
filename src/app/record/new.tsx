import {router} from "expo-router";
import {useState} from "react";
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Chip} from "../../components/Chip";
import {PrimaryButton} from "../../components/PrimaryButton";
import {SecondaryButton} from "../../components/SecondaryButton";
import {TextField} from "../../components/TextField";
import {DISTORTIONS} from "../../features/distortions/distortions";
import {EMOTIONS} from "../../features/records/emotions";
import {IntensityPicker} from "../../features/records/IntensityPicker";
import {EMPTY_DRAFT, type RecordDraft} from "../../features/records/recordDraft";
import {RECORD_STEPS} from "../../features/records/recordSteps";
import {StepProgress} from "../../features/records/StepProgress";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

export default function NewRecordScreen() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<RecordDraft>(EMPTY_DRAFT);
  const insets = useSafeAreaInsets();

  const isFirst = step === 0;
  const isLast = step === RECORD_STEPS.length - 1;
  const current = RECORD_STEPS[step];

  // Junta só os campos que mudaram com o resto do rascunho.
  function update(changes: Partial<RecordDraft>) {
    setDraft((previous) => ({...previous, ...changes}));
  }

  function goBack() {
    if (isFirst) {
      router.back();
    } else {
      setStep(step - 1);
    }
  }

  function goNext() {
    if (isLast) {
      // Na etapa do banco, o registro é salvo aqui antes de fechar.
      router.back();
    } else {
      setStep(step + 1);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      {/* key={step} recria a rolagem a cada passo, então o passo novo sempre começa do topo. */}
      <ScrollView key={step} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <StepProgress current={step} total={RECORD_STEPS.length} />

        <View style={styles.header}>
          <Text style={styles.title} accessibilityRole="header">
            {current.title}
          </Text>
          <Text style={styles.description}>{current.description}</Text>
        </View>

        <StepContent step={step} draft={draft} onChange={update} />
      </ScrollView>

      <View style={[styles.footer, {paddingBottom: insets.bottom + spacing.md}]}>
        <View style={styles.footerButton}>
          <SecondaryButton title={isFirst ? "Cancelar" : "Voltar"} onPress={goBack} />
        </View>
        <View style={styles.footerButton}>
          <PrimaryButton title={isLast ? "Concluir" : "Próximo"} icon={isLast ? "checkmark" : undefined} onPress={goNext} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

type StepContentProps = {
  step: number;
  draft: RecordDraft;
  onChange: (changes: Partial<RecordDraft>) => void;
};

function StepContent({step, draft, onChange}: StepContentProps) {
  const emotionName = EMOTIONS.find((emotion) => emotion.id === draft.emotionId)?.name;

  switch (step) {
    case 0:
      return (
        <TextField
          label="Descreva o que aconteceu"
          hint="Só os fatos, como uma câmera veria."
          placeholder="Ex.: Meu chefe pediu para conversar amanhã cedo."
          value={draft.situation}
          onChangeText={(situation) => onChange({situation})}
        />
      );

    case 1:
      return (
        <View style={styles.group}>
          <Text style={styles.groupLabel}>Qual emoção ficou mais forte?</Text>
          <View style={styles.chips}>
            {EMOTIONS.map((emotion) => (
              <Chip key={emotion.id} label={emotion.name} selected={draft.emotionId === emotion.id} onPress={() => onChange({emotionId: emotion.id})} />
            ))}
          </View>
          <IntensityPicker label="Com que força, de 0 a 100?" value={draft.intensityBefore} onChange={(intensityBefore) => onChange({intensityBefore})} />
        </View>
      );

    case 2:
      return (
        <TextField
          label="O pensamento, com as palavras que vieram"
          hint="Não precisa corrigir nem fazer sentido."
          placeholder="Ex.: Vou ser demitido."
          value={draft.automaticThought}
          onChangeText={(automaticThought) => onChange({automaticThought})}
        />
      );

    case 3:
      return (
        <View style={styles.group}>
          <Text style={styles.groupLabel}>Marque as que combinam com o pensamento</Text>
          <Text style={styles.groupHint}>Pode marcar mais de uma, ou nenhuma. A aba Aprender explica cada uma.</Text>
          <View style={styles.chips}>
            {DISTORTIONS.map((distortion) => {
              const selected = draft.distortionIds.includes(distortion.id);
              return (
                <Chip
                  key={distortion.id}
                  label={distortion.name}
                  selected={selected}
                  onPress={() =>
                    onChange({
                      distortionIds: selected ? draft.distortionIds.filter((id) => id !== distortion.id) : [...draft.distortionIds, distortion.id],
                    })
                  }
                />
              );
            })}
          </View>
        </View>
      );

    case 4:
      return (
        <View style={styles.group}>
          <TextField
            label="A favor do pensamento"
            hint="Só fatos, não impressões."
            value={draft.evidenceFor}
            onChangeText={(evidenceFor) => onChange({evidenceFor})}
          />
          <TextField
            label="Contra o pensamento"
            hint="O que você diria a um amigo nessa situação?"
            value={draft.evidenceAgainst}
            onChangeText={(evidenceAgainst) => onChange({evidenceAgainst})}
          />
        </View>
      );

    case 5:
      return (
        <TextField
          label="Seu pensamento alternativo"
          hint="Junte o que apareceu nas evidências. Não precisa ser positivo, só mais justo."
          placeholder="Ex.: Ele pode só querer alinhar um projeto. Se for algo difícil, eu dou conta."
          value={draft.alternativeThought}
          onChangeText={(alternativeThought) => onChange({alternativeThought})}
        />
      );

    default:
      return (
        <View style={styles.group}>
          {draft.intensityBefore !== null ? (
            <Text style={styles.groupHint}>
              No começo: {emotionName ?? "emoção"} em {draft.intensityBefore}.
            </Text>
          ) : null}
          <IntensityPicker
            label={emotionName ? `Quanto de ${emotionName.toLowerCase()} você sente agora?` : "Com que força você sente essa emoção agora?"}
            value={draft.intensityAfter}
            onChange={(intensityAfter) => onChange({intensityAfter})}
          />
          {draft.intensityBefore !== null && draft.intensityAfter !== null ? (
            <View style={styles.result}>
              <Text style={styles.resultText}>
                {emotionName ?? "Emoção"} {draft.intensityBefore} → {draft.intensityAfter}
              </Text>
            </View>
          ) : null}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  header: {
    gap: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "700",
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
  },
  group: {
    gap: spacing.md,
  },
  groupLabel: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  groupHint: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
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
    fontSize: 15,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    gap: spacing.md,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  footerButton: {
    flex: 1,
  },
});
