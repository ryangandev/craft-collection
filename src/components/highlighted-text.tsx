import React from 'react';

type HighlightedTextProps = {
  text: string;
  highlightedString: string;
};

/**
 * `highlightedString` usually comes straight from a search input, so it is
 * escaped before it goes into a pattern. Unescaped, a lone `(` throws
 * `SyntaxError: Invalid regular expression` during render, and a `.` matches
 * every character.
 */
const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default function HighlightedText({
  text,
  highlightedString,
}: HighlightedTextProps) {
  if (!highlightedString.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(
    new RegExp(`(${escapeRegExp(highlightedString)})`, 'gi'),
  );

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlightedString.toLowerCase() ? (
          <span key={index} className="text-orange-700 dark:text-orange-400">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  );
}
