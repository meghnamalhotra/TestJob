import { useState } from 'react';


export default function useAuth() {
const [user, setUser] = useState(null);


const signUp = async (data: any) => {
// call API
return true;
};


const signIn = async (email: string, password: string) => {
// call API
return true;
};


return { user, signUp, signIn };
}