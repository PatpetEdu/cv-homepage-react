import React, { useState, useEffect } from 'react';
import groupImage from '../images/group.jpg';
import otherProjectImage from '../images/projectImage.jpg';
import '../Modal.css';

export default function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('https://api.github.com/users/PatpetEdu/starred');
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchProjects();
    }, []);

    const getProjectImage = (projectName) => {
        const projectImages = {
            'labb-3---skoldatabas': otherProjectImage,
            'bankapp_groupproject': groupImage,
        };

        return projectImages[projectName.toLowerCase()] || groupImage;
    };

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <main>
            <section>
                <div className="port">
                    <h1>Min Portfolio</h1>
                    {loading ? (
                        <p>Laddar projekt...</p>
                    ) : (
                        <ul className="project-list">
                            {projects.map(project => (
                                <li key={project.id} className="project">
                                    <h2>{project.name}</h2>
                                    <img
                                        src={getProjectImage(project.name)}
                                        alt={project.name}
                                        className="project-image"
                                    />
                                    <p>{project.description}</p>
                                    <button onClick={() => openModal(project)}
                                    className='button-show-project'
                                    >Visa projekt</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
            {selectedProject && (
                <Modal project={selectedProject} onClose={closeModal} />
            )}
        </main>
    );
}

const Modal = ({ project, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{project.name}</h2>
                <img
                    src={getProjectImage(project.name)}
                    alt={project.name}
                    className="project-image"
                />
                <p>{project.description}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer"
                className='button-toproject-modal'
                >Till projektet</a>
                <button onClick={onClose}
                className='button-close-modal'
                >Stäng</button>
            </div>
        </div>
    );
};

const getProjectImage = (projectName) => {
    const projectImages = {
        'labb-3---skoldatabas': otherProjectImage,
        'bankapp_groupproject': groupImage,
    };

    return projectImages[projectName.toLowerCase()] || groupImage;
};
