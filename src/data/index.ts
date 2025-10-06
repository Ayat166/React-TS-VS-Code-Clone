export const folderData = {
    name: "react-vscode-clone",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
            children: [],
        },
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "index.html",
                    isFolder: false,
                    fileContent: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React VSCode Clone</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
          `,
                },
                {
                    name: "favicon ",
                    isFolder: false,
                    fileContent: "SVG ICON PLACEHOLDER",
                },
            ],
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "assets",
                    isFolder: true,
                    children: [
                        {
                            name: "logo ",
                            isFolder: false,
                            fileContent: "SVG LOGO PLACEHOLDER",
                        },
                    ],
                },
                {
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            name: "App.tsx",
                            isFolder: false,
                            fileContent: `
import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Explorer } from './Explorer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Explorer />
      </div>
    </div>
  );
}
              `,
                        },
                        {
                            name: "Header.tsx",
                            isFolder: false,
                            fileContent: `
import React from 'react';

export const Header = () => (
  <header className="header">
    <h1>VS Code Clone</h1>
  </header>
);
              `,
                        },
                        {
                            name: "Sidebar.tsx",
                            isFolder: false,
                            fileContent: `
import React from 'react';

export const Sidebar = () => (
  <aside className="sidebar">
    <p>Sidebar</p>
  </aside>
);
              `,
                        },
                        {
                            name: "Explorer.tsx",
                            isFolder: false,
                            fileContent: `
import React from 'react';

export const Explorer = () => (
  <div className="explorer">
    <p>File Explorer</p>
  </div>
);
              `,
                        },
                    ],
                },
                {
                    name: "main.tsx",
                    isFolder: false,
                    fileContent: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
          `,
                },
                {
                    name: "index.css",
                    isFolder: false,
                    fileContent: `
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #1e1e1e;
  color: #fff;
}
          `,
                },
                {
                    name: "vite-env.d.ts",
                    isFolder: false,
                    fileContent: `/// <reference types="vite/client" />`,
                },
            ],
        },
        {
            name: ".gitignore",
            isFolder: false,
            fileContent: `
node_modules
dist
.env
      `,
        },
        {
            name: "package.json",
            isFolder: false,
            fileContent: `
{
  "name": "react-vscode-clone",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1"
  }
}
      `,
        },
        {
            name: "tsconfig.json",
            isFolder: false,
            fileContent: `
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "noEmit": true,
    "strict": true
  },
  "include": ["src"]
}
      `,
        },
        {
            name: "vite.config.ts",
            isFolder: false,
            fileContent: `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
      `,
        },
    ],
};
