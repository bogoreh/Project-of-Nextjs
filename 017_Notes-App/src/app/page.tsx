'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Note } from '@/types/note';
import NoteForm from '@/components/NoteForm';
import NoteCard from '@/components/NoteCard';
import { generateId } from '@/lib/utils';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const handleCreateNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...noteData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const recentNotes = notes.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Create Note Form */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Create New Note</h2>
          <NoteForm onSubmit={handleCreateNote} />
        </div>

        {/* Recent Notes */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Recent Notes</h2>
            {notes.length > 0 && (
              <Link 
                href="/notes" 
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-600"
              >
                View All
              </Link>
            )}
          </div>

          {recentNotes.length > 0 ? (
            <div className="space-y-4">
              {recentNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
              <p className="text-gray-400 text-lg">No notes yet. Create your first note!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}