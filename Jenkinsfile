pipeline {
    agent {
        label 'dev'
    }   
    stages {
        stage('Build') { 
            steps {
                echo 'Building'
                sh "docker build -t maventest --build-arg ENVIRONMENT=dev ."
            }
        }
        stage('Run') {
            steps {
                echo 'Running'
                script {
                    // Check if the container 'maventest' is already running
                    def existingContainerId = sh(script: 'docker ps -q -f name=maventest', returnStdout: true).trim()
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
                    sh 'docker run -d -p 8085:8085 --name maventest maventest'
                }
            }
        }
    }
}