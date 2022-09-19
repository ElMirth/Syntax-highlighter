import './App.css'
import {useState} from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import supportedLanguages from 'react-syntax-highlighter/dist/cjs/languages/hljs/supported-languages';
import CopyToClipboard from 'react-copy-to-clipboard';

function App() {
  const [text, setText] = useState('');
  const defaultLanguage = 'javascript'
  const defaultTheme = 'agate'
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <div className='highlighter'>
      <div className='highlighter__code'>
        <select
          defaultValue={defaultLanguage}
          name="languages"
          onChange={(e) => setLanguage(e.target.value)}
        >
          {supportedLanguages.map((language, i) => (
            <option key={i}>{language}</option>
          ))}
        </select>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write some code"
        />
      </div>
      <div className='highlighter__code'>
        <select
          defaultValue={defaultTheme}
          name="themes"
          onChange={(e) => setTheme(e.target.value)}
        >
          {Object.keys(themes).map((theme, i) => (
            <option key={i}>{theme}</option>
          ))}
        </select>
        <div className='highlighter__result'>  
          {/* highlighted syntax */}
          <CopyToClipboard text={text} onCopy={() => alert("Copied")}>
            <button>Copy</button>
          </CopyToClipboard>
          <SyntaxHighlighter language={language} style={themes[theme]}>
            {text}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default App
