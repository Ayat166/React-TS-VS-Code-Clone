import type { IData } from "../interfaces";

export const folderData : IData = {
    name: "VS Code Clone",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
            children: [
                {
                    name: ".vitest",
                    isFolder: true,
                    children: [ 
                        {
                            name: "index.d.ts",
                            isFolder: false,
                            fileContent: "console.log('Hello World')"
                        }
                    ]
                },
                {
                    name: "index.js",
                    isFolder: false,
                    fileContent: "console.log('Hello World')"
                },
                {
                    name: "index.d.ts",
                    isFolder: false,
                    fileContent: "console.log('Hello World')"
                }
            ]
        },
        {
            name: "index.ts",
            isFolder: false,
            fileContent: "console.log('Hello World')"
        }
        ]
}