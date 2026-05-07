/**
 * 重定向规则配置
 * key: 源路径 (如 '/old-path')
 * value: 目标 URL，可以是相对路径或绝对 URL
 *
 * 开发环境: next.config.mjs 的 redirects 配置直接生效
 * 静态部署: build 后由 scripts/generate-redirects.mjs 生成 HTML 跳转页面
 */
export const redirects = {
  '/docs/core/advanced': '/docs/core/advanced/overview',
  '/docs/core/docker': '/docs/deploy/docker',
};
