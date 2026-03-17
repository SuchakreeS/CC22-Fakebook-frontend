import { FakebookLogo } from '@/icons'
import useUserStore from '@/stores/userStore'
import React from 'react'

function Header() {
    const logout = useUserStore(state => state.logout)
    const user = useUserStore(state => state.user)
    return (
        <div className="flex gap-4 text-4xl h-14 border fixed top-0 z-10 items-center">
            <FakebookLogo className="w-12"/>
            <p>Hello, {user?.firstName}</p>
            <button className="btn btn-info" onClick={logout}>Logout</button>
        </div>
    )
}

export default Header