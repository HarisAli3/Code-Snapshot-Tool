import { Code, CodeTitle } from "../components"


const CodeSnippet = () => {
    return (
        <main>
            <h1 className="title-1">Share your code</h1>
            <h1 className="title-1">the pretty way</h1>
            <div className="code">
                <CodeTitle />
                <Code />
            </div>
        </main>
    )
}

export default CodeSnippet