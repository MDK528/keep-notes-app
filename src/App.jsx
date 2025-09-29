import { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/header/Navbar'
import Sidebar from '@/components/header/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenubarProvider, NotesProvider } from '@/context/contexts';
import {Home, Archive, Trash} from "@/index"
import './App.css'

function App()
{
  // Sidebar
  const [menubarStatus, setMenubarStatus] = useState(false)

  const menubarOpen = () => {
    setMenubarStatus(true)
  }
  const menubarClose = () => {
    setMenubarStatus(false)
  }
  // Notes
  const [notes, setNotes] = useState([])

  const addNote = (note) =>
  {
    setNotes((prev) => [{ ...note }, ...prev])
  }

  const updateNote = (id, note) =>
  {
    setNotes((prev) => prev.map((prevNote) => (prevNote.id === id ? note : prevNote)))
  }

  const deleteNote = (id) =>
  {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  useEffect(() =>
  {
    const LSnotes = JSON.parse(localStorage.getItem("notes"))
    if (LSnotes && LSnotes.length > 0)
    {
      setNotes(LSnotes)
    }
  },[])

  useEffect(() =>
  {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // Search Functionvality
  const [searchQuery, setSearchQuery] = useState('')

  const filterdNotes = useMemo(()=>{
    if(!searchQuery.trim()){
      return notes
    }
    const query = searchQuery.toLowerCase().trim()
    return notes.filter((note)=>
      note.noteTitle.toLowerCase().includes(query) ||
      note.note.toLowerCase().includes(query)
    )
  },[notes, searchQuery])

  
  return (
    <>
    <MenubarProvider value={{menubarStatus, menubarOpen, menubarClose}}>
      <NotesProvider value={
        {addNote, updateNote, deleteNote, notes, filterdNotes, searchQuery ,setSearchQuery}
      }>
        <Router>
          <Navbar />
          <Sidebar/>
          <div
            className={` mt-18 sm:mt-18 px-5  transition-all duration-10 ease-in-out
            ${menubarStatus ? 'overflow-hidden sm:overflow-auto sm:ml-64 opacity-50 sm:opacity-100 blur-[3px] sm:blur-[0]' 
              : 'overflow-auto sm:ml-14 opacity-100  sm:blur-[0] '}
          `}>
            <div className='max-w-7xl mx-auto'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archive" element={<Archive />} /> 
                <Route path="/trash" element={<Trash />} />
              </Routes>
            </div>
          </div>
        </Router>
      </NotesProvider>
      </MenubarProvider>
    </>
  )
}
export default App
