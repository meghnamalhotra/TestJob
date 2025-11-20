import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Checkbox({ label, checked, onToggle }: { label?: string; checked: boolean; onToggle: () => void }) {
return (
<TouchableOpacity style={styles.row} onPress={onToggle} activeOpacity={0.8}>
<View style={[styles.box, checked && styles.boxChecked]}>{checked ? <Text>✓</Text> : null}</View>
{label ? <Text style={styles.label}>{label}</Text> : null}
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
row: { flexDirection: 'row', alignItems: 'center' },
box: { width: 28, height: 28, borderWidth: 1, borderColor: '#cfcfcf', borderRadius: 6, marginRight: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
boxChecked: { backgroundColor: '#e6f6ff', borderColor: '#bfe9ff' },
label: { color: '#0078a8' },
});