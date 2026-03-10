export interface MarkdownContent {
  content: string;
  title: string;
  lastModified: Date;
}

export interface ToastMessage {
  type: 'success' | 'error' | 'info';
  message: string;
}