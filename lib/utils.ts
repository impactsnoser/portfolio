import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BASE_PATH = '/portfolio'

export function withBasePath(path: string) {
  if (!path) return path
  if (/^https?:\/\//.test(path)) return path
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`
}
