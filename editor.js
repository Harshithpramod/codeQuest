document.addEventListener('DOMContentLoaded', () => {
    const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
        lineNumbers: true,
        mode: 'javascript'
    });

    document.getElementById('run-code').addEventListener('click', () => {
        const code = editor.getValue();
        executeCode(code);
    });
});
