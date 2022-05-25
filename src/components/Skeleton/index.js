import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => { }

const Experience = () => {
    return (
        <ContentLoader
            speed={2}
            width={700}
            height={400}
            viewBox="0 0 700 400"
            backgroundColor="#404040"
            foregroundColor="#121212"
        >
            <rect x="13" y="3" rx="3" ry="3" width="159" height="113" />
            <rect x="197" y="-2" rx="0" ry="0" width="392" height="305" />
        </ContentLoader>
    )
}

const Project = () => {
    return (
        <ContentLoader
            speed={2}
            width={700}
            height={400}
            viewBox="0 0 700 400"
            backgroundColor="#404040"
            foregroundColor="#121212"
        >
            <rect x="0" y="1" rx="3" ry="3" width="587" height="286" />
        </ContentLoader>
    )
}

Skeleton.Experience = Experience
Skeleton.Project = Project