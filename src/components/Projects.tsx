import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform DevOps Implementation',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      description: 'Microservices-based deployment environment for an e-commerce platform',
      achievements: [
        'Engineered a microservices-based deployment environment for an e-commerce platform using containerized services deployed on Kubernetes clusters supporting 10+ application containers',
        'Implemented automated infrastructure creation through Terraform scripts managing complete network, compute, and storage resources within AWS cloud environments',
        'Built automated Jenkins pipelines integrating source control, container registry management, and Kubernetes deployment workflows enabling rapid application delivery',
        'Configured high availability architecture including load balancing, distributed storage, and application scaling policies ensuring consistent platform performance during traffic spikes'
      ],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Autism Spectrum Detection Using Hybrid AI Model',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Healthcare AI'],
      description: 'Published research work on AI-based healthcare analysis system',
      achievements: [
        'Developed an AI-based healthcare analysis system integrating machine learning algorithms and deep learning models for early autism risk identification',
        'Implemented a hybrid analytical framework combining Random Forest, XGBoost, CNN models, and NLP-based medical data processing for multi-modal patient evaluation',
        'Built an automated risk scoring mechanism capable of analyzing large medical datasets and structured clinical inputs to support early diagnostic insights',
        'Conducted experimental model evaluation using accuracy, recall, precision, and F1-score metrics, validating the performance of hybrid learning architectures'
      ],
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing practical implementations of cloud architecture, DevOps automation, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <FolderGit2 className="w-8 h-8 text-white" />
                  </div>
                  <ExternalLink className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.description}</p>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
