export interface UrlData {
  id: string;
  originalUrl: string;
  shortCode: string;
  createdAt: Date;
  clicks: number;
}

export interface UrlResponse {
  success: boolean;
  data?: {
    shortUrl: string;
    originalUrl: string;
    shortCode: string;
  };
  error?: string;
}

export interface FormData {
  url: string;
  customCode?: string;
}