export default function Hero() {
  const scrollToContent = () => {
    const el = document.getElementById('tech-reviews');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16">
      {/* Featured Hero Banner */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '520px' }}>
        <img
          src="/images/hero-bg.jpg"
          alt="AI workspace for students, developers and creators"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-800/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full pb-12 pt-24 md:pt-36">
          {/* Featured tag */}
          <span className="inline-flex items-center gap-1.5 mb-4 text-indigo-300 text-sm font-semibold tracking-widest uppercase">
            <span className="w-5 h-px bg-indigo-400 inline-block" />
            Featured Article
          </span>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Top AI Tools in 2026: The Complete Guide for Students, Developers & Digital Creators
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Whether you're cramming for exams, shipping production code, or building a content empire — AI is your most powerful co-pilot. Here's everything you need to know to leverage it in 2026.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-indigo-500/30 hover:shadow-xl"
              >
                Read Full Guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <img
                  src="https://ui-avatars.com/api/?name=Editorial+Team&background=6366f1&color=fff&size=32"
                  alt="Author"
                  className="w-8 h-8 rounded-full border-2 border-indigo-400"
                />
                <span>
                  <span className="text-white font-medium">Editorial Team</span>
                  <span className="mx-1.5">·</span>
                  June 12, 2026
                  <span className="mx-1.5">·</span>
                  18 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-5 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            {[
              { value: '3,200+', label: 'words of insights' },
              { value: '20+', label: 'AI tools reviewed' },
              { value: '3', label: 'audience groups covered' },
              { value: '100%', label: 'niche-focused content' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-gray-400">
                <span className="text-white font-bold text-base">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience Tags */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-gray-500 font-medium">Written for:</span>
            {[
              { label: '🎓 Students', color: 'bg-blue-50 text-blue-700' },
              { label: '💻 Developers', color: 'bg-green-50 text-green-700' },
              { label: '🎨 Digital Creators', color: 'bg-purple-50 text-purple-700' },
            ].map((tag) => (
              <span key={tag.label} className={`px-3 py-1 rounded-full font-semibold text-xs tracking-wide ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
