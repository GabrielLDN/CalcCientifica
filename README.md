
# Documentação

## Estrutura do Projeto

O projeto da calculadora avançada é composto por dois principais arquivos: index.html, style.css e script.js.

### index.html

O arquivo index.html contém a estrutura básica do documento HTML e os elementos que compõem a interface da calculadora. Ele utiliza o framework Bootstrap para estilização e a biblioteca jQuery para manipulação do DOM e gerenciamento de eventos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Avançada</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>Calculadora Avançada</h1>
        <div class="row">
            <div class="col-md-6">
                <div id="resultado" class="card">
                    <div class="card-body">
                        <h3 id="valor">0</h3>
                        <h6 id="valor2"></h6>
                    </div>
                </div>
                <div class="row">
                    <!-- Botões da calculadora -->
                    <!-- ... -->
                </div>
            </div>
            <div class="col-md-6">
                <!-- Memória e histórico -->
                <!-- ... -->
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### script.js

O arquivo script.js contém o código JavaScript responsável pela lógica e interatividade da calculadora. Ele utiliza o framework jQuery para facilitar a manipulação do DOM e o tratamento de eventos.

### Funçoes principais
atualiza(): Obtém os valores dos elementos HTML '#valor' e '#valor2' e atribui esses valores às variáveis 'valor' e 'valor2', respectivamente. Essa função é chamada para atualizar as variáveis antes de realizar cálculos ou exibir resultados.

Observação: todos os exemplos lidos aqui são do projeto aqui armazenados!

Exemplo de uso:
```javascript
function atualiza() {
  valor = $('#valor').text();
  valor2 = $('#valor2').text();
  vaiMudar = false;
  fe = false;
}
```
trataErro(mensagem): Trata erros na calculadora, exibindo uma mensagem de erro na interface do usuário.

Exemplo de uso:
```javascript
function trataErro(mensagem) {
  $('#valor').html(mensagem);
  $('#valor2').html('');
}
```
verificaParenteses(conta): Verifica se a expressão matemática contém parênteses balanceados. Retorna true se os parênteses estiverem balanceados e false caso contrário.

Exemplo de uso:
```javascript
function verificaParenteses(conta) {
  let abre = 0;
  let fecha = 0;
  for (let i = 0; i < conta.length; i++) {
    if (conta[i] === '(') {
      abre++;
    } else if (conta[i] === ')') {
      fecha++;
      if (fecha > abre) {
        return false;
      }
    }
  }
  return abre === fecha;
}
```
calcula(conta): Realiza o cálculo da expressão matemática fornecida como parâmetro. Retorna o resultado do cálculo.

Exemplo de uso:
```javascript
function calcula(conta) {
  try {
    return eval(conta);
  } catch (error) {
    trataErro('Erro de cálculo');
    return null;
  }
}
```
atualizaHistorico(): Atualiza o histórico de cálculos na interface do usuário, exibindo as expressões matemáticas calculadas anteriormente.

Exemplo de uso:
```javascript
function atualizaHistorico() {
  let historicoLocal = localStorage.getItem('historico');
  while (historicoLocal.includes(',')) {
    historicoLocal = historicoLocal.replace(',', '<br>');
  }
  $('#div-historico').html(historicoLocal);
}
```
##### Eventos
click: O evento de clique é utilizado para acionar ações quando um elemento é clicado, como botões numéricos, operadores e funções matemáticas.

Exemplo de uso:
```javascript
$(document).on('click', '#somar', function() {
  atualiza();
  $('#valor2').html($('#valor2').html() + $('#valor').text() + '+');
  vaiMudar = true;
});
```
keydown: O evento de tecla pressionada é usado para capturar as teclas digitadas no teclado numérico e realizar ações correspondentes na calculadora, como digitar números, operadores ou executar cálculos.

