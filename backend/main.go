// backend/main.go
package main

import (
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "net/http"
)

func main() {
    r := gin.Default()

    // CORSの設定
    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:3000"}
    r.Use(cors.New(config))

    // テスト用エンドポイント
    r.GET("/api/test", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "Hello from Go!",
        })
    })

    r.Run(":8080")
}