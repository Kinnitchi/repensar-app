import {Tabs} from "expo-router/js-tabs";
import {HelpButton} from "../../components/HelpButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import {colors} from "../../theme/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <HelpButton />,
        headerStyle: {backgroundColor: colors.background},
        headerTintColor: colors.text,
        headerShadowVisible: false,
        sceneStyle: {backgroundColor: colors.background},
        tabBarStyle: {backgroundColor: colors.surface, borderTopColor: colors.border},
        tabBarActiveTintColor: colors.primaryDark,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Registros",
          tabBarIcon: ({color, size}) => <Ionicons name="journal-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
