var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ['azul', 'rojo', 'verde', 'blanco','agua marina','chocolate', 'negro','amarillo','rosa', 'dorado' ,'violetta','beige','naranja', 'lima', 'plateado', 'morado','oliva','coral','lavanda','nieve','turquesa'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'es-ES';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var pistas = document.querySelector('.pistas');

var colorHTML = '';


colors.forEach(function (v) {
  let color = '';
  v = v.toLowerCase();
  switch (v) {
    case 'azul':
      color = 'blue'
      break;
    case 'rojo':
      color = 'red'
      break;
    case 'verde':
      color = 'green'
      break;
      case 'blanco':
      color = 'white'
      break;
      case 'agua marina':
      color = 'aqua'
      break;
      case 'negro':
      color = 'black'
      break;
      case 'amarillo':
      color = 'yellow'
      break;
      case 'rosa':
      color = 'pink'
      break;
      case 'chocolate':
      color = 'chocolate'
      break;
      case 'dorado':
      color = 'gold'
      break;
      case 'violetta':
        color = 'violet'
        break;
        case 'beige':
          color = 'beige'
        break;
        case 'naranja':
          color = 'orange'
        break;
        case 'lima':
          color = 'lime'
        break;
        case 'plateado':
          color = 'silver'
        break;
        case 'morado':
          color = 'purple'
        break;
        case 'oliva':
          color = 'olive'
        break;
        case 'coral':
          color = 'coral'
        break;
        case 'lavanda':
          color = 'lavender'
        break;
        case 'nieve':
          color = 'snow'
          break;
          case 'turquesa':
            color = 'turquoise'
          
        break;
    default:
      break;
  }
  colorHTML += '<span style="margin-right:4px; background-color:' + color + ';"> ' + v + " " + ' </span>';
});
pistas.innerHTML = 'Presiona el boton e intenta con alguno de estos colores: ' + colorHTML + '.';

const btn = document.getElementById('btncolor');
btn.onclick = function () {
  recognition.start();
  console.log('Listo para recibir el color.');
}
const btn2 = document.getElementById('btnresetcolor');
btn2.onclick = function () {
 document.body.style.backgroundColor = "white";
 diagnostic.textContent = '...Esperando color';

}

recognition.onresult = function (event) {
  var color = event.results[0][0].transcript;
  const colorTraslate = translate(color);
  diagnostic.textContent = 'Se escucho: ' + color + '.';
  
  document.body.style.backgroundColor = colorTraslate;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

const translate = (color) => {
  color = color.toLowerCase();
  switch (color) {

    case 'azul':
      return 'blue';
    case 'rojo':
      return 'red';
    case 'verde':
      return 'green';
    case 'blanco':
      return 'white';
    case 'agua marina':
      return 'aqua';
    case 'chocolate':
      return 'chocolate';
    case 'negro':
      return 'black';
    case 'amarillo':
      return 'yellow';
    case 'rosa':
      return 'pink';
    case 'dorado':
      return 'gold';
    case 'violetta':
      return 'violet';
    case 'beige':
      return 'beige';
    case 'naranja':
      return 'orange';
    case 'lima':
      return 'lime';
    case 'plateado':
      return 'silver';
    case 'morado':
        return 'purple'
    case 'oliva':
        return 'olive'
    case 'coral':
        return 'coral'
    case 'lavanda':
        return 'lavender'
    case 'nieve':
        return 'snow'
    case 'turquesa':
        return 'turquoise'
      
    default:
      break;
  }
}

