(function(){
  const toast = document.getElementById('toast');
  const showBtn = document.getElementById('show-btn');
  // themeToggle removed
  const copyEmailBtn = document.getElementById('copy-email');
  const printBtn = document.getElementById('print-btn');

  function showMessage(text = 'ยินดีต้อนรับ — ขอบคุณที่ดูเรซูเม่ของฉัน!'){
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(showMessage._t);
    showMessage._t = setTimeout(()=>toast.classList.remove('show'),3000);
  }

  showBtn && showBtn.addEventListener('click', ()=> showMessage());

  // dark mode removed - no theme toggle

  // Copy email
  copyEmailBtn && copyEmailBtn.addEventListener('click', async (e)=>{
    const value = e.currentTarget.dataset.value || e.currentTarget.textContent;
    try{
      await navigator.clipboard.writeText(value);
      showMessage('คัดลอกอีเมลเรียบร้อย: ' + value);
    }catch(err){
      showMessage('ไม่สามารถคัดลอกอีเมลได้');
    }
  });

  // Print
  printBtn && printBtn.addEventListener('click', ()=> window.print());

  // Reveal animations on load
  document.addEventListener('DOMContentLoaded', ()=>{
    const els = document.querySelectorAll('.reveal');
    els.forEach((el, i)=> setTimeout(()=> el.classList.add('show'), 80 * i));
  });

  // expose for debug
  window.showMessage = showMessage;
})();
