pipeline {
    stages {
        stage('LABEL SET TO DEV') { 
            agent {
                label 'dev'
            }
            steps {
                echo 'Building'
                sh "docker build -t jenkinstest-dev --build-arg ENVIRONMENT=dev ."
            }
        }
        stage('Run on Dev') {
            steps {
                echo 'Running on Dev'
                script {
                    def existingContainerId = sh(script: 'docker ps -q -f name=jenkinstest', returnStdout: true).trim()
                    if (existingContainerId) {
                        def imageId = sh(script: "docker inspect -f '{{.Image}}' ${existingContainerId}", returnStdout: true).trim()
                        sh "docker stop ${existingContainerId}"
                        sh "docker rm ${existingContainerId}"
                        sh "docker rmi ${imageId}"
                    }
                    sh "docker run -d -p 4200:4200 --name jenkinstest jenkinstest-dev"
                }
            }
        }
        stage('NOW LABEL SET TO PROD') { 
            agent {
                label 'main'
            }
            steps {
                echo 'Building'
                sh "docker build -t jenkinstest-prod --build-arg ENVIRONMENT=prod ."
            }
        }
        stage('Run on Prod') {
            steps {
                echo 'Running on Prod'
                script {
                    def existingContainerId = sh(script: 'docker ps -q -f name=jenkinstest', returnStdout: true).trim()
                    if (existingContainerId) {
                        def imageId = sh(script: "docker inspect -f '{{.Image}}' ${existingContainerId}", returnStdout: true).trim()
                        sh "docker stop ${existingContainerId}"
                        sh "docker rm ${existingContainerId}"
                        sh "docker rmi ${imageId}"
                    }
                    sh "docker run -d -p 4200:4200 --name jenkinstest jenkinstest-prod"
                }
            }
        }
    }
}
