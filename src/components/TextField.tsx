import {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {colors} from "../theme/colors";
import {radius, spacing} from "../theme/spacing";

type TextFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  hint?: string;
  placeholder?: string;
};

export function TextField({label, value, onChangeText, hint, placeholder}: TextFieldProps) {
  // Borda azul enquanto o campo está em foco, para a pessoa ver onde está digitando.
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
      <TextInput
        accessibilityLabel={label}
        accessibilityHint={hint}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        multiline
        textAlignVertical="top"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[styles.input, focused && styles.inputFocused]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  hint: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  input: {
    minHeight: 110,
    marginTop: spacing.xs,
    padding: spacing.sm + spacing.xs,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  inputFocused: {
    borderColor: colors.primaryDark,
  },
});
