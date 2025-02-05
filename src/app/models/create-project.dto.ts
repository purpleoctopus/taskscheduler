import { ColorTheme } from "./project.model";

export interface CreateProjectDTO{
    name: string,
    colortheme?: ColorTheme
}