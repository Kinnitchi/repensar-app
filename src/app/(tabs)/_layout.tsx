import {Tabs} from "expo-router/js-tabs";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: "Registros"}} />
      <Tabs.Screen name="insights" options={{title: "Insights"}} />
      <Tabs.Screen name="learn" options={{title: "Aprender"}} />
      <Tabs.Screen name="settings" options={{title: "Ajustes"}} />
    </Tabs>
  );
}
