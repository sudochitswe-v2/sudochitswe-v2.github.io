export async function getDecodedAboutText(): Promise<string> {
  try {
    const res = await fetch('/context/about.txt');
    if (!res.ok) {
      console.warn('Failed to fetch about.txt');
      return '';
    }
    const text = await res.text();
    const cleanText = text.trim();
    
    // Only attempt to decode if it actually looks like base64
    // (You mentioned you will base64 encode the file itself)
    if (typeof window !== 'undefined') {
      try {
        return atob(cleanText);
      } catch (e) {
        // Fallback in case the file isn't actually base64 encoded yet
        return cleanText;
      }
    }
    
    // For server-side rendering/build time
    try {
      return Buffer.from(cleanText, 'base64').toString('utf8');
    } catch (e) {
       return cleanText;
    }
  } catch (e) {
    console.error('Error fetching/decoding about text', e);
    return '';
  }
}
