export const validateUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'URL is required' };
  }

  // Add protocol if missing
  let urlToValidate = url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    urlToValidate = 'https://' + url;
  }

  try {
    new URL(urlToValidate);
    
    // Additional validation
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(url)) {
      return { isValid: false, error: 'Please enter a valid URL' };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Please enter a valid URL format' };
  }
};

export const validateCustomCode = (code: string): { isValid: boolean; error?: string } => {
  if (!code) return { isValid: true }; // Custom code is optional

  if (code.length < 3) {
    return { isValid: false, error: 'Custom code must be at least 3 characters' };
  }

  if (code.length > 20) {
    return { isValid: false, error: 'Custom code must be less than 20 characters' };
  }

  if (!/^[a-zA-Z0-9-_]+$/.test(code)) {
    return { isValid: false, error: 'Custom code can only contain letters, numbers, hyphens, and underscores' };
  }

  return { isValid: true };
};