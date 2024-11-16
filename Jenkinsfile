pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id') // Your Docker Hub credentials ID
        FRONTEND_IMAGE = 'ArsalanAhmed2912/frontend-app'
        BACKEND_IMAGE = 'ArsalanAhmed2912/backend-app'
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ArsalanAhmed2912/api-test.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    sh """
                    echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
                    docker tag frontend-app:latest $FRONTEND_IMAGE:latest
                    docker tag backend-app:latest $BACKEND_IMAGE:latest
                    docker push $FRONTEND_IMAGE:latest
                    docker push $BACKEND_IMAGE:latest
                    """
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
