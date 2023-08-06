pipeline {
    agent {
        label 'dev'
    }   
    stages {
        stage('Build') { 
            steps {
                echo 'Building'
                sh "docker build -t jenkinstest --build-arg ENVIRONMENT=dev ."
            }
        }
        stage('Run') {
            steps {
                echo 'Running'
                script {
                    // Check if the container 'jenkinstest' is already running
                    def existingContainerId = sh(script: 'docker ps -q -f name=jenkinstest', returnStdout: true).trim()
                    if (existingContainerId) {
                        // Get the Image ID of the existing container
                        def imageId = sh(script: "docker inspect -f '{{.Image}}' ${existingContainerId}", returnStdout: true).trim()
                        // Stop and remove the existing container
                        sh "docker stop ${existingContainerId}"
                        sh "docker rm ${existingContainerId}"
                        // Remove the related image
                        sh "docker rmi ${imageId}"
                    }
                    // Start a new container
                    sh 'docker run -d -p 4200:4200 --name jenkinstest jenkinstest'
                }
            }
        }
    }
}
