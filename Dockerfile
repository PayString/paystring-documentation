FROM node:12-alpine

ARG RELEASE_ENV
ENV RELEASE_ENV=$RELEASE_ENV

ADD . / payiddocumentation/

RUN npm install --cache .npm --no-audit --prefer-offline --prefix ./payiddocumentation
RUN (cd payiddocumentation/; npm run build;)

WORKDIR /payiddocumentation

FROM nginx:1.17-alpine
COPY --from=0 /payiddocumentation/build /usr/share/nginx/html
