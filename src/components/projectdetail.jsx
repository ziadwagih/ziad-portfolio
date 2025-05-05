// src/components/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom'

const projectData = {
  'project1': {
    title: 'Project One',
    description: 'Full case study of project one...',
    image: '/project1.jpg',
  },
  // add entries for project2 & project3...
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectData[id]

  if (!project) return <p className="p-6">Project not found</p>

  return (
    <div className="px-6 py-20 max-w-3xl mx-auto text-gray-200">
      <Link to="/" className="underline mb-4 block">← Back to home</Link>
      <h1 className="text-4xl font-heading text-accent mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full mb-6 rounded-lg" />
      <p className="text-lg leading-relaxed">{project.description}</p>
    </div>
  )
}
