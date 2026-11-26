import {Stack} from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="record/[id]" options={{title: "Registro"}} />
      <Stack.Screen name="record/new" options={{title: "Novo registro", presentation: "modal", animation: "slide_from_bottom"}} />
    </Stack>
  );
}
