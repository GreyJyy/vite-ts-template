Vue 3 + TypeScript + Vite + Pinia

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 <script setup> SFCs, check out the script setup docs to learn more.

我自己搭建的一个vite+ts+vue3开发模板(开箱即用)

使用步骤：

1. git clone https://github.com/GreyJyy/vite-ts-template.git
2. yarn
3. yarn dev

集成了以下功能:

1. git Husky
2. commitlint
3. commitizen
4. pinia
5. vue-router
6. editorconfig
7. Eslint+Prettier
8. 基于TypeScript的axios二次封装



关于代码提交规范

我已经做好了提交规范的配置,提交代码需要使用'npx cz'或'yarn commit'。

  Type    	作用                                      
  feat    	新增特性 (feature)                          
  fix     	修复 Bug(bug fix)                         
  docs    	修改文档 (documentation)                    
  style   	代码格式修改(white-space, formatting, missing semi colons, etc)
  refactor	代码重构(refactor)                          
  perf    	改善性能(A code change that improves performance)
  test    	测试(when adding missing tests)           
  build   	变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
  ci      	更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
  chore   	变更构建流程或辅助工具(比如更改测试环境)                   
  revert  	代码回退                                    


