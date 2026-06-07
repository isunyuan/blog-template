# 部署说明（GitHub Actions）

本文件说明使用 GitHub Actions 构建并部署本仓库时，需要配置的环境变量与注意点。

## 必要环境变量

在部署平台（GitHub 仓库 Secrets）中添加以下变量：

- `NEXT_PUBLIC_SITE_URL` — 站点根地址，例如 `https://example.com`
- `NEXT_PUBLIC_SITE_TITLE` — 站点标题
- `NEXT_PUBLIC_SITE_DESCRIPTION` — 站点描述
- `NEXT_PUBLIC_AUTHOR_NAME` — 作者姓名
- `NEXT_PUBLIC_AUTHOR_GITHUB` — 作者 GitHub 链接
- `NEXT_PUBLIC_AUTHOR_EMAIL` — 作者邮箱（用于 meta/展示，可选）

## 使用 GitHub Actions 构建（示例）

在 `.github/workflows/` 下配置工作流（示例片段）：

```yaml
name: Deploy
on: [push]
jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - name: Setup Node
              uses: actions/setup-node@v4
              with:
                  node-version: '20'
            - name: Install
              run: npm ci
            - name: Build
              env:
                  NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
                  NEXT_PUBLIC_SITE_TITLE: ${{ secrets.NEXT_PUBLIC_SITE_TITLE }}
                  NEXT_PUBLIC_SITE_DESCRIPTION: ${{ secrets.NEXT_PUBLIC_SITE_DESCRIPTION }}
                  NEXT_PUBLIC_AUTHOR_NAME: ${{ secrets.NEXT_PUBLIC_AUTHOR_NAME }}
                  NEXT_PUBLIC_AUTHOR_GITHUB: ${{ secrets.NEXT_PUBLIC_AUTHOR_GITHUB }}
                  NEXT_PUBLIC_AUTHOR_EMAIL: ${{ secrets.NEXT_PUBLIC_AUTHOR_EMAIL }}
                  NEXT_PUBLIC_ANALYTICS_ID: ${{ secrets.NEXT_PUBLIC_ANALYTICS_ID }}
                  SMTP_URL: ${{ secrets.SMTP_URL }}
                  DATABASE_URL: ${{ secrets.DATABASE_URL }}
              run: npm run build
            # 可根据需要添加上传构建产物或部署步骤
```

在仓库设置 → Secrets → Actions 中，新增与上文相同名称的 Secrets（键名需与 workflow 中使用的键一致）。

## 常见注意事项

- `NEXT_PUBLIC_*` 变量在构建时被内联进前端代码，修改后必须重新构建。
- 切勿将 `.env.local` 或包含真实密钥的文件提交到仓库。

## 本地调试

复制示例 env 并编辑：

```bash
cp .env.example .env.local
# 编辑 .env.local 填写你的值
npm run dev
```

---
