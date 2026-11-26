import {Button, Linking, Text, View} from "react-native";
import {CRISIS_CONTACTS} from "../constants/crisis";

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
          <Button title={`Ligar para o ${contact.name}`} onPress={() => Linking.openURL(`tel:${contact.phone}`)} />
        </View>
      ))}

      <Text>O Repensar não substitui acompanhamento psicológico ou psiquiátrico.</Text>
    </View>
  );
}
