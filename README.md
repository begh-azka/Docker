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
