import React from 'react';

const HomePage = ({ user, onNavigate, onLogout }) => {
  const weeks = [
    { week: 1, titleEn: "Introduction to Databases", titleAr: "مقدمة في قواعد البيانات", icon: "🗄️" },
    { week: 2, titleEn: "Creating a Database", titleAr: "إنشاء قاعدة بيانات", icon: "📁" },
    { week: 3, titleEn: "Creating Tables (Part 1)", titleAr: "إنشاء الجداول (1)", icon: "📋" },
    { week: 4, titleEn: "Creating Tables (Part 2)", titleAr: "إنشاء الجداول (2)", icon: "🔗" },
    { week: 5, titleEn: "Creating Tables (Part 3)", titleAr: "إنشاء الجداول (3)", icon: "📊" },
    { week: 6, titleEn: "Inserting Data (Part 1)", titleAr: "إدراج البيانات (1)", icon: "✏️" },
    { week: 7, titleEn: "Inserting Data (Part 2)", titleAr: "إدراج البيانات (2)", icon: "📝" },
    { week: 8, titleEn: "Query Basics (Part 1)", titleAr: "أساسيات الاستعلام (1)", icon: "🔍" },
    { week: 9, titleEn: "Query Basics (Part 2)", titleAr: "أساسيات الاستعلام (2)", icon: "🔗" },
    { week: 10, titleEn: "Advanced Queries (Part 1)", titleAr: "الاستعلامات المتقدمة (1)", icon: "🧩" },
    { week: 11, titleEn: "Advanced Queries (Part 2)", titleAr: "الاستعلامات المتقدمة (2)", icon: "🔄" },
    { week: 12, titleEn: "Database Design & Normalization", titleAr: "تصميم قواعد البيانات والتطبيع", icon: "🏗️" },
  ];

  const completedWeeks = Object.entries(user.progress)
    .filter(([key, val]) => val.completed && parseInt(key.replace('week', '')) <= 12)
    .length;
  const progressPercent = Math.round((completedWeeks / 12) * 100);

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-emerald-400';
    if (grade === 'B+' || grade === 'B') return 'text-blue-400';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-400';
    if (grade === 'D+' || grade === 'D') return 'text-orange-400';
    if (grade === 'F') return 'text-red-400';
    return 'text-slate-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/30">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black">TU</span>
              </div>
              <div>
                <h1 className="text-white font-bold">Introduction to Database</h1>
                <p className="text-amber-300/70 text-xs font-arabic">مقدمة في قواعد البيانات</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => onNavigate('profile')} className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{user.studentName.charAt(0)}</div>
                <div className="text-left hidden sm:block">
                  <p className="text-white text-sm font-semibold">{user.studentName}</p>
                  <p className="text-slate-400 text-xs">{user.studentNumber}</p>
                </div>
              </button>
              <button onClick={onLogout} className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Overall Progress | التقدم العام</h3>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-white">{progressPercent}%</span>
              <span className="text-slate-400 text-sm mb-1">{completedWeeks}/12 weeks</span>
            </div>
            <div className="mt-4 h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Current Grade | الدرجة الحالية</h3>
            <div className="flex items-end gap-3">
              <span className={`text-4xl font-bold ${getGradeColor(user.overallGrade)}`}>{user.overallGrade}</span>
              <span className="text-slate-400 text-sm mb-1">{user.totalScore}% avg</span>
            </div>
            <p className="text-slate-500 text-xs mt-3">Based on completed exercises</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-2">Student Info | معلومات الطالب</h3>
            <div className="space-y-2">
              <div className="flex justify-between"><span className="text-slate-500 text-sm">Name:</span><span className="text-white text-sm">{user.studentName}</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">ID:</span><span className="text-white text-sm font-mono">{user.studentNumber}</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">Section:</span><span className="text-amber-400 text-sm">{user.sectionNumber}</span></div>
            </div>
          </div>
        </div>

        {/* Course Weeks */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">Course Weeks</h2>
          <p className="text-amber-300/70 font-arabic">أسابيع الدورة</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weeks.map((week) => {
            const weekProgress = user.progress[`week${week.week}`];
            const isCompleted = weekProgress?.completed;
            const score = weekProgress?.score || 0;
            return (
              <div key={week.week} onClick={() => onNavigate(`week${week.week}`)} className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all hover:scale-[1.02] ${isCompleted ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-slate-700/30 border-slate-600 hover:border-amber-500/50'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${isCompleted ? 'bg-emerald-600' : 'bg-amber-600'}`}>{isCompleted ? '✓' : week.icon}</div>
                  <div className="flex-1">
                    <span className="text-xs text-amber-400 font-semibold">Week {week.week} | الأسبوع {week.week}</span>
                    <h4 className="text-white font-semibold text-sm">{week.titleEn}</h4>
                    <p className="text-amber-300/60 text-xs font-arabic">{week.titleAr}</p>
                  </div>
                </div>
                {isCompleted ? (
                  <div className="mt-3 flex items-center justify-between bg-slate-800/50 rounded-lg p-2">
                    <span className="text-emerald-400 text-xs">Completed</span>
                    <span className={`font-bold text-sm ${score >= 90 ? 'text-emerald-400' : score >= 75 ? 'text-blue-400' : score >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>{score}%</span>
                  </div>
                ) : (
                  <div className="mt-3 text-center"><span className="text-slate-400 text-xs">Click to start →</span></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <footer className="py-6 text-center border-t border-slate-800 mt-8">
        <p className="text-slate-500 text-sm">Introduction to Database | Taif University | جامعة الطائف</p>
        <p className="text-slate-600 text-xs mt-2">College of Computers & Information Technology</p>
      </footer>
    </div>
  );
};

export default HomePage;
