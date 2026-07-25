import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Сайт задеплоен на GitHub Pages по адресу /portfolio (см. basePath в next.config.mjs).
// next/link и next/image сами добавляют этот префикс, а обычные <img src="/..."> — нет.
// Поэтому все статические пути из /public нужно прогонять через withBasePath().
const BASE_PATH = '/portfolio'

export function withBasePath(path: string) {
  if (!path) return path
  if (/^https?:\/\//.test(path)) return path // внешние ссылки не трогаем
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`
}
