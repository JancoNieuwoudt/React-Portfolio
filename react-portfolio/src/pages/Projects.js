import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'This is a brief description of Project One. It showcases the use of React and other modern web technologies.',
            link: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'This is a brief description of Project Two. It focuses on building responsive web applications.',
            link: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            description: 'This is a brief description of Project Three. It involves creating a full-stack application with a Node.js backend.',
            link: 'https://github.com/user/project-three'
        }
    ];

    return (
        <div className="container">
            <div className="card">
                <h2>My Projects</h2>
                <p>This is the projects page. Here you can find information about the projects I have worked on.</p>
            </div>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;