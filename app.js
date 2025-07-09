async function oldToNew() {
  const button = document.querySelector('.side-widget button');
  button.textContent = '최신 스타일 불러오는 중...';
  button.disabled = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = 'newPage.html';
  } catch (error) {
    alert('오류 발생');
    button.textContent = '최신 버전 업데이트';
    button.disabled = false;
  }
}
async function newToOld() {
  const button = document.querySelector('.temp-button button');
  button.textContent = '과거 스타일 불러오는 중...';
  button.disabled = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = 'index.html';
  } catch (error) {
    alert('오류 발생');
    button.textContent = '과거 버전 변환';
    button.disabled = false;
  }
}
function goHome() {}
