// Efeito de rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 70, // Subtrai a altura do menu fixo
            behavior: 'smooth'
        });
    });
});

// Simular envio do formulário de contato
const form = document.getElementById('formContato');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    
    // Alerta de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.`);
    
    // Limpa o formulário
    form.reset();
});

// Mudar estilo do menu ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
