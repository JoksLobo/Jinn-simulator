document.addEventListener('DOMContentLoaded', function(){
    const spans = document.querySelectorAll('.clickable-span');
    const clickSound = document.getElementById('click-sound');
    const backgroundMusic = document.getElementById('background-music');
    const input = document.getElementById('name');
    const button = document.getElementById('get-name');
    const resultado = document.getElementById('show-name');

    

    backgroundMusic.play().catch(error => {
        console.error('a reprodução automatica foi impedida', error);
    });

    spans.forEach(span => {
        span.addEventListener('click', function() {
            // Toca o som ao clicar no span
            clickSound.play();

            // Verifica se o span tem o atributo data-url e redireciona se presente
            const url = span.getAttribute('data-url');
            if (url) {
                setTimeout(function() {
                    window.location.href = url;
                }, 1200); // Ajuste o delay conforme necessário (em milissegundos)
            }
        });
    });

    
    button.addEventListener('click', function() {
        const valor = input.value.trim(); // Remove espaços em branco antes e depois do valor
    
        if (valor === "") {
            // Exibe mensagem de erro se o campo estiver vazio
            resultado.textContent = "Por favor, preencha o campo de nome.";
            resultado.style.color = "red";
        } else {
            clickSound.play();
            
            resultado.textContent = `${valor}`;
            resultado.style.color = "black"; // Reseta a cor do texto para o valor normal
    
            const url = `gotYourName.html?name=${encodeURIComponent(valor)}`;
            setTimeout(function() {
                window.location.href = url;
            }, 1500);
        }
    });
});
