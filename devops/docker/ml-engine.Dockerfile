FROM python:3.10-slim

WORKDIR /app

COPY ml-engine/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ml-engine/ .

EXPOSE 5000

CMD ["python", "app.py"]