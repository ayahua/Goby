const domainsSH = {
  // test
  dev: {
    domain: 'http://dev.xxx.cn/api',
    assetsPublicPath: 'http://cdndaily.xxx.com/dev/build',
  },
  daily: {
    host: 'http://daily.xxx.com',
    domain: 'http://daily.xxx.com/api',
    assetsPublicPath: 'http://cdndaily.xxx.com/daily/build',
  },
  gray: {
    host: 'http://gray.xxx.com',
    domain: 'http://gray.xxx.com/api',
    assetsPublicPath: 'http://cdndaily.xxx.com/gray/build',
  },
  online: {
    host: 'http://xxx.com',
    domain: 'http://xxx.com/api',
    assetsPublicPath: 'http://cdn.xxx.com/build',
  },
};

const domainsZMC = {
  // test
  dev: {
    domain: 'http://dev.yyy.cn/api',
    assetsPublicPath: 'http://cdndaily.yyy.com/dev/build',
  },
  daily: {
    host: 'http://daily.yyy.com',
    domain: 'http://daily.yyy.com/api',
    assetsPublicPath: 'http://cdndaily.yyy.com/daily/build',
  },
  gray: {
    host: 'http://gray.yyy.com',
    domain: 'http://gray.yyy.com/api',
    assetsPublicPath: 'http://cdndaily.yyy.com/gray/build',
  },
  online: {
    host: 'http://qundian.yyy.com',
    domain: 'http://qundian.yyy.com/api',
    assetsPublicPath: 'http://cdn.yyy.com/build',
  },
};

// const hyk = {};

export default { 'sh-crm': domainsSH, 'zmc-crm': domainsZMC };