Exemplo de uso:
```javascript
document.addEventListener('keydown', function(evt) {
  atualiza();
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  if(key >= 96 && key <= 105) {
    val = key - 96;
    $('#' + val).click();
  }
  switch(key) {
    case 8:
      $('#backspace').click();
      break;
    case 27:
      $('#c').click();
      break;
    case 188:
    case 110:
      $('#virgula').click();
      break;
    case 111:
    case 193:
      $('#dividir').click();
      break;
    case 106:
      $('#multiplicar').click();
      break;
    case 107:
    case 187:
      $('#somar').click();
      break;
    case 109:
    case 189:
      $('#subtrair').click();
      break;
    case 13:
      $('#igual').click();
      break;
  }
});
```
change: O evento de mudança é utilizado para detectar alterações em elementos de entrada, como campos de texto, e executar ações correspondentes quando o valor é modificado.

Exemplo de uso:
```javascript
$(document).on('change', '#valor', function() {
  if(vaiMudar)
    $('#valor').html('');
});
```
mouseover e mouseout: Os eventos de mouseover e mouseout são usados para manipular a interação do mouse com os elementos da calculadora. Eles podem ser usados para realçar botões quando o mouse passa por cima deles e reverter as alterações quando o mouse sai.

Exemplo de uso:
```javascript
$(document).on('mouseover', '#igual', function() {
  $(this).addClass('hover');
});

$(document).on('mouseout', '#igual', function() {
  $(this).removeClass('hover');
});
```
keydown e keyup: Esses eventos são usados em conjunto para permitir que os botões da calculadora fiquem pressionados enquanto a tecla correspondente estiver sendo mantida pressionada pelo usuário. O evento keydown é acionado quando uma tecla é pressionada e o evento keyup é acionado quando a tecla é liberada.

Exemplo de uso:
```javascript
var isKeyPressed = false;

$(document).on('keydown', '#igual', function(e) {
  if (e.repeat) return;
  isKeyPressed = true;
  realizarOperacao();
});

$(document).on('keyup', '#igual', function() {
  isKeyPressed = false;
});
```
scroll: O evento de scroll é usado para detectar a rolagem da página e executar ações correspondentes. Neste projeto, é utilizado para exibir o histórico de cálculos quando o usuário rola a página até a parte inferior.

Exemplo de uso:
```javascript
$(window).scroll(function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    exibirHistorico();
  }
});
```
resize: O evento resize é usado para detectar quando a janela do navegador é redimensionada. Neste projeto, é utilizado para ajustar dinamicamente o layout da calculadora quando a janela é redimensionada, garantindo que os elementos permaneçam bem posicionados e visíveis.

Exemplo de uso:
```javascript
$(window).resize(function() {
  ajustarLayout();
});
```
focus e blur: Os eventos focus e blur são usados para controlar o foco de um elemento de entrada, como a caixa de texto da calculadora. O evento focus é acionado quando o elemento recebe o foco, enquanto o evento blur é acionado quando o elemento perde o foco.

Exemplo de uso:
```javascript
$(document).on('focus', '#valor', function() {
  $(this).addClass('focus');
});

$(document).on('blur', '#valor', function() {
  $(this).removeClass('focus');
});
```
contextmenu: O evento contextmenu é usado para detectar o clique do botão direito do mouse. Neste projeto, é utilizado para desativar o menu de contexto padrão ao clicar com o botão direito do mouse, evitando que o usuário execute ações indesejadas.

Exemplo de uso:
```javascript
$(document).on('contextmenu', function(e) {
  e.preventDefault();
});
```
DOMContentLoaded: O evento DOMContentLoaded é acionado quando o DOM (Document Object Model) foi completamente carregado e analisado, sem esperar que todos os recursos externos, como imagens, sejam carregados. Neste projeto, é usado para garantir que o código JavaScript seja executado somente quando o DOM estiver pronto.

Exemplo de uso:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  iniciarCalculadora();
});
```
## SCREENSHOTS
- [EM BREVE]


## Autor

- [Gabriel Lopes](https://github.com/GabrielLDN)

## Referências e API utilizadas

 - [Vini Floriano](https://www.youtube.com/@vini.floriano)
 - [Calculadora Científica (Win 10)](https://github.com/vinifloriano/CalcWindows)
 - [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
 - [JQuery](https://api.jquery.com/)
 - [Popper](https://popper.js.org/docs/v2/)
 - [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
