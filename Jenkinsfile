// (Pon esto en C:\guest6\express-mongo-estudiantesApi\Jenkinsfile)

pipeline {
    // Le decimos a Jenkins que ejecute esto en cualquier agente disponible
    agent any

    stages {
        // --- Etapa 1: Clonar el Repositorio ---
        stage('1. Checkout') {
            steps {
                echo 'Clonando el repositorio...'
                // 'checkout scm' es la instrucción mágica que clona
                // el repo que configuraremos en el Job de Jenkins.
                checkout scm
            }
        }
        
        // --- Etapa 2: Construir la Imagen Docker ---
        stage('2. Build Image') {
            steps {
                echo 'Construyendo la imagen Docker de la app...'
                // Jenkins puede ejecutar esto gracias a que
                // conectamos el docker.sock en el paso anterior.
                // Construye solo el servicio 'app' del compose.
                sh 'docker-compose build --no-cache app'
            }
        }

        // --- Etapa 3: Desplegar la Aplicación ---
        stage('5. Deploy') {
            steps {
                echo 'Desplegando la aplicación y la base de datos...'
                
                // 1. Detiene cualquier versión anterior que esté corriendo
                // (ignora errores si no hay nada corriendo)
                sh 'docker-compose down || true'
                
                // 2. Levanta los servicios 'app' y 'mongo'
                sh 'docker-compose up -d'
            }
        }
    }
    
    // --- Post-Build: Acciones de limpieza o notificación ---
    post {
        // 'always' se ejecuta siempre, falle o no el pipeline
        always {
            echo 'Pipeline finalizado.'
        }
        // 'success' solo se ejecuta si todo salió bien
        success {
            echo '¡Despliegue exitoso!'
            echo 'Contenedores corriendo:'
            sh 'docker ps' // Muestra los contenedores activos
        }
        // 'failure' solo se ejecuta si algo falló
        failure {
            echo '¡El pipeline falló!'
        }
    }
}