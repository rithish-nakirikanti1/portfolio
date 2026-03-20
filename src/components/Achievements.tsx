import { Trophy, Star, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'University Short Film Competition - 1st Prize',
      description:
        'Won 1st Prize in a university short film competition among 40+ participating teams, demonstrating creativity, collaboration, and project leadership.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'INTELLITHON Technology Competition',
      description:
        'Participated in INTELLITHON technology competition, solving real-world technical challenges in cloud and software development.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Academic Group Initiatives Leadership',
      description:
        'Organized and coordinated multiple academic group initiatives involving 15+ students, improving collaboration and event execution.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and accomplishments demonstrating leadership and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${achievement.color} rounded-xl mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
