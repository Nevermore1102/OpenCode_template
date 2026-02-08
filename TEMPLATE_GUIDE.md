# OpenCode 项目模板使用指南

## 📖 概述

本模板为 OpenCode 优化的项目框架，支持 GitHub 同步和多项目快速启动。

## 🚀 使用模板

### 方法 1：GitHub Template（推荐）

1. 访问 https://github.com/Nevermore1102/OpenCode_template
2. 点击 "Use this template" 按钮
3. 输入仓库名称
4. 克隆新仓库

**方法 2：Git Clone**

```bash
git clone https://github.com/Nevermore1102/OpenCode_template.git my-project
cd my-project
```

**优点：**
- 可以跟踪模板更新
- 可以提交改进回模板
- 适合多个相似项目

## ⚙️ 定制项目

### 1. 更新项目信息

编辑以下文件：
- `package.json`：更新项目名称、描述、版本、作者
- `README.md`：更新项目描述、特性、使用说明

### 2. 配置技术栈

如果使用不同的技术栈，更新：

**AGENTS.md 中的"技术栈"部分：**
```markdown
### 技术栈
- 前端框架: [React/Vue/Angular/Next.js等]
- 后端框架: [Node.js/Express/FastAPI等，如适用]
- 构建工具: [Vite/Webpack/Next.js内置等]
- 测试框架: [Jest/Vitest/Cypress等]
- 其他依赖: [填写重要的库和工具]
```

**开发命令（package.json scripts）：**
```json
{
  "scripts": {
    "dev": "your-dev-command",
    "build": "your-build-command",
    "test": "your-test-command",
    "lint": "your-lint-command",
    "typecheck": "your-typecheck-command"
  }
}
```

**CI 工作流（.github/workflows/ci.yml）：**
- 更新 Node.js 版本
- 添加/移除测试命令
- 添加构建步骤

### 3. 配置 OpenCode

**项目配置（`.opencode/opencode.json`）：**
```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "model": "your-provider/your-model",
  "small_model": "your-provider/your-small-model",
  "permission": {
    "skill": { "*": "allow" }
  }
}
```

**全局配置（`~/.config/opencode/opencode.json`）：**
- MCP 服务器配置
- oh-my-opencode 插件配置
- 自定义代理配置

### 4. 自定义技能

添加项目特定技能：

1. 在 `.opencode/skills/` 下创建目录
2. 添加 `SKILL.md` 文件

**示例：**
```bash
.opencode/skills/my-custom-skill/
└── SKILL.md
```

**SKILL.md 内容：**
```markdown
---
name: my-custom-skill
description: 我的项目特定技能
---

## 我做什么

[技能功能描述]

## 何时使用我

[使用场景说明]
```

### 5. 更新项目结构

根据项目需求创建或修改目录：

**推荐目录结构：**
```
src/
├── components/     # UI 组件
├── hooks/          # 自定义 Hooks
├── utils/          # 工具函数
├── services/       # API 服务
└── types/          # TypeScript 类型
```

在 `AGENTS.md` 中的"项目结构"部分更新实际结构。

## 🔄 多电脑同步

### 已配置的 Git 设置（模板包含）

**全局配置（已在本地）：**
```bash
# 用户信息
user.name: Nevermore1102
user.email: 1535332051@qq.com

# GitHub 代理（仅 GitHub）
http.https://github.com.proxy: socks5://127.0.0.1:10808
https.proxy: socks5://127.0.0.1:10808

# 凭证助手
credential.helper: store
```

### 在新电脑上设置

**1. Clone 项目**
```bash
git clone https://github.com/Nevermore1102/OpenCode_template.git
cd OpenCode_template
```

**2. 配置 Git 用户**（如果需要）
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**3. 配置 GitHub 代理**（如果在国内）
```bash
git config --global http.https://github.com.proxy socks5://127.0.0.1:PORT
git config --global https.proxy socks5://127.0.0.1:PORT
```

