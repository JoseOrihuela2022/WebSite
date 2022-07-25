import { onAuth } from '../firebase/auth'
import { useUser } from '../context/Context.js'
import { useEffect } from 'react'

export function WithoutAuth(Component) {
    return () => {
        const { user, setUserProfile, setUserData } = useUser()

        useEffect(() => {
            onAuth(setUserProfile, setUserData)
        }, [user]);

        return (
            <>
                <Component {...arguments} />
            </>
        )
    }
}
