import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Gustavo de Moura',
  description:
    'Senior Machine Learning Engineer. Computer vision, deep learning, and AI R&D.',
  href: 'https://gustavo-moura.github.io',
  author: 'Gustavo de Moura',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/games', label: 'Games' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/gustavo-moura', label: 'GitHub' },
  { href: 'https://linkedin.com/in/gus-moura', label: 'LinkedIn' },
  {
    href: 'https://scholar.google.com.br/citations?user=PqZyPqoAAAAJ&hl=en',
    label: 'Scholar',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Scholar: 'lucide:graduation-cap',
}
