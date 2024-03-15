import React, { useState, useEffect } from "react";
import projectData from '../assets/data/projects.json';
import archiveData from '../assets/data/archive.json';
import { Link, useNavigate } from "react-router-dom";
import '../css/Projects.css';

const setCookie = (cname, cvalue, exhours) => {
    const d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const ProjectList = () => {
    const navigate = useNavigate();
    const handleItemClick = (path) => {
        const pageBody = document.getElementById("page-body");
        pageBody.style.animation = 'fadeOut .3s';
        setTimeout(() => {
            pageBody.style.animation = 'fadeOut .3s';
            pageBody.style.display = 'none';
            setTimeout(() => {
                navigate(path)
                pageBody.style.animation = 'fadeIn .3s';
                setTimeout(() => {
                    pageBody.style.display = 'flex';

                }, 300);
            }, 100);
        }, 300);

    };

    return (
        <>
            {projectData.projects.map(project => (
                <Link className="project title" key={project.key} onClick={() => handleItemClick('/projects/' + project.path)}>
                    <h1>{project.name.toUpperCase()}</h1>
                    <div className="tags">
                        {project.tags.map(tag => (
                            <p className="tag text ls-1">{tag.toUpperCase()}</p>
                        ))}
                    </div>
                </Link >
            ))}
        </>
    )
}

const ArchiveList = () => {
    const navigate = useNavigate();
    const handleItemClick = (path) => {
        const pageBody = document.getElementById("page-body");
        pageBody.style.animation = 'fadeOut .3s';
        setTimeout(() => {
            pageBody.style.animation = 'fadeOut .3s';
            pageBody.style.display = 'none';
            setTimeout(() => {
                navigate(path)
                pageBody.style.animation = 'fadeIn .3s';
                setTimeout(() => {
                    pageBody.style.display = 'flex';

                }, 300);
            }, 100);
        }, 300);

    };

    return (
        <>
            {archiveData.archive.map(version => (
                <Link className="archiveItem title" key={version.key} onClick={() => handleItemClick(version.path)} >
                    <h1>{version.name.toUpperCase()}</h1>
                </Link >
            ))}
        </>
    )
}


const Projects = () => {
    const [selected, setSelected] = useState('');

    const titles = [
        { id: "projects-title", text: "PROJECTS", value: "projects" },
        { id: "archive-title", text: "ARCHIVE", value: "archive" }
    ];

    const handleTitleClick = (title) => {
        setSelected(title);
        setCookie('selected', title, 2);
    };

    useEffect(() => {
        const cookie = getCookie('selected');
        console.log(cookie)
        if (cookie === 'projects') {
            setTimeout(() => {
                setSelected('projects')
            }, 300);
        } else if (cookie === 'archive') {
            setTimeout(() => {
                setSelected('archive')
            }, 300);
        } else {
            setTimeout(() => {
                setSelected('projects')
            }, 300);
            setCookie('selected', 'projects', 2)
        }
    }, [])
    return (
        <>
            <div id="projects-list-div">
                <div id="titles">
                    {titles.map(title => (
                        <h1
                            key={title.id}
                            id={title.id}
                            className={`title ${selected === title.value ? "selected-title" : ""}`}
                            onClick={() => handleTitleClick(title.value)}
                        >
                            {title.text}
                        </h1>
                    ))}
                </div>
                <div id="list">
                    {selected === 'projects' ? <ProjectList /> : <ArchiveList />}
                </div>
            </div>
        </>
    );
};

export default Projects;
