import Ionicons from "@expo/vector-icons/Ionicons";
import {Tabs} from "expo-router/js-tabs";
import {HelpButton} from "../../components/HelpButton";
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
          tabBarIcon: ({focused, size}) => <Ionicons name="journal-outline" size={size} color={focused ? colors.primaryDark : colors.textMuted} />,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({focused, size}) => <Ionicons name="stats-chart-outline" size={size} color={focused ? colors.primaryDark : colors.textMuted} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Aprender",
          tabBarIcon: ({focused, size}) => <Ionicons name="book-outline" size={size} color={focused ? colors.primaryDark : colors.textMuted} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Ajustes",
          tabBarIcon: ({focused, size}) => <Ionicons name="settings-outline" size={size} color={focused ? colors.primaryDark : colors.textMuted} />,
        }}
      />
    </Tabs>
  );
}
