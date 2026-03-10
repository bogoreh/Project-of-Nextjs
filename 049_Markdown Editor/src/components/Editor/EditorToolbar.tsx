import React from 'react';
import { Button } from '../UI/Button';

interface EditorToolbarProps {
  onInsert: (text: string) => void;
  onSave: () => void;
  onClear: () => void;
  isSaving?: boolean;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  onInsert,
  onSave,
  onClear,
  isSaving = false,
}) => {
  const insertMarkdown = (type: string) => {
    const markdownMap: Record<string, string> = {
      bold: '**bold text**',
      italic: '*italic text*',
      heading: '# Heading',
      link: '[link text](url)',
      image: '![alt text](image-url)',
      code: '`code`',
      list: '- list item',
      quote: '> quote',
    };
    onInsert(markdownMap[type]);
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-gray-50 border-b border-gray-200">
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('bold')}>
        <span className="font-bold">B</span>
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('italic')}>
        <span className="italic">I</span>
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('heading')}>
        H1
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('link')}>
        🔗
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('image')}>
        🖼️
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('code')}>
        &lt;/&gt;
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('list')}>
        • list
      </Button>
      <Button size="sm" variant="outline" onClick={() => insertMarkdown('quote')}>
        "
      </Button>
      <div className="flex-1"></div>
      <Button size="sm" variant="secondary" onClick={onClear}>
        Clear
      </Button>
      <Button size="sm" variant="primary" onClick={onSave} isLoading={isSaving}>
        Save
      </Button>
    </div>
  );
};