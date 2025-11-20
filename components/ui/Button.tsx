import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type Props = {
    children: React.ReactNode;
    onPress?: () => void;
    disabled?: boolean;
};

export default function Button({ children, onPress, disabled }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
            style={[styles.button, disabled && styles.disabled]}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e6f6ff',
        borderRadius: 28,
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bfe9ff',
    },
    text: { color: '#0078a8', fontWeight: '600' },
    disabled: { opacity: 0.6 },
});