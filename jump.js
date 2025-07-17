(function () {
 const html = `
  <html><head><meta charset="utf-8"><title>Toast Demo</title>
  <style>
    #toast {
      position: fixed;
      top: 30px;
      right: 30px;
      background: rgba(0,0,0,0.85);
      color: #fff;
      padding: 14px 20px;
      border-radius: 10px;
      font-family: sans-serif;
      opacity: 0;
      transition: all 0.3s ease;
    }
    #toast.show { opacity: 1; }
  </style>
  </head>
  <body>
    <div id="toast">🎉 Hello from a data URL!</div>
    <script>
      setTimeout(() => {
        document.getElementById('toast').classList.add('show');
      }, 100);
    </script>
  </body></html>
`;
const url = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
// ✅ 用跳转方式打开（可用于直接运行）
location.href = url;
})();
