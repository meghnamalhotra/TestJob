import { Redirect } from "expo-router";
import React, { useEffect, useState } from 'react';
import { useAuthStore } from "../store/authStore";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const { getUserSecure, setUser, user } = useAuthStore();

    useEffect(() => {
        async function load() {
            const stored = await getUserSecure();
            if (stored) setUser(stored);
            setLoading(false);
        }
        load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return null;

    if (user) return <Redirect href="/home" />;

    return <Redirect href="/(auth)/sign-up" />;
}