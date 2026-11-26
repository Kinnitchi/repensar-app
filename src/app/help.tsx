import {Alert, Button, Linking, Text, View} from "react-native";
import {CRISIS_CONTACTS} from "../constants/crisis";

function callNumber(phone: string) {
  Linking.openURL(`tel:${phone}`).catch(() => {
    Alert.alert("Não foi possível abrir o discador", `Ligue para ${phone} pelo seu telefone.`);
  });
}

export default function HelpScreen() {
  return (
    <View>
      <Text>Se você está em sofrimento, procure ajuda agora.</Text>

      {CRISIS_CONTACTS.map((contact) => (
        <View key={contact.phone}>
          <Text>
            {contact.name}: {contact.phone}
          </Text>
          <Text>{contact.description}</Text>
          <Button title={`Ligar para o ${contact.name}`} onPress={() => callNumber(contact.phone)} />
        </View>
      ))}

      <Text>O Repensar não substitui acompanhamento psicológico ou psiquiátrico.</Text>
    </View>
  );
}
