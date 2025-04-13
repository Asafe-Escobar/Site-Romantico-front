// Animação suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Coração flutuante - surpresa ao clicar
document.querySelector('.coracao').addEventListener('click', function() {
    alert('Eu te amo mais a cada dia! ❤️');
});

// Formulário de mensagem
document.getElementById('form-mensagem').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Aqui você poderia implementar o envio da mensagem para um email ou banco de dados
    // Como isso exigiria backend, vamos apenas mostrar um alerta de confirmação
    
    alert(`Obrigado pela sua mensagem, ${nome}! ❤️`);
    this.reset();
});