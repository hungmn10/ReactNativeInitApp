const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const generalConfig = {
  TEST_PARAM: 'Test',
};

const configDevelopment = {
  TEST_PARAM: 'Development',
};

const configProduction = {
  TEST_PARAM: 'Production',
};

const _Environments = {
  general: generalConfig,
  development: Object.assign({}, generalConfig, configDevelopment),
  production: Object.assign({}, generalConfig, configProduction),
};

function getEnvironment() {
  const environment = DEVELOPMENT;

  if (environment === PRODUCTION || environment === DEVELOPMENT) {
    return _Environments[environment]
  } else {
    return _Environments['general']
  }
}

let Environments = getEnvironment();
module.exports = Environments;
