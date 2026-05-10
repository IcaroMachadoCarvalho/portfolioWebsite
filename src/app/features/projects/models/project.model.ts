export interface Project {
  id: number;
  status: string;
  name: string;
  isFeatured?: boolean;
  longDescription: string;
  shortDescription: string;
  imgProject: string;
  urlGithub?: string;
  urlDeploy?: string;
  languages: string[];
  languagesImgs: string[];
}
