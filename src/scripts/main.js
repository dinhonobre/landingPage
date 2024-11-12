AOS.init();

const diaDoEvento = new Date('dec 12, 2030 20:00:00');
const timeStampDoEvento = diaDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horasEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);
