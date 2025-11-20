import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string | undefined;
};

export default function TextField({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  error,
}: Props) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
        style={[styles.input, error && styles.inputError]}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },

  label: {
    color: "#333",
    fontWeight: "500",
    marginBottom: 6,
    fontSize: 13,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  inputError: {
    borderColor: "#ff6b6b",
  },

  error: {
    color: "#ff6b6b",
    marginTop: 5,
    fontSize: 12,
  },
});
