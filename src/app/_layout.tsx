import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {HelpButton} from "../components/HelpButton";
import {colors} from "../theme/colors";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerRight: () => <HelpButton />,
          headerStyle: {backgroundColor: colors.background},
          headerTintColor: colors.text,
          headerShadowVisible: false,
          contentStyle: {backgroundColor: colors.background},
        }}
      >
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="onboarding" options={{title: "Boas-vindas"}} />
        <Stack.Screen name="record/[id]" options={{title: "Registro"}} />
        <Stack.Screen name="distortion/[id]" options={{title: "Distorção"}} />

        <Stack.Screen name="record/new" options={{title: "Novo registro", presentation: "modal", animation: "slide_from_bottom"}} />
        <Stack.Screen name="help" options={{title: "Ajuda", presentation: "modal", animation: "slide_from_bottom", headerRight: () => null}} />
      </Stack>
    </>
  );
}
