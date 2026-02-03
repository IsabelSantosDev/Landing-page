const whatsappBtn = document.getElementById('whatsappBtn');

// ⚠️ Coloque seu número aqui (DDD + número, sem espaços e sem símbolos)
const phoneNumber = '5511990035200';

// Mensagem automática
const message = 'Olá! Gostaria de solicitar um orçamento para criar um site.';

whatsappBtn.addEventListener('click', function () {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
});
