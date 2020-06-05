# Important Stuff for Kubernetes Deployment

1) eval $(minikube docker-env) = This command will set the docker environment variables for the current shell to minikube. This will allow for building images to the local minikube docker repo, so it can access them.

After this, you need to build the container using Docker, not docker-compose. The compose-level features will be handled by kubernetes, just the docker build configs matter here.

DO NOT USE "sudo" FOR DOCKER. That will use the local docker daemon, instead of MiniKube's