function exibirHora() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    // Adiciona um zero à esquerda se a hora, minuto ou segundo for menor que 10
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var elemento = document.getElementById('hora');
    elemento.innerHTML = 'A hora atual é: ' + hora + ':' + minutos + ':' + segundos;
  }

  // Exibe a hora pela primeira vez
  exibirHora();

  // Atualiza a hora a cada segundo
  setInterval(exibirHora, 1000);