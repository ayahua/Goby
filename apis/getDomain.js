import domains from './domains';

const env = process.env.npm_config_env || 'daily';

export default function getDomain(model) {
  const currentDom = model ? domains[model][env] : domains['sh-crm'][env];
  return currentDom;
}
