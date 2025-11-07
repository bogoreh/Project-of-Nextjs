import Link from 'next/link';
import { Note } from '@/types/note';
import { formatDate } from '@/lib/utils';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link href={`/notes/${note.id}`}>
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-gray-600 hover:bg-gray-750 transition-all duration-200 cursor-pointer h-full shadow-lg hover:shadow-xl">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {note.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {note.content}
        </p>
        <div className="text-sm text-gray-500">
          Updated: {formatDate(note.updatedAt)}
        </div>
      </div>
    </Link>
  );
}