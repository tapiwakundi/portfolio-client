import { Project } from './Project'
import { Experience } from './Experience'

export type User = {
    name: string;
    projects: Project[];
    experiences: Experience[];
}