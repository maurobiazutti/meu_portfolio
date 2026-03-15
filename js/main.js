document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contatoForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = form.nome.value.trim();

    if (!nome) {
      status.textContent = 'Por favor, preencha o nome.';
      status.style.color = '#b91c1c';
      return;
    }

    status.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    status.style.color = '#065f46';
    form.reset();
  });
});