# written with the help of gpt-4. Magic!
FROM node:18-alpine
WORKDIR /recip_elf/
# This requires building the frontend beforehand.
# It's a hack because t4g nanos have trouble building
# in the image. The image will be much smaller this way
# so maybe it's better anyways
COPY ./frontend/build/ ./frontend/build/
WORKDIR /recip_elf/api
COPY ./api .
RUN npm ci
EXPOSE 3000
CMD [ "node", "bin/www" ]
