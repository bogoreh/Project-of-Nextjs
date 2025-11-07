'use client';

import { useState, useEffect } from 'react';
import { Note } from '@/types/note';
import NoteCard from '@/components/NoteCard';

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">All Notes</h1>
      
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
          <p className="text-gray-400 text-xl">No notes found.</p>
          <p className="text-gray-500 mt-2">Create your first note on the home page!</p>
        </div>
      )}
    </div>
  );
}