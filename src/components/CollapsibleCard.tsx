import Ionicons from "@expo/vector-icons/Ionicons";
import {useState, type ReactNode} from "react";
import {AccessibilityInfo, LayoutAnimation, Pressable, StyleSheet, Text, View} from "react-native";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type CollapsibleCardProps = {
  title: string;
  description?: string;
  defaultExpanded?: boolean;
  children: ReactNode;
};

// Cartão com o mesmo visual do SectionCard, mas o conteúdo abre e fecha ao tocar no cabeçalho.
export function CollapsibleCard({title, description, defaultExpanded = false, children}: CollapsibleCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  async function toggle() {
    // Quem ativou "Reduzir movimento" no celular vê o conteúdo aparecer direto, sem animação.
    const reduceMotion = await AccessibilityInfo.isReduceMotionEnabled();
    if (!reduceMotion) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    setExpanded((current) => !current);
  }

  return (
    <View style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={description ? `${title}. ${description}` : title}
        accessibilityState={{expanded}}
        accessibilityHint={expanded ? "Esconde o conteúdo" : "Mostra o conteúdo"}
        onPress={toggle}
        style={({pressed}) => [styles.header, pressed && styles.pressed]}
      >
        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          {description ? <Text style={styles.description}>{description}</Text> : null}
        </View>
        <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={20} color={colors.textMuted} />
      </Pressable>

      {expanded ? <View style={styles.body}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
  },
  pressed: {
    opacity: 0.85,
  },
  headerText: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "600",
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  body: {
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
});
