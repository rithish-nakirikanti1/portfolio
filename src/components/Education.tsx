import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech - Computer Science (AI & ML)',
      institution: 'Malla Reddy University',
      year: '2025',
      grade: 'CGPA: 7.1 / 10',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      degree: 'Intermediate - MPC',
      institution: 'Narayana Junior College',
      year: '2021',
      grade: 'GPA: 8.3 / 10',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      degree: 'SSC',
      institution: 'Narayana School',
      year: '2019',
      grade: 'GPA: 9.3 / 10',
      gradient: 'from-violet-600 to-purple-600'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${edu.gradient} p-6`}>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{edu.degree}</h3>
                <p className="text-white/90 text-center text-sm">{edu.institution}</p>
              </div>

              <div className="p-6 text-center">
                <p className="text-gray-600 font-medium mb-2">{edu.year}</p>
                <p className="text-gray-800 font-semibold text-lg">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
