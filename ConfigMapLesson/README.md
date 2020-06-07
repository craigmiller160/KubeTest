# Setup Config Map Volume Demo

Create configmap
```
kubectl create configmap nginx-configmap-vol --from-file=file-1.txt --from-file=file-2.txt
```
Check if it exists
```
kubectl get configmaps
```
Setup the pod
```
kubectl create -f nginx-pod-configmap-vol.yml
kubectl exec -it nginx-pod-configmap-vol -- /bin/bash
cd /etc/non-sensitive-data
```
Now we can see the contents of the two files here

# Setup Config Map Env

Create configmap
```
kubectl create configmap redis-configmap-env --from-literal=file.1=file.a --from-literal=file.2=file.b
```
Check if it exists
```
kubectl get configmap
```
Setup the pod
```
kubectl create -f redis-pod-configmap-env.yml
```