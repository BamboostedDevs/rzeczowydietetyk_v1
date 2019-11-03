FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
ENV PORT 443
EXPOSE 443

WORKDIR /opt/app
COPY . /opt/app

RUN npm install --no-optional && npm run build

CMD [ "npm", "start" ]