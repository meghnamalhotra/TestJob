import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function HelpButton({ onPress }: { onPress?: () => void }) {
return (
<TouchableOpacity style={styles.help} onPress={onPress}>
<Text style={styles.text}>? NEED HELP?</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
help: {
borderWidth: 1,
borderColor: '#bfe9ff',
paddingHorizontal: 14,
paddingVertical: 8,
borderRadius: 999,
alignSelf: 'center',
marginVertical: 12,
},
text: { color: '#0078a8', fontWeight: '600' },
});