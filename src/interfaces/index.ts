export interface IData {
    name: string;
    isFolder: boolean;
    children?: IData[];
    fileContent?: string;
}