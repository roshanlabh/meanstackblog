const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = ''; // Databse URI and database name
  process.env.databaseName = 'production database: rambo-mblog'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/mean-angular-2'; // Databse URI and database name
  process.env.databaseName = 'development database: mean-angular-2'; // Database name
}
