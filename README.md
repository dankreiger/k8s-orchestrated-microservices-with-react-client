### K8S Microservices with React frontend

### Getting started

1. Make sure [Skaffold](https://skaffold.dev/) is installed.

2. run dev environment to build and deploy app locally
```sh
$ skaffold dev
```


Client setup:

### blog client

Note: for dev environment, update local hosts file to serve `posts.com` from 127.0.0.1

```txt
# /etc/hosts

127.0.0.1 posts.com ## dev url for ingress-srv in blog app
```

