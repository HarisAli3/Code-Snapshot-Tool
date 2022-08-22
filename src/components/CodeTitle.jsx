import { useState } from "react"

const CodeTitle = () => {
  const [title, setTitle] = useState('My Sum Function 🤓')
  const [showInput, setShowInput] = useState(false)

  return (
    <div 
      className="code-heading"
      onClick={() => {if(title.length === 0) setShowInput(true)}}
    >
      <div className="code-heading-dot-1"/>
      <div className="code-heading-dot-2"/>
      <div className="code-heading-dot-3"/>
      <div className="code-heading-title">
        {showInput ? (
          <div className="flex justify-between align-center">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onBlur={() => setShowInput(false)}
              onKeyDown={e => e.key === 'Enter' && setShowInput(false)}
            />
            <div
              className="flex align-center"
              title="Save title"
              onBlur={() => setShowInput(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="var(--color-6)" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>
            </div>
          </div>
        ) : (
          <h5
            onClick={() => setShowInput(true)}
          >
            {title}
          </h5>
        )}
      </div>
    </div>
  )
}

export default CodeTitle