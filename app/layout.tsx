import type { Metadata } from 'next'
import './globals.css'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_CONFIG.url),
	title: {
		default: SITE_CONFIG.name,
		template: '%s | ' + SITE_CONFIG.name,
	},
	description: SITE_CONFIG.description,
	keywords: [
		SITE_CONFIG.author,
		SITE_CONFIG.name,
		'personal blog',
		'Next.js',
		'TypeScript',
		'Markdown',
		'frontend',
		'web development',
		'programming',
		'技术博客',
		'技术笔记',
		'前端开发',
		'开发日志',
		'生活随笔',
	],
	authors: [
		{
			name: SITE_CONFIG.author,
			url: SITE_CONFIG.url,
		},
	],
	creator: SITE_CONFIG.author,
	publisher: SITE_CONFIG.author,
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: 'website',
		locale: 'zh_CN',
		url: SITE_CONFIG.url,
		siteName: SITE_CONFIG.name,
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
	},
	twitter: {
		card: 'summary',
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='zh-CN'
			data-scroll-behavior='smooth'
		>
			<body
				className='min-h-screen flex flex-col items-center font-mono text-black antialiased'
				style={{
					backgroundColor: '#ffffff',
					backgroundImage: 'radial-gradient(#00000012 0.5px, transparent 0.5px)',
					backgroundSize: '10px 10px',
					backgroundAttachment: 'fixed',
				}}
			>
				<div
					className='w-full max-w-[720px]
            px-6 sm:px-8 md:px-10 lg:px-12
            pb-8 md:pb-12 lg:pb-14'
				>
					{children}
				</div>
			</body>
		</html>
	)
}
