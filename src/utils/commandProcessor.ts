const COMMANDS = {
  help: `Available commands:
  help      - Show available commands
  about     - Show professional summary
  skills    - Show technical skillset
  experience - Show work experience
  projects  - Show notable projects
  contact   - Show contact information
  clear     - Clear the terminal
  banner    - Show the welcome banner`,

  about: `Backend-first full-stack developer with 5+ years of experience building scalable systems in ERP, healthcare, SaaS, and e-commerce. 
Specialized in mobile backend development, API design, and server-side logic to deliver seamless user experiences. 
Own the entire backend lifecycle from architecture to deployment with strong DevOps capabilities. 
Focused on clean code, measurable impact, and continuous improvement.`,

skills: `TECHNICAL SKILLS:

+------------------+--------------------------------------------------------------+
| Backend          | PHP (Laravel), Go (Gin), .NET, Node.js (Express.js)          |
+------------------+--------------------------------------------------------------+
| Frontend         | Vue.js, React, Blazor, jQuery                                |
+------------------+--------------------------------------------------------------+
| Database         | MySQL, PostgreSQL, MongoDB, Redis                            |
+------------------+--------------------------------------------------------------+
| DevOps           | Docker, Linux, Nginx, Apache, CI/CD                          |
+------------------+--------------------------------------------------------------+
| Tools            | Git, GitHub, JIRA, Postman, PHPUnit, Docker Compose          |
+------------------+--------------------------------------------------------------+
| Performance      | Query Optimization, Caching, Microservices Architecture      |
+------------------+--------------------------------------------------------------+`,


  experience: `PROFESSIONAL EXPERIENCE:

1. Codelabs Indonesia (11/2019 - Present)
   Role: Senior Backend Developer
   - Reduced complex API response time by 40% via indexing and caching
   - Secured APIs using OWASP standards, nearly eliminating security incidents
   - Unified API response structure, boosting frontend integration speed by 30%
   - Agile collaboration using Trello, Discord, and Google Meet

2. Paseero.ng (06/2023 - 02/2025)
   Role: Backend/DevOps Contractor
   - Boosted SEO by 40% using SSR and dynamic Open Graph metadata
   - Maintained 99.95% uptime with zero-downtime deployments
   - Developed image pipeline with 85% compression and watermark automation
   - Achieved 99% email deliverability through SMTP domain rotation
   - Cut infrastructure costs via database tuning and CDN optimization`,

  projects: `NOTABLE PROJECTS:

- Jismo Educational.
- EMA / Event Management.
- Duvee.
- internal apps ( POS, booking-car, web-app-product, KantorKu)
- Duvee Explores
- AEM Sheetmetal
- DOMO (Dokter Mobil)
- Kepul
- Solusi
- Pegadaian Peduli
- Sitepat
- Toko Baik (Marketplace)
- Konspirasi Snack
- Karuizawa
- URC Lampung
- Fevci
- Zanpay
- Wira Energy (ERP)
- Patlog
- BukaBiz
- Pariwisata Tegal
- Pariwisata Gunung Kidul
- Pariwisata Pemuteran Bali
- Aplikasi Komunitas Kebudayaan`,

  contact: `CONTACT INFORMATION:

Email: gunz.bobz@gmail.com
Phone: +62 812-2324-2307
GitHub: github.com/bobigunardi
LinkedIn: linkedin.com/in/bobigunardi
Location: Cimahi, Indonesia (GMT+7)

Open for collaboration and remote opportunities!`,

banner: `
_           _     _                                   _ _ 
| |__   ___ | |__ (_)   __ _ _   _ _ __   __ _ _ __ __| (_)
| '_ \\ / _ \\| '_ \\| |  / _\` | | | | '_ \\ / _\` | '__/ _\` | |
| |_) | (_) | |_) | | | (_| | |_| | | | | (_| | | | (_| | |
|_.__/ \\___/|_.__/|_|  \\__, |\\__,_|_| |_|\\__,_|_|  \\__,_|_|
                      |___/                               
`,

  clear: '',
};

export const processCommand = (cmd: string): string => {
  const command = cmd.trim().toLowerCase();
  
  if (command === 'clear') {
    return 'CLEAR_TERMINAL';
  }

  if (Object.keys(COMMANDS).includes(command)) {
    return COMMANDS[command as keyof typeof COMMANDS];
  }
  
  if (!command) {
    return '';
  }

  return `Command not found: ${command}. Type 'help' to see available commands.`;
};
