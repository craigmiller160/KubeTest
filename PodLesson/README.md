# Setting up this example

```
kubectl create -f nginx-pod.yml
kubectl exec -it nginx-pod -- /bin/bash
apt update
apt install vim
vim /usr/share/nginx/html/test.html
```
Paste the contents of test.html at this point
```
:wq
exit
kubectl expose pod nginx-pod --type=NodePort --port=80
kubectl describe service nginx-pod
```
Grab the NodePort from here. Use that plus the minikube host to access it. See the homepage and test.html displayed.