FROM    node:14
WORKDIR /app/front
COPY    package.json .
COPY    . .       
RUN     npm install 
RUN     npm install -g @angular/cli
RUN     ng build
# Display the value of ENVIRONMENT build argument
ARG ENVIRONMENT
RUN echo "ENVIRONMENT is set to $ENVIRONMENT"
COPY src/environments/env.${ENVIRONMENT}.js dist/angular-14-features-demo/env.js
EXPOSE  4200
CMD ["node", "server.js"]
