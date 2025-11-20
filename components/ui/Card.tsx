import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';


export default function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
return <View style={[styles.card, style]}>{children}</View>;
}


const styles = StyleSheet.create({
card: {
backgroundColor: '#F4F4F4',
borderRadius: 12,
padding: 16,
borderWidth: 1,
borderColor: '#D8D8D8',
shadowColor: '#000',
shadowOpacity: 0.03,
shadowRadius: 6,
elevation: 2,
},
});