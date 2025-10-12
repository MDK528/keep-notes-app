import { useId, useState } from "react"
import { LogOut, SearchIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import Hamburger from "@/components/Hamburger"
import {useNote} from '@/context/contexts'
import { useAuth0 } from "@auth0/auth0-react"

export default function Component() {
  const id = useId()

  const { searchQuery, setSearchQuery } = useNote()

  const clearSearch = () => {
    setSearchQuery('')
  }

  const {user, logout} = useAuth0()

  const [drpusermenu, setDrpUserMenu] = useState(false)

  const handleUsermenu = (e) => {
    e.preventDefault()
    setDrpUserMenu(!drpusermenu)
  }

  return (
    <header className="border-b px-2.5 sm:px-3 
    w-full fixed top-0 opacity-100 z-10 dark:bg-[#0A0A0A] bg-white">
      <div className="flex h-16 items-center justify-between gap-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 ">
              <Hamburger/>
              <span className="text-2xl text-[#ffb004] hidden sm:block ml-3">Notes</span>
          </div>
        </div>

        <div className="grow ">
          <div className="relative mx-auto w-full max-w-xs md:max-w-xl">
            <Input
              id={id}
              className="peer h-10 px-5 sm:px-8 rounded-full sm:rounded-md"
              placeholder="Search Notes..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="text-muted-foreground/80 pointer-events-none hidden sm:absolute inset-y-0 start-0 sm:flex sm:items-center sm:justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>

            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground/80 hover:text-foreground"
                type="button"
              >
                <X size={16} className="cursor-pointer" />
              </button>
            )}

          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-5">
          <AnimatedThemeToggler className={'cursor-pointer'}/>

          <button className="h-8 w-8 relative rounded-full cursor-pointer" onClick={handleUsermenu}>
            <img src={user.picture} alt="img" 
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>

          <div class={`z-50  ${drpusermenu ? 'fixed right-1' : 'hidden right-0'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-[#855E08] dark:divide-gray-600`} id="user-dropdown">
            <div class="px-4 py-3">
              <span class="block text-base sm:text-lg text-gray-900 dark:text-white">{user.name}</span>
              <span class="block text-sm text-gray-900 truncate dark:text-white">{user.email}</span>

              <button 
                className="text-gray-900 dark:text-white flex gap-1 items-center py-2 cursor-pointer"
                onClick={(e)=>logout()}
              >
                <LogOut height={20} width={20}/>
                <span>Sign out</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
