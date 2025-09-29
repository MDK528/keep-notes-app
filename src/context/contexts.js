import { createContext, useContext } from "react";

const menubarContext = createContext({
    // menubarStatus: true,
    menubarStatus: false,
    menubarClose: () => {},
    menubarOpen: () => {}
})

export  const useMenubar = ()=>{
    return useContext(menubarContext)
}

export const MenubarProvider = menubarContext.Provider

export const notes = createContext({
    notes: [],
    filterdNotes: [],
    addNote: (note) => {},
    updateNote: (id, noteTitle, note) => {},
    deleteNote: (id) => {},
    searchQuery: '',
    setSearchQuery: () => {},
})

export const useNote = () => {
    return useContext(notes)
}

export const NotesProvider = notes.Provider