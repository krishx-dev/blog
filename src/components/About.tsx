export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-indigo-500/20">
            About Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
            The Authority Blog for <span className="text-indigo-400">Practical AI</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-base">
            This project was founded in 2024 with a single, focused mission: help students, developers, and digital creators cut through the AI noise and build genuine competitive advantages with the right tools.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '🎯',
              title: 'Strict Niche Focus',
              desc: 'Every article, review, and tutorial on this blog is scoped to one niche: AI tools and practical applications for students, developers, and digital creators. No fluff. No generic tech coverage.',
            },
            {
              icon: '🔬',
              title: 'Hands-On Testing',
              desc: 'We don\'t write about tools we haven\'t actually used. Every tool reviewed on this site has been put through real-world tasks by our editorial team before a single word is published.',
            },
            {
              icon: '💰',
              title: 'Pricing Transparency',
              desc: 'AI tool pricing changes constantly. We update our reviews whenever pricing or features change, and we always disclose affiliate relationships clearly so you can trust our recommendations.',
            },
          ].map(item => (
            <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-800 transition-colors">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="border border-gray-800 rounded-2xl bg-gray-900/50 p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '28K+', label: 'Weekly Readers', sub: 'and growing' },
              { value: '200+', label: 'Tools Reviewed', sub: 'hands-on tested' },
              { value: '95%', label: 'Niche Accuracy', sub: 'focused content' },
              { value: 'Since 2024', label: 'Publishing', sub: 'weekly updates' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-300 mb-0.5">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center text-white mb-8">The Editorial Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Your Editor',
                role: 'Editor-in-Chief',
                bio: 'Professional background and expertise in the AI field. Responsible for strategy and final review.',
                avatar: 'YE',
                color: 'from-indigo-600 to-blue-600',
              },
              {
                name: 'Staff Writer 1',
                role: 'Senior Tech Writer',
                bio: 'Technical writing background with years of experience in software development and reviews.',
                avatar: 'W1',
                color: 'from-green-600 to-teal-600',
              },
              {
                name: 'Staff Writer 2',
                role: 'Content Specialist',
                bio: 'Creative content expert focused on educational guides and user experience tutorials.',
                avatar: 'W2',
                color: 'from-purple-600 to-pink-600',
              },
              {
                name: 'Researcher',
                role: 'Tools Specialist',
                bio: 'Expert in technical research and real-world testing of all tools we publish.',
                avatar: 'RS',
                color: 'from-orange-600 to-amber-500',
              },
            ].map(member => (
              <div key={member.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center hover:border-indigo-800 transition-colors">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {member.avatar}
                </div>
                <h4 className="font-bold text-white text-sm mb-0.5">{member.name}</h4>
                <p className="text-xs font-medium text-indigo-400 mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="bg-indigo-950 border border-indigo-900 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-white mb-3">Our Editorial Standards</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            We maintain strict editorial independence. Affiliate links may appear in our content, but they <strong className="text-gray-200">never influence our ratings or recommendations</strong>. We only recommend tools we would genuinely use ourselves. Tools are re-reviewed quarterly to ensure accuracy as the AI landscape evolves.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['✅ Editorially Independent', '✅ Affiliate Disclosed', '✅ Quarterly Re-Reviews', '✅ No Sponsored Rankings'].map(item => (
              <span key={item} className="text-xs bg-indigo-900/60 text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-800">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
