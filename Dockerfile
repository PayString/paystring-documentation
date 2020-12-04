FROM node:12-alpine

ARG RELEASE_ENV
ENV RELEASE_ENV=$RELEASE_ENV

ADD . / paystringdocumentation/

RUN npm install --cache .npm --no-audit --prefer-offline --prefix ./paystringdocumentation
RUN (cd paystringdocumentation/; npm run build;)

WORKDIR /paystringdocumentation

FROM nginx:1.17-alpine
COPY --from=0 /paystringdocumentation/build /usr/share/nginx/html
COPY files/default.conf /etc/nginx/conf.d/default.conf
