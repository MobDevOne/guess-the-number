FROM python:slim

COPY ./../../requirements.txt /requirements.txt
COPY src/backend/*.py /backend

RUN pip install -r /requirements.txt

CMD python /backend/restapi.py