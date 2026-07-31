export const profile = {
  name: "Матвей Лобанов",
  role: "Full-Stack разработчик",
  tagline:
    "Создаю быстрые, доступные и красивые веб-приложения. Превращаю идеи в продуманные интерфейсы и надёжный код.",
  available: true,
}

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Языки",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vue"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "Redis", "REST / GraphQL"],
  },
  {
    title: "Инструменты",
    items: ["Git", "Docker", "Vercel", "Figma", "Linux"],
  },
]

export const services: { title: string; description: string; icon: "code" | "server" | "palette" | "message" }[] = [
  {
    title: "Веб-разработка",
    description:
      "Современные сайты и веб-приложения на Next.js и React — от лендинга до сложной платформы.",
    icon: "code",
  },
  {
    title: "Backend и API",
    description:
      "Проектирование баз данных, REST/GraphQL API, интеграции с внешними сервисами и платежами.",
    icon: "server",
  },
  {
    title: "UI / UX",
    description:
      "Чистые, доступные интерфейсы с вниманием к деталям, анимациям и производительности.",
    icon: "palette",
  },
  {
    title: "Консультации",
    description:
      "Аудит кода, помощь с архитектурой и подбор технологий под задачи твоего проекта.",
    icon: "message",
  },
]

export const about = {
  bio: "Full-stack разработчик, который доводит идеи до продакшена — от адаптивной вёрстки на React/Next.js до нативных iOS-приложений на Swift. Пишу чистый, поддерживаемый код и не боюсь брать проект целиком: от UI до бэкенда и деплоя. Быстро разбираюсь в новом стеке и предпочитаю работающий продукт красивым, но незаконченным идеям.",
  resumeUrl: "/resume.pdf",
}

export type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  repos?: { label: string; url: string }[]
  image?: string
}

export const projects: Project[] = [
  {
    title: "Бритва — запись в барбершоп",
    description:
      "Telegram Mini App для онлайн-записи в барбершоп: клиент выбирает услугу, мастера и время и оплачивает через Telegram Stars, не выходя из мессенджера. Владелец видит все брони в реальном времени через встроенную админ-панель.",
    tags: ["Telegram Mini Apps", "Telegram Stars", "ЮKassa", "REST API", "Railway", "Vercel"],
    repos: [
      { label: "Клиент", url: "https:
      { label: "Сервер", url: "https:
    ],
    image: "/projects/britva.png",
  },
  {
    title: "Mebel",
    description:
      "Сайт-каталог мебели: витрина товаров и адаптивная вёрстка.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https:
    image: "/projects/mebel.png",
  },
  {
    title: "Renewly",
    description:
      "Приложение для учёта регулярных подписок: сумма трат за месяц, дата ближайшего списания по каждому сервису и наглядный лимит бюджета — на первом экране, без лишних переходов.",
    tags: ["Swift", "SwiftUI", "SwiftData", "iOS"],
    githubUrl: "https:
    image: "/projects/renewly.png",
  },
]

export const contact = {
  email: "workingmatvey@gmail.com",
  phone: "+7 992 317-54-56",
  socials: [
    { label: "GitHub", url: "https:
    { label: "Telegram", url: "https:
  ],
}
