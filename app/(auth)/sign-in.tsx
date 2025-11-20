import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as z from "zod";

import Card from "@/components/ui/Card";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";
import { useAuthStore } from "../../store/authStore";



const schema = z.object({
    email: z.string().min(1, "Username or email is required"),
    password: z.string().min(1, "Password is required")
});

type FormData = z.infer<typeof schema>;

export default function SigninScreen() {
    const router = useRouter();
    const { setUser, getUserSecure, getPassword, saveUserSecure } = useAuthStore();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { email: "", password: "" }
    });

    const onSubmit = async ({ email, password }: FormData) => {
        const storedUser = await getUserSecure();
        const storedPassword = await getPassword();

        if (!storedUser || !storedPassword) {
            alert("No registered user found");
            return;
        }

        if (storedUser.email !== email || storedPassword !== password) {
            alert("Invalid email or password");
            return;
        }

        await saveUserSecure(storedUser);
        setUser(storedUser);
        router.replace("/home");
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ paddingTop: 80 }}>
                    <View style={{ marginTop: 40 }}>

                        {/* Floating Header Label */}
                        <View style={styles.cardHeader}>
                            <Text style={styles.heading}>Account Sign in</Text>
                        </View>

                        <Card>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <TextField
                                        label="EMAIL ADDRESS"
                                        placeholder="Enter email"
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        error={errors.email?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <TextField
                                        label="PASSWORD"
                                        placeholder="Enter password"
                                        secureTextEntry
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        error={errors.password?.message}
                                    />
                                )}
                            />
                            <Text onPress={() => router.push("/sign-up")} style={styles.bottomTxt}>No Account? Register here</Text>
                        </Card>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={handleSubmit(onSubmit)}>SIGN IN</Button>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    heading: {
        fontWeight: "700",
        fontSize: 15,
    },
    link: { textAlign: "center", marginTop: 20, color: "blue", fontWeight: "600" },
    cardHeader: {
        position: "absolute",
        top: -22,
        left: 16,
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 16,
        zIndex: 10,
        paddingVertical: 8,
        borderRadius: 10,
        borderColor: "#ddd",
        borderWidth: 1,
    },
    buttonContainer: {
        marginTop: 30,
    },
        bottomTxt: {
        textAlign: "right",
        marginTop: 10,
        marginBottom: 20,
        color: "#007cff",
        fontSize: 12,
    },
});
