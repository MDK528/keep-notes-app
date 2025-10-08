import React from 'react'
import { useNote } from '@/context/contexts'
import NotesForm from '@/components/NotesForm'
import NotesCard from '@/components/NotesCard'

function Home()
{
  const { filterdNotes, searchQuery } = useNote()

  return (
    <div className='home'>
      {/* Only show NotesForm when not searching */}
      {!searchQuery && <NotesForm />}

      <div className='note-area mt-8'>
        {searchQuery ? (
          // Search results view
          <SearchResult searchQuery={searchQuery} filterdNotes={filterdNotes} />
        ) : (
          // Normal notes view
          <NotesView filterdNotes={filterdNotes} />
        )
        }
      </div>
    </div>
  )
}
export default Home


function SearchResult({ searchQuery, filterdNotes })
{

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
          Search results for "{searchQuery}"
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {filterdNotes.length} {filterdNotes.length === 1 ? 'note' : 'notes'} found
        </p>
      </div>

      {filterdNotes.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-2">
            No notes found
          </p>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            Try searching with different keywords
          </p>
        </div>
      ) : (
        filterdNotes.map((note) =>
          <NotesCard key={note.id} note={note} />
        )
      )}
    </div>
  )
}

function NotesView({ filterdNotes })
{

  return (
    <>
      {filterdNotes.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-2">
            No notes yet
          </p>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            Click "Take a note..." above to create your first note
          </p>
        </div>
      ) : (
        filterdNotes.map((note) =>
          <NotesCard key={note.id} note={note} />
        ))
      }
    </>
  )
}