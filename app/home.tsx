import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";
import { useAuthStore } from "../store/authStore";

export default function HomeScreen() {
    const router = useRouter();
    const { user, clearUserSecure, clearPassword, setUser } = useAuthStore();


    const logout = async () => {
        await clearUserSecure();
        await clearPassword();
        setUser(null);
        router.replace("/(auth)/sign-in");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome {user?.firstName} {user?.lastName}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Phone: {user?.phone}</Text>
            <View style={{marginTop: 20}}>
                <Button onPress={logout}>LOG OUT</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    welcome: { fontSize: 24, fontWeight: "700", marginBottom: 30 },
    logoutBtn: { marginTop: 20 }
});
