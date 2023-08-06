FROM maven:3.8.2-jdk-8
WORKDIR /kredos-backend
COPY . .
RUN mvn clean install
EXPOSE  8085
CMD ["nohup","java", "-jar", "target/spring-boot-web-0.0.1-SNAPSHOT.jar"]