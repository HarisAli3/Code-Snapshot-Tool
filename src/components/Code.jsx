import Editor from 'react-simple-code-editor';
import Prism from "prismjs";


const Code = ({code, setCode}) => {
    return (
        <div className="code-input line-numbers">
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => Prism.highlight(code, Prism.languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
        </div>
    )
}

export default Code