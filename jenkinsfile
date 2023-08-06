pipeline {
    agent any

    stages {
        stage('First Stage') {
            steps {
                echo 'Hello, this is the first stage!'
            }
        }

        stage('Second Stage') {
            steps {
                echo 'Hello, this is the second stage!'
            }
        }
    }

    post {
        always {
            echo 'This will always be executed after all stages'
        }
        success {
            echo 'This will be executed if the build is successful'
        }
        failure {
            echo 'This will be executed if the build fails'
        }
    }
}
