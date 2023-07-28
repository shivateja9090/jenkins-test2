FROM    node:14
WORKDIR /app/front
COPY    . .       
RUN     npm install 
RUN     npm install -g @angular/cli
RUN     ng build
EXPOSE  4200
CMD ["node", "server.js"]
