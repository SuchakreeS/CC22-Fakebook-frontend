import useUserStore from '@/stores/userStore'
import React from 'react'

function SidebarMenu() {
    const user = useUserStore(state => state.user)
    return (
        <div className='fixed top-14 h-full w-87.5 pt-2 overflow-auto flex flex-col gap-2 min-w-55 border'>
            SidebarMenu
        </div>
    )
}

export default SidebarMenu