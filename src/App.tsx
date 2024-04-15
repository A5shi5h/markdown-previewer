import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"

function App() {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <>
     <h1>Markdown Previewer</h1>
     <div className='box-container'>
        <textarea name='editor' id='editor' value={markdownText}
           onChange={(e) => {setMarkdownText(e.target.value)}}
        ></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
     </div>
    </>
  )
}

export default App
