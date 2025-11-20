import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import * as z from 'zod';

import { useRouter } from 'expo-router';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';
import Card from '../ui/Card';
import TextField from '../ui/TextField';

// ---- Validation Schema ----
const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const schema = z.object({
    email: z.string().min(1, 'Email is required').regex(emailRegex, 'Invalid email'),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().min(1, 'Phone number is required').min(6, 'Invalid phone number'),
});

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
    const router = useRouter();
    const { setUser, saveUserSecure, savePassword } = useAuthStore();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
        },
        mode: "onSubmit",   // validate only on button press
    });

    const onSubmit = async (data: FormData) => {
        const user = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
        };

        // Save data securely
        await saveUserSecure(user);
        await savePassword(data.password);

        // Set store user for session
        setUser(user);

        router.replace("/home");
    };


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{ marginTop: 40 }}>

                        {/* Floating Header Label */}
                        <View style={styles.cardHeader}>
                            <Text style={styles.heading}>Account setup</Text>
                        </View>

                        <Card>

                            {/* EMAIL */}
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        label="EMAIL ADDRESS"
                                        placeholder="Enter email"
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.email?.message}
                                    />
                                )}
                            />

                            {/* PASSWORD */}
                            <Controller
                                control={control}
                                name="password"
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        label="PASSWORD"
                                        placeholder="Enter password"
                                        secureTextEntry
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.password?.message}
                                    />
                                )}
                            />

                            {/* FIRST NAME */}
                            <Controller
                                control={control}
                                name="firstName"
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        label="FIRST NAME"
                                        placeholder="Enter first name"
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.firstName?.message}
                                    />
                                )}
                            />

                            {/* LAST NAME */}
                            <Controller
                                control={control}
                                name="lastName"
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        label="LAST NAME"
                                        placeholder="Enter last name"
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.lastName?.message}
                                    />
                                )}
                            />

                            {/* PHONE */}
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        label="PHONE NUMBER"
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.phone?.message}
                                    />
                                )}
                            />
                            <Text onPress={() => router.push("/sign-in")} style={styles.bottomTxt}>Already registered? Sign in here</Text>
                        </Card>
                    </View>

                    {/* SUBMIT BUTTON */}
                    <View style={styles.buttonContainer}>
                        <Button onPress={handleSubmit(onSubmit)}>SAVE & START</Button>
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

    buttonContainer: {
        marginTop: 30,
    },

    scrollContent: {
        paddingBottom: 100,
    },

    cardHeader: {
        position: "absolute",
        top: -20,
        left: 16,
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 16,
        zIndex: 10,
        paddingVertical: 8,
        borderRadius: 10,
        borderColor: "#ddd",
        borderWidth: 1,
    },
    bottomTxt: {
        textAlign: "right",
        marginTop: 10,
        marginBottom: 20,
        color: "#007cff",
        fontSize: 12,
    },
});
