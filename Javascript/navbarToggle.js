document.addEventListener('DOMContentLoaded', function () {
  const collapseEl = document.getElementById('navbarSupportedDropDown'); // pastikan id sesuai
  const toggler = document.querySelector('.navbar-toggler');

  if (!collapseEl || !toggler || !window.bootstrap) return;

  // Pastikan toggler benar-benar toggle collapse (Bootstrap biasanya otomatis, ini fallback)
  toggler.addEventListener('click', function (e) {
    const bs = bootstrap.Collapse.getOrCreateInstance(collapseEl);
    bs.toggle();
  });

  // Tutup menu saat klik salah satu link (berguna di mobile)
  document.querySelectorAll('#navbarSupportedDropDown .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      // hanya tutup jika toggler terlihat (mode mobile)
      if (window.getComputedStyle(toggler).display !== 'none') {
        const bs = bootstrap.Collapse.getOrCreateInstance(collapseEl);
        bs.hide();
      }
    });
  });
});