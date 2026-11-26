import {router} from "expo-router";
import {useState} from "react";
import {Button, Switch, Text, View} from "react-native";

export default function OnboardingScreen() {
  const [accepted, setAccepted] = useState(false);

  return (
    <View>
      <Text>Boas-vindas ao Repensar</Text>
      <Text>Um diário para registrar pensamentos difíceis e olhar para eles com mais equilíbrio, usando técnicas da TCC.</Text>
      <Text>O Repensar não substitui acompanhamento psicológico ou psiquiátrico.</Text>
      <Text>Seus registros ficam só neste aparelho.</Text>

      <View>
        <Switch value={accepted} onValueChange={setAccepted} />
        <Text>Entendo que meus registros são dados de saúde e concordo em guardá-los neste aparelho.</Text>
      </View>

      <Button title="Começar" disabled={!accepted} onPress={() => router.dismissTo("/")} />
    </View>
  );
}
