import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}