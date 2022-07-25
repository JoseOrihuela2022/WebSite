import { onAuth } from '../firebase/auth'
import { useUser } from '../context/Context.js'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '../components/Loader'

export function WithAuth(Component) {
    return () => {
        const { user, setUserProfile, setUserData } = useUser()
        const router = useRouter()

        useEffect(() => {
            onAuth(setUserProfile, setUserData)
            if (user === null) router.replace('/')
        }, [user])
        return (
            <>
                {user === undefined && <Loader />}
                {user && <Component {...arguments} />}
            </>
        )
    }
}
