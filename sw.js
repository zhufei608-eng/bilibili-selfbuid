// 极简 Service Worker，确保 PWA 可安装
self.addEventListener('fetch', function(event) {
    // 暂时不拦截任何请求，仅作为 PWA 激活凭证
});