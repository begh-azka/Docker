# Docker
## Docker Architecture
![image](https://github.com/begh-azka/Docker/assets/97597065/b56a5b2d-dd15-4793-a341-1f80dac795b4)

## Difference between Virtual Machines and Containers
![image](https://github.com/begh-azka/Docker/assets/97597065/f6cfde51-f739-48a1-8cde-072cab4b41a5)

## Docker Commands
![image](https://github.com/begh-azka/Docker/assets/97597065/55fa66a6-d729-4c55-994f-dcb0098788f4)

- **docker image history [image-name/image-id]:** This gives you all the layers inside an image.
- **docker logs [container-name/id]:** Gives you logs of a running container. If you want to follow the logs in real-time, add **-f** flag to the command.
- **docker image inspect [image-name/id]**: This lets you know the details of an image. Its layers, id, repo, env variables, ports, volumes etc.
- **docker system df:** Show docker disk usage
- **docker system events:** Get real events from the server.

## ENTRYPOINT vs CMD
![image](https://github.com/begh-azka/Docker/assets/97597065/3f223a31-e4f4-478b-b94f-6120f0049cc6)

```Dockerfile
FROM alpine:3.14
RUN pwd
ENTRYPOINT ["echo", "HELLO,"]
CMD ["WORLD"]
```
- When you run `docker run -P -it [image-name/id]`, it will print HELLO, WORLD.
- When you run `docker run -P -it [image-name/id]` Universe, it will print HELLO, Universe.
- So, Entrypoint cannot be overidden using cmd line while as CMD can be.
- Both can be used in a single Dockerfile. CMD provides an argument to the ENTRYPOINT instruction. Executables (commands) should be kept in ENTRYPOINT while as arguments should be kept in CMD.
```Dockerfile
FROM alpine:3.14
RUN pwd
ENTRYPOINT ["echo"]
CMD ["WORLD"]
```
- Above image when run as a container will print WORLD. So, echo is the command and we are passing it an argument in CMD.

## Docker Networks
1. **bridge**: Bridge networks create a software-based bridge between your host and the container. Containers connected to the network can communicate with each other, but they’re isolated from those outside the network. Each container in the network is assigned its own IP address. Default network.
2. **host**: Containers that use the host network mode share your host’s network stack without any isolation. They aren’t allocated their own IP addresses, and port binds will be published directly to your host’s network interface. This means a container process that listens on port 80 will bind to <your_host_ip>:80. Only works for Linux containers.
3. **overlay**: Overlay networks are distributed networks that span multiple Docker hosts. The network allows all the containers running on any of the hosts to communicate with each other without requiring OS-level routing support.
4. **ipvlan**: IPvLAN is an advanced driver that offers precise control over the IPv4 and IPv6 addresses assigned to your containers, as well as layer 2 and 3 VLAN tagging and routing.
5. **macvlan**: macvlan is another advanced option that allows containers to appear as physical devices on your network. It works by assigning each container in the network a unique MAC address.

```sh
docker network create -d bridge my-net
docker run --network=my-net -itd --name=container3 busybox
```



