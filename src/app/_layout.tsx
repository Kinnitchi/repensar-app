import {Stack} from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="record/[id]" options={{title: "Registro"}} />
    </Stack>
  );
}
