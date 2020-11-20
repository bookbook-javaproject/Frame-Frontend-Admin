FROM node:10

WORKDIR /app
ADD . /app/

RUN npm i -g npm && npm i yarn

RUN rm yarn.lock
RUN rm package-lock.json
RUN yarn
RUN yarn build

CMD [ "yarn", "start" ]

docker build --tag frame-admin-front:0.0.2 .
docker run -d --name framd-admin-front -p 8001:3000 frame-admin-front:0.0.2