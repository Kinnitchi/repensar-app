import {router} from "expo-router";
import {useState} from "react";
import {Button, Text, View} from "react-native";

const STEPS = ["Situação", "Emoções", "Pensamento automático", "Distorções", "Evidências", "Pensamento alternativo", "Reavaliação"] as const;

export default function NewRecordScreen() {
  const [step, setStep] = useState(0);
  const isFirst = step === 0;
  const isLast = step === STEPS.length - 1;

  return (
    <View>
      <Text>
        Passo {step + 1} de {STEPS.length}
      </Text>
      <Text>{STEPS[step]}</Text>

      {!isFirst && <Button title="Voltar" onPress={() => setStep(step - 1)} />}

      {isLast ? <Button title="Concluir" onPress={() => router.back()} /> : <Button title="Próximo" onPress={() => setStep(step + 1)} />}
    </View>
  );
}
