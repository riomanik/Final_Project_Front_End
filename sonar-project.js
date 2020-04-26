const sonarqubeScanner = require("sonarqube-scanner")

sonarqubeScanner(
    {
        serverUrl: "128.199.246.76:9000",
        options: {
            "sonar.sources": ".",
            "sonar.inclusions": "src/**"
        }
    },
    () => { }
)