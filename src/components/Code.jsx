import { useRef, useEffect } from 'react';
import Prism from "prismjs";


const Code = ({code, setCode}) => {

    useEffect(() => {
        Prism.highlightAll();
    } , [code]);

    return (
        <div className="code-input">
            <pre>
                <code className="language-js">
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default Code