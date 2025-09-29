import React, { useState } from 'react'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'
import { useNote } from '@/context/contexts'

function NotesCard({ note })
{
    const [isEditable, setIsEditable] = useState(false)
    const [newNoteTitle, setNewNoteTitle] = useState(note.noteTitle)
    const [newNote, setNewNote] = useState(note.note)
    const {updateNote, deleteNote} = useNote()

    const editNote = () =>{
        updateNote(note.id, {...note, noteTitle: newNoteTitle, note: newNote})
        setIsEditable((prev)=> !prev)
        // setIsEditable(false)
    }

    return (
        <div
            className='sm:w-lg md:w-xl mx-auto rounded-md border border-gray-300 dark:border-gray-600 
            p-2 my-2'
        >
            <div>
                <Textarea
                    className={'w-full overflow-hidden field-sizing-content resize-none px-2 py-1 sm:px-3 sm:py-2 outline-none text-neutral-700 text-lg sm:text-xl dark:text-neutral-300'}
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    readOnly={!isEditable}
                />
            </div>

            <div >
                <Textarea
                    className={'w-full overflow-hidden field-sizing-content resize-none px-2 py-1 sm:px-3 sm:py-2 outline-none text-neutral-700 text-sm sm:text-base dark:text-neutral-300'}
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    readOnly={!isEditable}
                />
            </div>

            <div className='flex gap-5 px-2 py-1 sm:px-3 sm:py-2 justify-end items-center overflow-hidden'>
                <Button 
                    className={'text-sm sm:text-lg font-extralight text-neutral-900 sm:font-medium dark:text-neutral-300 cursor-pointer'}
                    text={isEditable ? 'Save' : 'Edit'}
                    onClick={()=>  {
                        if(isEditable){
                            editNote()
                        }else setIsEditable((prev) => (!prev) )
                    }}
                />

                <Button 
                    className={'text-sm sm:text-lg font-extralight text-neutral-900 sm:font-medium dark:text-neutral-300 cursor-pointer'}
                    text={isEditable ? '' : 'Delete'}
                    onClick={()=> deleteNote(note.id)}
                />
            </div>
        </div>
    )
}

export default NotesCard
