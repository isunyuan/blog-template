export const SITE_CONFIG = {
	url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
	name: process.env.NEXT_PUBLIC_SITE_TITLE ?? 'Example Site',
	author: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? 'Author',
	authorEmail: process.env.NEXT_PUBLIC_AUTHOR_EMAIL ?? 'email@example.com',
	authorGithub: process.env.NEXT_PUBLIC_AUTHOR_GITHUB ?? '',
	description:
		process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
		'写代码，记生活。一个基于 Next.js、TypeScript 和 Markdown 构建的个人博客。',
} as const

export type SiteConfig = typeof SITE_CONFIG
