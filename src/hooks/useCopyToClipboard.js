import { useState } from 'react';

// Copies text to the clipboard and tracks which id was last copied for
// `resetDelay` ms, so callers can show a temporary "Copied!" confirmation.
export function useCopyToClipboard(resetDelay = 2000) {
  const [copiedId, setCopiedId] = useState(null);

  const copy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), resetDelay);
    } catch {
      setCopiedId(null);
    }
  };

  return [copiedId, copy];
}
