# 部署说明（Netlify）

本仓库默认使用 Netlify 构建并发布。下面说明如何在 Netlify 上配置环境变量、构建选项和本地测试。

## 必要环境变量（在 Netlify 仪表盘设置）

请在 Netlify → Site settings → Build & deploy → Environment → Environment variables 中添加：

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_TITLE`
- `NEXT_PUBLIC_SITE_DESCRIPTION`
- `NEXT_PUBLIC_AUTHOR_NAME`
- `NEXT_PUBLIC_AUTHOR_GITHUB`
- `NEXT_PUBLIC_AUTHOR_EMAIL`
