pipeline {
    agent any

    environment {
        DOCKER_USER = 'arsalanahmed2912'
        DOCKER_PASS = 'python@123'
        FRONTEND_IMAGE = 'arsalanahmed2912/react-frontend'
        BACKEND_IMAGE = 'arsalanahmed2912/api-backend'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ArsalanAhmed2912/api-test.git'
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                        docker login -u $DOCKER_USER --password-stdin <<< "$DOCKER_PASS"
                        docker-compose build
                        docker tag react-frontend:latest $FRONTEND_IMAGE:latest
                        docker tag api-backend:latest $BACKEND_IMAGE:latest
                        docker push $FRONTEND_IMAGE:latest
                        docker push $BACKEND_IMAGE:latest
                        '''
                    }
                }
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
