import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const initMermaid = () => {
    document.querySelectorAll('pre > code.language-mermaid').forEach((code) => {
        const pre = code.parentElement;
        pre.classList.add('mermaid');
        pre.textContent = code.textContent;
    });

    mermaid.initialize({
        startOnLoad: true,
        theme: 'dark'
    });
};
