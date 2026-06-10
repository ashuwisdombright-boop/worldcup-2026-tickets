// ── FAQ ACCORDION INTERACTIVITY ──
document.querySelectorAll('.faq-q').forEach(function (question) {
  question.addEventListener('click', function () {
    const item = this.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all open panels
    document.querySelectorAll('.faq-item').forEach(function (el) {
      el.classList.remove('open');
    });

    // Toggle current selection panel open state
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
