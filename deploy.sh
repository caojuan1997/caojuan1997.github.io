#!/usr/bin/env sh

# 忽略错误
set -e

rm -rf docs

# 构建
npm run docs:build

# 进入待发布的目录
cd document/.vitepress

mv dist /Users/caojuan/user/project/vue-doc/blog/docs

cd /Users/caojuan/user/project/vue-doc/blog

git add .
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:caojuan1997/caojuan1997.github.io.git master


