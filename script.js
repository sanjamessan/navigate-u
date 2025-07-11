function simulateMovement() {
  const user = document.getElementById('user-position');
  let left = 50;
  const interval = setInterval(() => {
    left += 5;
    user.style.left = left + 'px';
    if (left >= 220) {
      clearInterval(interval);
      alert('You’ve reached Beacon 1');
    }
  }, 300);
}