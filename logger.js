const winston = require('winston');

const logger = winston.createLogger({
  exitOnError: false,
  transports: [new winston.transports.Console()],
});

exports.logger = logger;
