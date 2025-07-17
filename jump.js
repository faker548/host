(function () {
  // ✅ 动态插入样式（只执行一次）
  const style = document.createElement('style');
  style.textContent = `
    #toast-container {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    }

    .toast {
      padding: 14px 20px;
      background: rgba(30, 30, 30, 0.7);
      backdrop-filter: blur(8px);
      border-radius: 12px;
      color: #fff;
      font-size: 14px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.3s ease;
      pointer-events: auto;
    }

    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // ✅ 创建 toast 容器
  const container = document.createElement('div');
  container.id = 'toast-container';
  document.body.appendChild(container);

  // ✅ 定义并挂载 toast 显示函数
  window.showToast = function (message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    // 延迟触发动画
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // 自动销毁
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300); // 动画持续时间
    }, duration);
  };

  // ✅ 初始化后测试一个 toast
  showToast("🚀 Toast 初始化完成");
})();
