# backend/Dockerfile
FROM golang:1.21-alpine

WORKDIR /app

# 依存関係のコピーとダウンロード
COPY go.mod ./
RUN go mod download

# ソースコードのコピー
COPY . .

# アプリケーションのビルド
RUN go build -o main .

EXPOSE 8080
CMD ["./main"]