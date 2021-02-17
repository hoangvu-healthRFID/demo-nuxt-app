// Config file
module.exports = {
	env: process.env.NODE_ENV,
	db: {
		main : {
			host: process.env.MAIN_DB_HOST,
			port: process.env.MAIN_DB_PORT,
			database: process.env.MAIN_DB_NAME,
			user: process.env.MAIN_DB_USER,
			password: process.env.MAIN_DB_PASS,
			connectionLimit: 100,
			acquireTimeout: (50 * 10000),
			connectTimeout: (50 * 10000),
			debug: false
		}, 
		slave : {
			host: process.env.SLAVE_DB_HOST,
			port: process.env.SLAVE_DB_PORT,
			database: process.env.SLAVE_DB_NAME,
			user: process.env.SLAVE_DB_USER,
			password: process.env.SLAVE_DB_PASS,
			connectionLimit: 100,
			acquireTimeout: (50 * 10000),
			connectTimeout: (50 * 10000),
			debug: false
		},
		acsMain : {
			host: process.env.ACSMAIN_DB_HOST,
			port: process.env.ACSMAIN_DB_PORT,
			database: process.env.ACSMAIN_DB_NAME,
			user: process.env.ACSMAIN_DB_USER,
			password: process.env.ACSMAIN_DB_PASS,
			connectionLimit: 100,
			acquireTimeout: (50 * 10000),
			connectTimeout: (50 * 10000),
			debug: false
		},
		acsSlave : {
			host: process.env.ACSMAIN_DB_HOST,
			port: process.env.ACSMAIN_DB_PORT,
			database: process.env.ACSMAIN_DB_NAME,
			user: process.env.ACSMAIN_DB_USER,
			password: process.env.ACSMAIN_DB_PASS,
			connectionLimit: 100,
			acquireTimeout: (50 * 10000),
			connectTimeout: (50 * 10000),
			debug: false
		}
	},
	envConfig: {
		hostname: process.env.ENV_HOST,
		port: process.env.ENV_PORT,
		version: '2.0.0_Build_17',
		name: 'Healthrfid Controlpoint UI',
		mobile: '1.0.0'
	},
	mailAws: {
		from: process.env.MAIL_FROM,
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT, 				
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
		access_key: process.env.MAIL_ACCESS_KEY,
		secret_key: process.env.MAIL_SECRET_KEY
	},
	s3: {
		accessKeyId: process.env.S3_ACCESS_KEY,
		secretAccessKey: process.env.S3_SECRET_KEY,
		"region": ""
	},
	firebaseKey : process.env.FIREBASE_KEY
};