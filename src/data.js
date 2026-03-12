export const SKILLS = [
  {id: 1, title: "Java", icon: "☕", description: "Minecraft plugins for servers and proxies like Paper/Bukkit and Velocity, also some client mods for Fabric"},
  {id: 2, title: "Kotlin", icon: "🇰", description: "Minecraft plugins for Paper/Bukkit and Velocity, mainly for Open Redstone Engineers projects"},
  {id: 3, title: "Python", icon: "🐍", description: "Discord bots, data analysis with matplotlib, and games with Godot"},
  {id: 4, title: "C#", icon: "#️⃣", description: "Unity games and small console applications"},
  {id: 5, title: "TypeScript", icon: "🚀", description: "Mobile apps"},
  {id: 6, title: "HTML", icon: "🌐", description: "Building websites and simple web pages"},
  {id: 7, title: "PHP", icon: "🐘", description: "Server-side web projects and dynamic web pages"},
  {id: 8, title: "React (+ Native)", icon: "⚛️", description: "Web and mobile apps"},
  {id: 9, title: "CSS", icon: "🎨", description: "Styling and design for websites and apps"},
  {id: 10, title: "JavaScript", icon: "⚡", description: "Interactive web pages and simple browser games"}
]

export const PROJECTS = [
  {
    id: 1,
    title: "MiniGameCore",
    description: "Minecraft MiniGame Plugin for the Open Redstone Engineers.",
    tags: ["Java"],
    github: "https://github.com/Wueffi/MiniGameCore",
    year: "2025/2026",
  },
  {
    id: 2,
    title: "BedWars",
    description: "Minecraft BedWars Paper/Bukkit Plugin that uses MiniGameCore's API.",
    tags: ["Java"],
    github: "https://github.com/Wueffi/BedWars",
    year: "2026",
  },
  {
    id: 3,
    title: "TaskManager",
    description: "Minecraft Fabric Mod to monitor the Game's and each Mod's performance.",
    tags: ["Java"],
    github: "https://github.com/Wueffi/TaskManager",
    year: "2026",
  },
  {
    id: 4,
    title: "AirPlace",
    description: "Minecraft Fabric Utility Mod that helps when making Builds.",
    tags: ["Java"],
    github: "https://github.com/Wueffi/AirPlace",
    year: "2025",
  },
  {
    id: 5,
    title: "RegReader",
    description: "Minecraft Fabric Utility Mod that helps when making Redstone Builds.",
    tags: ["Java"],
    github: "https://github.com/Wueffi/RegReader",
    year: "2025",
  },
  {
    id: 6,
    title: "MattBotWings",
    description: "Discord bot for Mattbatwings Redstone Army Discord-Server.",
    tags: ["Python"],
    github: "https://github.com/Wueffi/MattBotWings",
    year: "2025",
  },
  {
    id: 7,
    title: "Patrick",
    description: "Worked on: ORE's Discord bot.",
    tags: ["Python"],
    github: "https://github.com/Wueffi/MattBotWings",
    year: "2025",
  },
  {
    id: 8,
    title: "ChattORE",
    description: "Worked on: ORE's Custom Chat System for Velocity Proxies.",
    tags: ["Kotlin"],
    github: "https://github.com/OpenRedstoneEngineers/ChattORE",
    year: "2024/2025",
  },
  {
    id: 9,
    title: "TrialORE",
    description: "Worked on: ORE's trial management plugin for Paper/Bukkit Servers.",
    tags: ["Kotlin"],
    github: "https://github.com/OpenRedstoneEngineers/TrialORE",
    year: "2025",
  },
  {
    id: 10,
    title: "SwipePatrick",
    description: "First Mobile App using React Native & TypeScript",
    tags: ["React", "TypeScript", "CSS", "JavaScript"],
    github: "https://github.com/Wueffi/SwipePatrick",
    year: "2025",
  },
  {
    id: 11,
    title: "KanBan",
    description: "First Web App using React",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Wueffi/kanban",
    year: "2025",
  },
  {
    id: 12,
    title: "Portfolio",
    description: "Second Web App using React and Vite showing this Website",
    tags: ["React", "Vite", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Wueffi/wueffi.github.io",
    year: "2026",
  }
]

export const TAG_COLORS = {
  Java: "#f7df1e",
  Kotlin: "#9c00b1",
  Python: "#006dac",
  TypeScript: "#32d600",
  React: "#c70000",
  HTML: "#fff",
  CSS: "#00eba4",
  JavaScript: "#ff00f2",
  React: "#ffa600",
  Vite: "#003fee"
}

export const ALL_FILTERS = [
  "All",
  ...Array.from(new Set(PROJECTS.flatMap(p => p.tags))).sort(),
]
