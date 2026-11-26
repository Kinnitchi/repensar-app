import {Stack} from "expo-router";
import {HelpButton} from "../components/HelpButton";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerRight: () => <HelpButton />}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="record/[id]" options={{title: "Registro"}} />
      <Stack.Screen name="distortion/[id]" options={{title: "Distorção"}} />

      <Stack.Screen name="record/new" options={{title: "Novo registro", presentation: "modal", animation: "slide_from_bottom"}} />
      <Stack.Screen name="help" options={{title: "Ajuda", presentation: "modal", animation: "slide_from_bottom", headerRight: () => null}} />
    </Stack>
  );
}
