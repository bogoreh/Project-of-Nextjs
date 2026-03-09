import { NextResponse } from 'next/server';
import { validateUrl, validateCustomCode } from '@/lib/validation';
import { generateShortCode, urlStore, formatUrl } from '@/lib/utils';
import { UrlData } from '@/types';

export async function POST(request: Request) {
  try {
    const { url, customCode } = await request.json();

    // Validate URL
    const urlValidation = validateUrl(url);
    if (!urlValidation.isValid) {
      return NextResponse.json(
        { success: false, error: urlValidation.error },
        { status: 400 }
      );
    }

    // Validate custom code if provided
    if (customCode) {
      const codeValidation = validateCustomCode(customCode);
      if (!codeValidation.isValid) {
        return NextResponse.json(
          { success: false, error: codeValidation.error },
          { status: 400 }
        );
      }

      // Check if custom code already exists
      if (urlStore.has(customCode)) {
        return NextResponse.json(
          { success: false, error: 'This custom code is already taken' },
          { status: 400 }
        );
      }
    }

    const formattedUrl = formatUrl(url);
    const shortCode = customCode || generateShortCode();

    // Create URL data
    const urlData: UrlData = {
      id: Date.now().toString(),
      originalUrl: formattedUrl,
      shortCode,
      createdAt: new Date(),
      clicks: 0,
    };

    // Store in memory
    urlStore.set(shortCode, urlData);

    // Create short URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const shortUrl = `${baseUrl}/${shortCode}`;

    return NextResponse.json({
      success: true,
      data: {
        shortUrl,
        originalUrl: formattedUrl,
        shortCode,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}