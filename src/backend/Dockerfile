FROM python:slim

COPY requirements.txt /requirements.txt
COPY ./*.py /src/

RUN mkdir /src/database

RUN pip install -r /requirements.txt

WORKDIR /src

CMD python /src/restapi.py