FROM arm32v7/node 
ENV NODE_ENV production 
WORKDIR /usr/src/app 
COPY ["./app/package.json", "./app/package-lock.json*",  "./"] 
COPY ./app/ . 
RUN npm install --production --silent 
EXPOSE 3000 
RUN npm rebuild node-sass 
CMD npm start

