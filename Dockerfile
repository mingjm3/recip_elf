# written with the help of gpt-4. Magic!
FROM node:18-alpine
WORKDIR /recip_elf/frontend
COPY ./frontend .
RUN npm ci
RUN npm run build
WORKDIR /recip_elf/api
COPY ./api .
RUN npm ci
EXPOSE 3000
CMD [ "node", "bin/www" ]
