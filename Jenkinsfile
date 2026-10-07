pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                   git clone https://github.com/shahmahamza/webpage.git
                   ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                   cp -r webpage/* /var/www/html
                   ls -l /var/www/html
                '''
            }
        }
    }
}
