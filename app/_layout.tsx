// app/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PageContainer from '../components/layout/PageContainer';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PageContainer>
        <Slot />
      </PageContainer>
    </SafeAreaProvider>
  );
}
