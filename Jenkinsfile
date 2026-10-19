pipeline{
    agent none
    stages{
        stage('build'){
            agent{
                label 'build-agent'
            }
            steps{
                deleteDir()
                sh '''
                   git clone https://github.com/shahmahamza/webpage.git
                   ls -l
                '''
                stash name: 'website' , includes: 'webpage/**'
            }
        }
        stage('deploy'){
            agent{
                label 'deploy-agent'
            }
            steps{
                deleteDir()
                unstash 'website'
                sh '''
                   sudo cp -r webpage/* /var/www/html
                '''
            }
        }
    }
}