**注意：** 将 PORT 替换为你的 v2ray 代理端口（如 10808）

**4. 配置凭据**
```bash
# 首次 push 时会提示输入
git push

# 或手动添加
git credential approve
```

### 项目特定配置同步

**需要同步的文件：**
- `AGENTS.md`：项目特定信息和规则
- `.opencode/`：项目级配置和技能
- `package.json`：项目依赖和脚本

**自动同步：**
这些文件通过 Git 自动同步，clone 后立即可用。

**本地配置（不同步）：**
- `~/.config/opencode/opencode.json`：全局 OpenCode 配置
- `~/.config/opencode/oh-my-opencode.json`：插件配置

需要在每台电脑上单独配置。

## 🎯 多项目支持

### 使用同一模板创建多个项目

**方法 1：每次使用 GitHub Template**
- 简单、独立
- 适合完全不同的项目

**方法 2：Fork 并修改**
- 保存自定义配置
- 适合相似项目

### 项目配置隔离

每个项目的配置独立存储：

**项目配置（`.opencode/opencode.json`）：**
- 项目模型选择
- 项目特定技能
- 开发命令

**全局配置（`~/.config/opencode/opencode.json`）：**
- oh-my-opencode 插件
- MCP 服务器
- 自定义主题

### 共享的全局配置

所有项目共享：
- Oh-My-OpenCode 插件
- MCP 服务器（如通用 API）
- 自定义代理配置

### 项目特定配置

每个项目不同：
- 模型选择（根据项目需求）
- 技能（项目特定技能）
- 开发命令

## 📚 扩展阅读

- [OpenCode 官方文档](https://opencode.ai/docs/)
- [Oh-My-OpenCode](https://github.com/code-yeongyu/oh-my-opencode)
- [AGENTS.md 最佳实践](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🐛 故障排除

### OpenCode 无法启动

**检查：**
1. 配置文件格式是否正确（JSONC）
2. 模型名称是否正确
3. API 密钥是否配置

### Git 同步失败

**检查：**
1. GitHub 代理是否配置
2. 凭证是否正确
3. 网络连接是否正常

### 技能无法加载

**检查：**
1. SKILL.md 格式是否正确
2. 技能目录结构是否正确
3. 权限配置是否正确

### CI/CD 失败

**检查：**
1. Node.js 版本是否正确
2. 依赖是否正确安装
3. 测试命令是否可用
4. 构建命令是否可用

## 💡 最佳实践

### 1. 版本控制 AGENTS.md

定期更新项目特定信息：
- 新的技术栈
- 新的开发命令
- 发现的反模式
- 学到的经验教训

### 2. 保持技能简洁

每个技能专注于一个领域：
- error-diagnostic：错误诊断
- github-explorer：GitHub 探索
- ui-analyzer：UI 分析
- 不要创建万能技能

### 3. 使用 Ultrawork 模式

复杂任务添加 `ulw` 或 `ultrawork` 关键词：
```
实现这个功能，ulw
```

### 4. 定期更新模板

从上游仓库获取更新：
```bash
# 使用 GitHub Template 功能
定期访问模板仓库查看更新

# 或使用 git（如果是 clone）
git remote add template https://github.com/Nevermore1102/OpenCode_template.git
git fetch template
git merge template/main
```

### 5. 贡献改进

将有用改进提交回模板仓库：
1. Fork 模板仓库
2. 创建改进分支
3. 提交更改
4. 创建 PR

## 📞 获取帮助

- 查看模板的 [Issues](https://github.com/Nevermore1102/OpenCode_template/issues)
- 提问或报告问题
- 分享你的使用经验

## 🌟 给模板加星

如果这个模板对你有帮助，请给它一个 ⭐️！

[Star History](https://api.star-history.com/svg?repos=Nevermore1102/OpenCode_template&type=Date)](https://star-history.com/#Nevermore1102/OpenCode_template&Date)
