// src/components/Education.jsx
const Education = () => {
  const education = [
    {
      degree: "Patan Multiple Campus Bachelor in Business Administration",
      institution: "Tribhuvan University",
      period: "2019- 2024",
      details: "Graduated Magna Cum Laude with a 3.8 GPA. Relevant coursework: Advanced Financial Accounting, Auditing, Taxation, Business Law, and Ethics."
    },
    {
      degree: "V.S. Niketan Higher Secondary School",
      institution: "+2 | Computer Major",
      period: "2017-2019",
      details: "Focused on Accounts, including subjects such as Financial Accounting, Cost Accounting."
    }
  ]

  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Education & Certifications</h2>
        
        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800">{edu.degree}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                <p className="text-gray-600 font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-1 sm:mt-0">{edu.period}</p>
              </div>
              <p className="text-gray-600 mt-4">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education