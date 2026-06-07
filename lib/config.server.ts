export const SERVER_CONFIG = {
	smtpUrl: process.env.SMTP_URL ?? '',
	databaseUrl: process.env.DATABASE_URL ?? '',
}

export type ServerConfig = typeof SERVER_CONFIG
