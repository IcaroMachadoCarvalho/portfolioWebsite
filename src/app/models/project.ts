export interface project{
  id: number;
  name: string;
  description: string;
  imgProject: string;
  urlGithub?: string;
  urlDeploy?:string;
  languages: string[];
  languagesImgs: string[];
}
