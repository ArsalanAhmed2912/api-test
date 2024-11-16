pipeline {
    agent any

    environment {
        DOCKER_USER = 'arsalanahmed2912'  // Your Docker Hub username
        DOCKER_PASS = 'python@123'        // Your Docker Hub password
        FRONTEND_IMAGE = 'arsalanahmed2912/react-frontend'  // Frontend Docker Hub image
        BACKEND_IMAGE = 'arsalanahmed2912/api-backend'      // Backend Docker Hub image
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ArsalanAhmed2912/api-test.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images using docker-compose
                    sh 'docker-compose build'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        // Log into Docker Hub
                        sh 'echo "$DOCKER_PASS" | docker login -u $DOCKER_USER --password-stdin'

                        // Tag images with your Docker Hub username and the appropriate image names
                        sh 'docker tag react-frontend:latest $FRONTEND_IMAGE:latest'
                        sh 'docker tag api-backend:latest $BACKEND_IMAGE:latest'

                        // Push the images to Docker Hub
                        sh 'docker push $FRONTEND_IMAGE:latest'
                        sh 'docker push $BACKEND_IMAGE:latest'
                    }
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    // Run the containers using docker-compose
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            // Clean up docker images after the build to avoid clutter on Jenkins host
            sh 'docker system prune -f'
        }
    }
}
