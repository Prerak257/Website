// src/components/Experience.jsx
const Experience = () => {
  const experiences = [
    {
      title: "Accountant Assistant",
      company: "Green Tick Pvt Ltd.",
      period: "April 2025 - Present",
      responsibilities: [
        "Prepared monthly financial statements for 15+ clients",
        "Assisted in tax return preparation for individuals and small businesses",
        "Reconciled bank statements and credit card transactions",
        "Maintained accounts payable and accounts receivable records",
        "Supported senior accountants in audit preparations"
      ]
    },
    {
      title: "CSD-Intern",
      company: "Rastriya Banijya Bank",
      period: "June 2024 - August 2024",
      responsibilities: [
        "Maintain accurate financial records and perform data entry for accounting transactions.",
        "Process cheque and statement printing, ensuring timely and accurate delivery.",
        "Manage account opening and closing procedures in compliance with company policies.",
        "Organized and maintained financial documents"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-blue-800">{exp.title}</h3>
                <p className="text-gray-600 mt-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
              </div>
              
              <div className="md:w-3/4">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience