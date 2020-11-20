FROM node:10

WORKDIR /app
ADD . /app/

RUN npm i -g npm && npm i yarn

RUN rm yarn.lock
RUN rm package-lock.json
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0

CMD [ "yarn", "start" ]