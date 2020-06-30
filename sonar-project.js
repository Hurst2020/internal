const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://34.68.149.190/',
        options : {
            'sonar.projectKey':'internal_server',
            'sonar.':'.',
            'sonar.login':'e6ba3b561f5ec519a8ab1e4b9f22a6e7cb0d413f',
            'sonar.tests':  '.',
            
        }
    }, () => {});

module.exports  = server;