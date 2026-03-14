export interface FileData {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
  uploadDate: string;
  url?: string;
}

export interface UploadProgress {
  fileName: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}