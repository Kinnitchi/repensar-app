import {Pressable, StyleSheet, Text} from "react-native";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type SecondaryButtonProps = {
  title: string;
  onPress: () => void;
};

export function SecondaryButton({title, onPress}: SecondaryButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.primaryDark,
    backgroundColor: colors.surface,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: "600",
  },
});
