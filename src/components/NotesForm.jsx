import React, { useId, useState } from 'react'
import Textarea from './Textarea'
import Button from './Button'
import { useNote } from '@/context/contexts'

function NotesForm()
{
    const [noteTitle, setNoteTitle] = useState('')
    const [note, setNote] = useState('')
    const [closeTexarea, setCloseTextarea] = useState(true)

    const {addNote} = useNote()
    
    const addBtn = (e) => { 
        e.preventDefault()

        if (!note) return
        addNote({id: Date.now(),noteTitle, note})

        setNoteTitle("")
        setNote("")
        setCloseTextarea((prevState)=> !prevState)
    }

    const closeBtn = (e) => { 
        e.preventDefault()
        closeTexarea ? setCloseTextarea(false) : setCloseTextarea(true)
    }

    return (
        <form>
            <div
                className='sm:w-lg md:w-xl mx-auto rounded-md border border-neutral-200 dark:border-neutral-800 
                p-2'
            >
                <div>
                    <Textarea
                        className={`w-full overflow-hidden field-sizing-content resize-none px-2 py-1 sm:px-3 sm:py-2 outline-none text-neutral-700 text-lg sm:text-xl dark:text-neutral-300 ${closeTexarea ? 'hidden' : ''}`}
                        placeholder={'Title'}
                        onChange={(e)=>setNoteTitle(e.target.value)}
                        value={noteTitle}
                    />
                </div>

                <div >
                    <Textarea
                        className={'w-full overflow-hidden field-sizing-content resize-none px-2 py-1 sm:px-3 sm:py-2 outline-none text-neutral-700 text-sm sm:text-base dark:text-neutral-300'}
                        placeholder={'Take a note...'}
                        onChange={(e)=> setNote(e.target.value)}
                        value={note}
                    />
                </div>

                <div className='px-2 py-1 sm:px-3 sm:py-2 flex gap-5 justify-end items-center overflow-hidden'>
                    <Button
                        className={`dark:text-neutral-300 text-neutral-900 cursor-pointer text-sm sm:text-lg font-semibold `}
                        text={closeTexarea ? 'Open': 'Close'}
                        onClick={closeBtn}
                    />

                    <Button
                        className={'dark:text-neutral-300 text-neutral-900 cursor-pointer text-sm sm:text-lg font-semibold'}
                        text={closeTexarea ? '' : 'Add'}
                        disabled={closeTexarea ? true : false}
                        onClick={addBtn}
                    />
                </div>

            </div>
        </form>
    )
}

export default NotesForm
