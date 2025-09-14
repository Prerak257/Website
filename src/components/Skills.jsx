// src/components/Skills.jsx
const Skills = () => {
  const technicalSkills = [
    { name: 'Tally', level: 90 },
    { name: 'QuickBooks', level: 50 },
    { name: 'Odoo', level: 95 },
    { name: 'Canva', level: 80 },
    { name: 'Microsoft Office', level: 95 },
    { name: 'Budgeting & Forecasting', level: 82 }
  ]

  const softSkills = [
    'Attention to Detail',
    'Analytical Thinking',
    'Time Management',
    'Ethical Practice',
    'Communication',
    'Problem Solving'
  ]

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Skills & Expertise</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-blue-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Soft Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-blue-800 mt-8 mb-4">Software Proficiency</h3>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">QuickBooks</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Excel</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Odoo</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tally</span>
              {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">  </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills