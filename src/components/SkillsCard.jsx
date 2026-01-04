export default function SkillsCard() {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        "Node.js (Express)",
        "APIs REST",
        "Autenticação JWT",
        "Validação de dados",
        "Regras de negócio",
      ],
    },
    {
      category: "Database",
      skills: [
        "SQL (PostgreSQL / MySQL)",
        "CRUD",
        "Relacionamentos",
        "Queries básicas",
      ],
    },
    {
      category: "Computer Science",
      skills: [
        "Lógica de programação",
        "Estruturas básicas",
        "Complexidade simples",
        "Em aprendizagem",
      ],
    },
    {
      category: "DevOps & Testing",
      skills: ["Docker", "Testes automatizados"],
    },
  ];

  return (
    <div className="skills-container">
      {skillCategories.map((category, idx) => (
        <div key={idx} className="skill-category">
          <h4 className="skill-category-title">{category.category}</h4>
          <ul className="skill-list">
            {category.skills.map((skill, sidx) => (
              <li key={sidx} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
