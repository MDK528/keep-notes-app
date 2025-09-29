import { useId } from "react"
import { SearchIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import Hamburger from "@/components/Hamburger"
import {useNote} from '@/context/contexts'

export default function Component() {
  const id = useId()

  const { searchQuery, setSearchQuery } = useNote()

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <header className="border-b px-2.5 sm:px-3 
    w-full fixed top-0 opacity-100 z-10 dark:bg-[#0A0A0A] bg-white">
      <div className="flex h-16 items-center justify-between gap-2">
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

        <div className="flex flex-1 items-center justify-end gap-2">
          <AnimatedThemeToggler className={'cursor-pointer'}/>
        </div>
      </div>
    </header>
  )
}
