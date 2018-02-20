# 1: Use node alpine as base:
FROM node:alpine

# 2: We'll set the application path as the working directory
WORKDIR /usr/src/app

# 3: We'll add the app's binaries path to $PATH:
ENV PATH=/usr/src/app/bin:$PATH

# 4: Install ember-cli and friends:
RUN set -ex \
  && npm install -g ember-cli \
  && npm install -g bower \
  && npm install -g phantomjs-prebuilt \
  && npm install -g check-dependencies

EXPOSE 4200

CMD ["ember", "server"]