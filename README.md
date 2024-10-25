# JPhack2024

## 必要要件

- Docker
- Docker Compose

## セットアップ手順

1. リポジトリのクローン

```bash
git clone https://github.com/[your-username]/JPhack2024.git
cd JPhack2024
```

2. Docker 環境の起動

```bash
docker-compose up --build
```

3. アプリケーションへのアクセス

- フロントエンド: http://localhost:3000
- バックエンド API: http://localhost:8080

## 開発環境

### フロントエンド（React）

- Node.js 18.x
- TypeScript
- React

### バックエンド（Go）

- Go 1.21
- Gin Framework

## ディレクトリ構造

```
JPhack2024/
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
└── backend/
    ├── Dockerfile
    ├── go.mod
    ├── go.sum
    └── main.go
```

## トラブルシューティング

### よくある問題と解決方法

1. ポートが既に使用されている場合

```bash
# 使用中のポートを確認
docker ps

# コンテナを停止
docker-compose down
```

2. キャッシュをクリアして再ビルド

```bash
docker-compose build --no-cache
docker-compose up
```

3. コンテナ内のログの確認

```bash
# フロントエンドのログ
docker-compose logs frontend

# バックエンドのログ
docker-compose logs backend
```
