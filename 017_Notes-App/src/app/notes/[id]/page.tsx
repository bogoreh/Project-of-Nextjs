'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Note } from '@/types/note';
import { formatDate } from '@/lib/utils';
import NoteForm from '@/components/NoteForm';

export default function NoteDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      const notes: Note[] = JSON.parse(savedNotes);
      const foundNote = notes.find(n => n.id === params.id);
      setNote(foundNote || null);
    }
  }, [params.id]);

  const handleUpdateNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!note) return;

    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      const notes: Note[] = JSON.parse(savedNotes);
      const updatedNotes = notes.map(n => 
        n.id === note.id 
          ? { ...n, ...noteData, updatedAt: new Date().toISOString() }
          : n
      );
      
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNote(updatedNotes.find(n => n.id === note.id) || null);
      setIsEditing(false);
    }
  };

  const handleDeleteNote = () => {
    if (!note) return;

    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      const notes: Note[] = JSON.parse(savedNotes);
      const updatedNotes = notes.filter(n => n.id !== note.id);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      router.push('/notes');
    }
  };

  if (!note) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-xl">Note not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {isEditing ? (
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Edit Note</h2>
            <NoteForm
              onSubmit={handleUpdateNote}
              initialData={note}
              buttonText="Update Note"
            />
            <button
              onClick={() => setIsEditing(false)}
              className="w-full mt-4 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 font-medium border border-gray-500"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{note.title}</h1>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Created: {formatDate(note.createdAt)}</p>
                  <p>Updated: {formatDate(note.updatedAt)}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteNote}
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Delete
                </button>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-300 whitespace-pre-wrap text-lg leading-relaxed">
                {note.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}