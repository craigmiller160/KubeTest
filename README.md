# Important Stuff for Kubernetes Deployment

1) eval $(minikube docker-env) = This command will set the docker environment variables for the current shell to minikube. This will allow for building images to the local minikube docker repo, so it can access them.

After this, you need to build the container using Docker, not docker-compose. The compose-level features will be handled by kubernetes, just the docker build configs matter here.

DO NOT USE "sudo" FOR DOCKER. That will use the local docker daemon, instead of MiniKube's

## K3D Stuff

Need to use import-images to pull images from my local docker into it
Don't forget about mounting the volume when creating the cluster

## MicroK8s Stuff

These commands get images imported

docker save mynginx > myimage.tar
microk8s ctr image import myimage.tar