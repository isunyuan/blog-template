# Blog

由 Next.js、TypeScript 和 Markdown 驱动

记录代码、折腾、思考，以及那些不值得发朋友圈的小事

#### 驱动

一直用Hexo做blog，实在是太过于喜欢gsap，得益于gsap的免费和当奶爸以后自驱的追求尽善尽美，尽情折腾吧

🔗Link [https://example.com](https://example.com)

## 配置环境变量

本仓库使用环境变量来配置站点信息与私密配置。请复制示例并填写你的值：

```bash
cp .env.example .env.local
# 编辑 .env.local，填写你的 SITE_URL、AUTHOR_GITHUB 等
```

在将项目部署到 GitHub Actions 时，请在仓库设置的 Secrets 中添加这些环境变量（不要把 `.env.local` 提交到仓库）。
