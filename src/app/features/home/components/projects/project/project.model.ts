export interface project{
  id: number;
  status:string;
  name: string;
  longDescription: string;
  shortDescription:string;
  imgProject: string;
  urlGithub?: string;
  urlDeploy?:string;
  languages: string[];
  languagesImgs: string[];
}
