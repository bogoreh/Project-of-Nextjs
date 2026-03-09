import { redirect } from 'next/navigation';
import { urlStore } from '@/lib/utils';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    shortCode: string;
  };
}

export default async function ShortCodeRedirect({ params }: Props) {
  const { shortCode } = await params;
  const urlData = urlStore.get(shortCode);

  if (!urlData) {
    notFound();
  }

  // Increment clicks (in a real app, you'd update this in a database)
  urlData.clicks += 1;
  
  redirect(urlData.originalUrl);
}