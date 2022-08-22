import { useState } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { Code, CodeTitle, Menu } from "../components"


const CodeSnippet = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );

    const downloadCode = () => {
        setIsLoading(true)
        const codeNode = document.querySelector('.code-node');
        const parentNode = document.querySelector('.parent-node');
        parentNode.classList.add('opacity-0')
        codeNode.classList.add('downloading-code')

        html2canvas(codeNode, {
            allowTaint: true,
            useCORS: true,
            scale: 2,
            width: codeNode.offsetWidth,
            height: codeNode.offsetHeight,
            dpi: 300,
        }).then(canvas => {
            const png = canvas.toDataURL("image/png")
            saveAs(png, 'code.png')
            setIsLoading(false)
            parentNode.classList.remove('opacity-0')
            codeNode.classList.remove('downloading-code')
        }).catch(err => {
            console.log(err)
            setIsLoading(false)
            parentNode.classList.remove('opacity-0')
            codeNode.classList.remove('downloading-code')
        })
    }


    return (
        <main>
            <Menu code={code} setCode={setCode} downloadCode={downloadCode} isLoading={isLoading} />
            <div className="parent-node">
                <div className="code-node">
                    <div className="code">
                        <CodeTitle/>
                        <Code code={code} setCode={setCode} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CodeSnippet