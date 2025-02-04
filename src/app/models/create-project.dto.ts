import { ColorTheme } from "./project.model";

export interface CreateProjectDTO{
    name: string,
    ownerId: string,
    colortheme?: ColorTheme
}