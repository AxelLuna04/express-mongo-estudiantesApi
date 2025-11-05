pipeline {
    agent any

    stages {
        stage('1. Checkout') {
            steps {
                echo 'Clonando el repositorio...'
                checkout scm
            }
        }
        
        stage('2. Build Image') {
            steps {
                echo 'Construyendo la imagen Docker de la app...'
                sh 'docker-compose build --no-cache app'
            }
        }

        stage('3. Deploy') {
            steps {
                echo 'Desplegando la aplicación y la base de datos...'
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo '¡Despliegue exitoso!'
            echo 'Contenedores corriendo:'
            sh 'docker ps'
        }
        failure {
            echo '¡El pipeline falló!'
        }
    }
}