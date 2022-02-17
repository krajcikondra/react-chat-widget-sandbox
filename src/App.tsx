import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  return (
      <div className="App">
        <Widget
            emojis={true}
            emojiSet="google"
        />
      </div>
  );
}

export default App;
