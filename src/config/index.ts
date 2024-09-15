import merge from 'lodash/merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const stage= process.env.STAGE || 'local';

let envConfig ;

if (stage === 'local') {
  envConfig = require('./local').default;
}
else if (stage === 'dev') {
  envConfig = require('./dev').default;
}
else if (stage === 'production') {
  envConfig = require('./prod').default;
}

export default merge(stage,
  env:process.env.NODE_ENV,
  port:process.env.PORT || 3000,
  secrets:{
    jwt:process.env.JWT_SECRET,
    jwtExp:process.env.JWT_EXP,
  }
  envConfig);