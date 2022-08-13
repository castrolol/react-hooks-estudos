import React, { useEffect, useState } from 'react';

function Simple() {
  const [text, setText] = useState('');

  const isValid = text == 'devmt';
  const color = isValid ? 'green' : 'red';

  useEffect(() => {
    document.title = "O texto é " + text;
  }, [text])

  return (
    <div>
      <input text={text} onChange={(e) => setText(e.target.value)} />
      <h1 style={{ color }}> {text} </h1>
    </div>
  );
}

export default Simple;
