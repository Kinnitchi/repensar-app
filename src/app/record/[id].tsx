import {useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";

export default function RecordDetailScreen() {
  const {id} = useLocalSearchParams<{id: string}>();

  return (
    <View>
      <Text>Registro {id}</Text>
    </View>
  );
}
