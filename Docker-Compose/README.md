# Microservices
- Microservices are an architectural approach to developing software applications as a collection of small, independent services that communicate with each other over a network.
- Instead of building a monolithic application where all the functionality is tightly integrated into a single codebase, microservices break down the application into smaller, loosely coupled services.
- More the microservices, more is the frequency of the deployments.
- Microservices that need to communicate with each other can be linked to each other (using --link) or both can be placed inside the same network.

# Docker Compose
- This tool should be used to launch microservices instead of docker.
- Docker Compose relies on Docker Engine for any meaningful work.

### Build an image using Docker Compose
```Dockerfile
services: 
  my-custom-app:
    build: https://github.com/my-company/my-project.git
    image: my-project-image
    ...
```
### Pull an existing image 
```Dockerfile
services: 
  my-service:
    image: ubuntu:latest
    ...
```
### Exposing Ports in Services
- To reach a container from the host, the ports must be exposed declaratively through the ports keyword, which also allows us to choose if we’re exposing the port differently in the host:

```Dockerfile
services:
  network-example-service:
    image: karthequian/helloworld:latest
    ports:
      - "80:80"
    ...
  my-custom-app:
    image: myapp:latest
    ports:
      - "8080:3000"
    ...
  my-custom-app-replica:
    image: myapp:latest
    ports:
      - "8081:3000"
    ...
```
### Networks in docker-compose
```Dockerfile
services:
  network-example-service:
    image: karthequian/helloworld:latest
    networks: 
      - my-shared-network
    ...
  another-service-in-the-same-network:
    image: alpine:latest
    networks: 
      - my-shared-network
    ...
  another-service-in-its-own-network:
    image: alpine:latest
    networks: 
      - my-private-network
    ...
networks:
  my-shared-network: {}
  my-private-network: {}
```
### Setting Up the Volumes
- There are three types of volumes: anonymous, named, and host.
- Docker manages both anonymous and named volumes, automatically mounting them in self-generated directories in the host.
- Host volumes also allow us to specify an existing folder in the host.
```Dockerfile
services:
  volumes-example-service:
    image: alpine:latest
    volumes: 
      - my-named-global-volume:/my-volumes/named-global-volume
      - /tmp:/my-volumes/host-volume
      - /home:/my-volumes/readonly-host-volume:ro
    ...
  another-volumes-example-service:
    image: alpine:latest
    volumes:
      - my-named-global-volume:/another-path/the-same-named-global-volume
    ...
volumes:
  my-named-global-volume: 
```
- Here, both containers will have read/write access to the my-named-global-volume shared folder, regardless of which path they’ve mapped it to. Instead, the two host volumes will be available only to volumes-example-service.

- The /tmp folder of the host’s file system is mapped to the /my-volumes/host-volume folder of the container. This portion of the file system is writeable, which means that the container can read and also write (and delete) files in the host machine.

### Dependencies between Services
```Dockerfile
services:
  kafka:
    image: wurstmeister/kafka:2.11-0.11.0.3
    depends_on:
      - zookeeper
    ...
  zookeeper:
    image: wurstmeister/zookeeper
    ...
```

### Environment Variables
```Dockerfile
services:
  database: 
    image: "postgres:${POSTGRES_VERSION}"
    environment:
      DB: mydb
      USER: "${USER}"
```

## Lifecycle Management
1. Startup:
`docker-compose up`
- After the first time, however, we can simply use start to start the services:
`docker-compose start`
`docker-compose -f custom-compose-file.yml start`
- Compose can also run in the background as a daemon when launched with the -d option:
`docker-compose up -d`
2. Shutdown:
`docker-compose stop`
To reset the status of our project, we can simply run down, which will destroy everything with the exception of external volumes:
`docker-compose down`
