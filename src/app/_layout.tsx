import {Stack} from "expo-router";
import {HelpButton} from "../components/HelpButton";
import {StatusBar} from "expo-status-bar";
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
        {/* as mesmas Stack.Screen de antes */}
      </Stack>
    </>
  );
}
