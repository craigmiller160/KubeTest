# Setup Config Map Volume Demo

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