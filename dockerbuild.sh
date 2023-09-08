#!/bin/sh
cd src/backend 

docker build -t gitea.sldw.de/public/guess_backend .
docker push gitea.sldw.de/public/guess_backend

cd ../

cd frontend 

npm run build
docker build -t gitea.sldw.de/public/guess_frontend .
docker push gitea.sldw.de/public/guess_frontend

cd ../../

curl -X POST https://docker.steffenludwig.info/api/stacks/webhooks/9b8afae2-01e9-4658-8a82-b7c38d7ad150