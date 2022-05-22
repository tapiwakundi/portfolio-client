import { Image } from './Common'

export type Project = {
    id: string;
    name: string;
    organization: string;
    shortDescription: string;
    thumbnail: Image
    banner: Image
    objective: string;
    features: string
    images: ProjectImage[]
    challenges: Challenge[]
    majorTasks: string
    technologies: string
    year: number
}

type ProjectImage = {
    fieldName: {
        publicUrl: string;
    }
}

type Challenge = {
    name: string;
    description: string;
}

