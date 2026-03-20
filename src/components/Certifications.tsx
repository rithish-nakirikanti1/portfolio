import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      description: 'Foundation-level AWS certification demonstrating cloud knowledge and best practices',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'AWS Cloud Solution Architect Simulation',
      issuer: 'Amazon Web Services',
      description: 'Hands-on experience in designing and implementing cloud solutions on AWS',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications validating cloud and DevOps expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className={`bg-gradient-to-r ${cert.gradient} p-1`}>
                <div className="bg-white p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${cert.gradient} rounded-lg`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
