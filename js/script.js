// Declaração de variáveis
var vaiMudar = false, cont, valor, historico = Array(), memoria = Array(), fe = false, hyp=false; deg="deg";

// Função para atualizar a interface de usuário (UI)
function atualiza() {
    // Altera a cor de fundo do botão pressionado
    $(this).css('background-color' , 'rgb(250,100,0)');
    
    // Obtém o valor atual do campo de texto
    valor = $('#valor').text();
    
    // Substitui a vírgula por um ponto (para possibilitar operações matemáticas)
    valor = valor.replace(',','.');
    
    // Restaura a cor de fundo dos botões após um breve intervalo (100ms)
    setTimeout(function(){
        $('.col').css('background-color', 'rgb(240, 240, 240)');
        $('.numeros').css('background-color', 'rgb(250, 250, 250)');
    },100);
    
    // Altera a cor de fundo dos botões quando o mouse passa por cima
    $('.col').hover(function(){ // Operadores
        $(this).css('background-color', 'rgb(250,100,0)'); // Laranja
    }, function(){  // Operadores
        $(this).css('background-color', 'rgb(240,240,240)');
    });
    
    // Altera a cor de fundo dos botões numéricos quando o mouse passa por cima
    $('.numeros').hover(function(){
        $(this).css('background-color', 'rgb(250,100,0)');
    }, function(){
        $(this).css('background-color', 'rgb(250,250,250)');
    });
}

// Adiciona um ouvinte de evento para o clique nos elementos com a classe 'numeros'
$(document).on('click', '.numeros', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    
    // Verifica se a quantidade de caracteres da variável 'valor' é menor que 15
    if(valor.length < 15) {
        // Se for, verifica se o 'valor' é igual a "0" ou se a variável 'vaiMudar' é verdadeira
        // Se qualquer uma das condições for verdadeira, atualiza o conteúdo do elemento com id 'valor' para o texto do botão pressionado
        // Caso contrário, adiciona o texto do botão pressionado ao final de 'valor' e substitui qualquer ponto por uma vírgula
        $('#valor').html(valor=="0"||vaiMudar ? $(this).text().trim() : (valor+$(this).text().trim()).replace('.',','));
    }
    
    // Define a variável 'vaiMudar' como falsa, indicando que o próximo número pressionado não deve substituir o valor atual, mas ser adicionado ao final
    vaiMudar = false;
});

// Adiciona um ouvinte de evento de clique para todos os elementos com a classe 'opp'
$(document).on('click', '.opp', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    
    // Verifica se o texto do botão pressionado é igual a "("
    if($(this).text() == "(") {
        // Se for, adiciona o texto do botão ao final do texto do elemento com id 'valor2', com espaços antes e depois
        $('#valor2').html($('#valor2').text()+" "+$(this).text()+" ");
    } else {
        // Se não for, adiciona o texto do elemento com id 'valor' e o texto do botão ao final do texto do elemento com id 'valor2', com espaços antes e depois
        $('#valor2').html($('#valor2').text()+$('#valor').text() + " "+$(this).text()+" ");
    }
    
    // Define a variável 'vaiMudar' como verdadeira, indicando que o próximo número pressionado deve substituir o valor atual, não ser adicionado ao final
    vaiMudar = true;
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'ce'
$(document).on('click', '#ce', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    
    // Define o texto do elemento com id 'valor' como '0', efetivamente limpando a entrada atual
    $('#valor').html('0');
});

// // Adiciona um ouvinte de evento de clique ao elemento com id 'c'
$(document).on('click', '#c', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Define o texto do elemento com id 'valor' como '0', efetivamente limpando a entrada atual
    $('#valor').html('0');
    // Limpa o campo de texto do elemento com id 'valor2'
    $('#valor2').html('');
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'backspace'
$(document).on('click', '#backspace', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Verifica se a variável 'valor' não é "0" e tem mais de um caractere
    if(valor != "0" && valor.length != 1) {
        // Se for, remove o último caractere do texto do elemento com id 'valor' e substitui qualquer ponto por uma vírgula
        $('#valor').html(valor.substring(0, valor.length-1).replace('.',','));
    }
    // Verifica se o texto do elemento com id 'valor' é vazio, igual a "-", ou se a variável 'valor' tem apenas um caractere
    else if($('#valor').text() == "" || $('#valor').text() == "-" || valor.length == 1) {
        // Se for, define o texto do elemento com id 'valor' como '0'
        $('#valor').html("0");
    }
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'xquad'
$(document).on('click', '#xquad', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o quadrado do valor atual, armazenando o resultado na variável 'xquad'
    xquad = Math.pow(parseFloat(valor),2);
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'xquad', substituindo qualquer ponto por uma vírgula
    $('#valor').html(xquad.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'elevado'
$(document).on('click', '#elevado', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Adiciona o valor atual e o símbolo de potência ao final do texto do elemento com id 'valor2'
    $('#valor2').html($('#valor2').text()+$('#valor').text() + " ^ ");
    // Define a variável 'vaiMudar' como verdadeira, indicando que o próximo número pressionado deve substituir o valor atual, não ser adicionado ao final
    vaiMudar = true;
});


// // Adiciona um ouvinte de evento de clique ao elemento com id 'sen'
$(document).on('click', '#sen', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o seno do valor atual, armazenando o resultado na variável 'sen'
    sen = Math.sin(parseFloat(valor));
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'sen', substituindo qualquer ponto por uma vírgula
    $('#valor').html(sen.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'cos'
$(document).on('click', '#cos', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o cosseno do valor atual, armazenando o resultado na variável 'cos'
    cos = Math.cos(parseFloat(valor));
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'cos', substituindo qualquer ponto por uma vírgula
    $('#valor').html(cos.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'tan'
$(document).on('click', '#tan', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula a tangente do valor atual, armazenando o resultado na variável 'tan'
    tan = Math.tan(parseFloat(valor));
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'tan', substituindo qualquer ponto por uma vírgula
    $('#valor').html(tan.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'xcubo'
$(document).on('click', '#xcubo', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o cubo do valor atual, armazenando o resultado na variável 'xcubo'
    xcubo = Math.pow(parseFloat(valor),3);
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'xcubo', substituindo qualquer ponto por uma vírgula
    $('#valor').html(xcubo.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'yroot'
$(document).on('click', '#yroot', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Adiciona o texto " yroot " ao final do conteúdo do elemento com id 'valor'
    $('#valor').html($('#valor').text() + " yroot ");
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'sen1'
$(document).on('click', '#sen1', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o arcosseno (ou seja, o inverso do seno) do valor atual, armazenando o resultado na variável 'sen'
    sen = Math.pow(Math.sin(parseFloat(valor)),-1);
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'sen', substituindo qualquer ponto por uma vírgula
    $('#valor').html(sen.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'cos1'
$(document).on('click', '#cos1', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o arcocosseno (ou seja, o inverso do cosseno) do valor atual, armazenando o resultado na variável 'cos'
    cos = Math.pow(Math.cos(parseFloat(valor)),-1);
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'cos', substituindo qualquer ponto por uma vírgula
    $('#valor').html(cos.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'tan1'
$(document).on('click', '#tan1', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula a arcotangente (ou seja, o inverso da tangente) do valor atual, armazenando o resultado na variável 'tan'
    tan = Math.pow(Math.tan(parseFloat(valor)),-1);
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'tan', substituindo qualquer ponto por uma vírgula
    $('#valor').html(tan.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'raiz'
$(document).on('click', '#raiz', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula a raiz quadrada do valor atual, armazenando o resultado na variável 'raiz'
    raiz = Math.sqrt(parseFloat(valor));
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'raiz', substituindo qualquer ponto por uma vírgula
    $('#valor').html(raiz.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'dezax'
$(document).on('click', '#dezax', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula 10 elevado ao valor atual, armazenando o resultado na variável 'dezax'
    dezax = Math.pow(10, parseFloat(valor));
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'dezax', substituindo qualquer ponto por uma vírgula
    $('#valor').html(dezax.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'log'
$(document).on('click', '#log', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o logaritmo natural do valor atual, armazenando o resultado na variável 'log'
    log = Math.log(parseFloat(valor));
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'log', substituindo qualquer ponto por uma vírgula
    $('#valor').html(log.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'exp'
$(document).on('click', '#exp', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Adiciona a string ",e+" ao conteúdo do elemento com id 'valor'
    $('#valor').html($('#valor').text() + ",e+");
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'mod'
$(document).on('click', '#mod', function() {
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Adiciona a string "Mod" ao conteúdo do elemento com id 'valor'
    $('#valor').html($('#valor').text() + " Mod ");
    // Define a variável 'vaiMudar' como verdadeira, indicando que uma nova operação será iniciada
    vaiMudar = true;
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'umsobre'
$(document).on('click', '#umsobre', function() { 
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o inverso do valor atual, armazenando o resultado na variável 'umsobre'
    umsobre = 1/parseFloat(valor);  
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'umsobre', substituindo qualquer ponto por uma vírgula
    $('#valor').html(umsobre.toString().replace('.',','));
});

// // Adiciona um ouvinte de evento de clique ao elemento com id 'eax'
$(document).on('click', '#eax', function() { 
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o valor de e (aproximadamente 2.71828182845904523) elevado ao valor atual, armazenando o resultado na variável 'eax'
    eax = Math.pow(2.71828182845904523, parseFloat(valor)); 
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'eax', substituindo qualquer ponto por uma vírgula
    $('#valor').html(eax.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'ln'
$(document).on('click', '#ln', function() { 
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Calcula o logaritmo natural (base e) do valor atual, armazenando o resultado na variável 'ln'
    ln = Math.log(parseFloat(valor))/Math.log(2.71828182845904523); 
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'ln', substituindo qualquer ponto por uma vírgula
    $('#valor').html(ln.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'dms'
$(document).on('click', '#dms', function() {   
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Separa o valor atual na parte inteira e na parte decimal, multiplica a parte decimal por 60, e concatena com a parte inteira
    dms = valor.split('.')[0]+","+(valor.split('.')[1]*6); 
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'dms'
    $('#valor').html(dms);
});

// // Adiciona um ouvinte de evento de clique ao elemento com id 'deg'
$(document).on('click', '#deg', function() {    
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Separa o valor atual na parte inteira e na parte decimal
    valorSplit = valor.split('.'); 
    // Verifica se a parte decimal, após multiplicação por 16, resulta em um número com mais de dois dígitos
    if((valorSplit[1]*16).toString().length > 2) 
        // Se sim, incrementa a parte inteira por 1 e concatena a parte decimal, ignorando o primeiro dígito 
        deg = (parseInt(valorSplit[0])+1)+","+(valorSplit[1]*1666666666).substring(1, (valorSplit[1]*1666666666).toString().length); 
    else 
        // Se não, apenas concatena a parte inteira com a parte decimal multiplicada por 16
        deg = valorSplit[0]+","+(valorSplit[1]*1666666666);  
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'deg', substituindo qualquer ponto por uma vírgula
    $('#valor').html(deg.toString().replace('.',',')); 
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'pi'
$(document).on('click', '#pi', function() { 
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de pi (aproximadamente 3,141592653589793)
    $('#valor').html('3,141592653589793');
    // Define a variável vaiMudar como verdadeira, para sinalizar que a expressão será alterada
    vaiMudar = true;
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'fatorial'
$(document).on('click', '#fatorial', function() {   
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Se o valor atual é negativo, define 'fatorial' como "Entrada Inválida"
    if(valor<0)
        fatorial = "Entrada Inválida";
    else {
        // Caso contrário, calcula o fatorial do valor
        var fatorial = 1;
        for(x = valor; x>1; x--)
            fatorial = fatorial * x;
    }
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'fatorial', substituindo qualquer ponto por uma vírgula
    $('#valor').html(fatorial.toString().replace('.',','));
});

// // Adiciona um ouvinte de evento de clique ao elemento com id 'maismenos'
$(document).on('click', '#maismenos', function() {  
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Multiplica o valor atual por -1 para alternar seu sinal
    menos = parseFloat(valor)*-1;
    // Atualiza o conteúdo do elemento com id 'valor' com o valor de 'menos', substituindo qualquer ponto por uma vírgula
    $('#valor').html(menos.toString().replace('.',','));
});

// Adiciona um ouvinte de evento de clique ao elemento com id 'virgula'
$(document).on('click', '#virgula', function() {    
    // Chama a função 'atualiza' para atualizar a interface do usuário
    atualiza();
    // Verifica se o valor atual já contém um ponto decimal
    if(!valor.includes('.'))
        // Se não, adiciona uma vírgula ao final do valor
        $('#valor').html(valor+",");
});

// Adiciona um listener de evento para o clique no botão "=" (igual)
$(document).on('click', '#igual', function() {  
    // Atualiza a UI
    atualiza();

    // Obtém o texto do elemento com o id "valor2"
    valor2 = $('#valor2').text();

    // Substitui os caracteres "×" por "*" e "÷" por "/"
    valor2 = valor2.replace('×','*');
    valor2 = valor2.replace('÷', '/');

    conta = "";

    // Verifica se o último caractere do valor2 é um parênteses de fechamento
    if(valor2.substring(valor2.length-2, valor2.length-1) == ")")
        conta = valor2; // Se for, conta recebe valor2
    else
        // Se não for, conta recebe valor2 adicionado ao texto do elemento com o id "valor"
        conta = valor2 + $('#valor').text();

    resultado = 0;

    // Substitui todas as vírgulas na conta por pontos
    conta = conta.replace(',','.');

    // Adiciona a conta ao histórico
    historico.push(conta);

    // Verifica se a conta inclui uma potência
    if(conta.includes('^')) {
        conta = conta.split('^');
        for(i=0;i<conta.length; i++) {
            if(i==0)
                resultado = eval(conta[0]);
            else 
                // Se incluir, calcula a potência
                resultado = Math.pow(resultado, eval(conta[i]));
        }
    }
    // Verifica se a conta inclui um "Mod"
    else if(conta.includes('Mod')) {
        conta = conta.split('Mod');
        for(i=0;i<conta.length; i++) {
            if(i==0)
                resultado = eval(conta[0]);
            else 
                // Se incluir, calcula o módulo
                resultado = resultado%eval(conta[i]);
        }
    }
    // Verifica se a conta inclui uma "yroot"
    else if(conta.includes('yroot')) {
        conta = conta.split('yroot');
        for(i=0;i<conta.length; i++) {
            if(i==0)
                resultado = eval(conta[0]);
            else 
                // Se incluir, calcula a raiz
                resultado = Math.pow(resultado, 1/eval(conta[i]));
        }
    }
    else 
        // Se a conta não incluir nenhuma das opções acima, apenas avalia a conta
        resultado = eval(conta);

    // Limpa o valor do elemento com o id "valor2"
    $('#valor2').html("");

    // Define a variável vaiMudar como verdadeira
    vaiMudar = true;

    // Verifica se a variável "fe" é verdadeira
    if(fe) {
        // Se for, exibe o resultado em notação exponencial
        $('#valor').html(resultado.toExponential().toString().replace('.',',')); // Substitui o ponto por vírgula
    }
    else {
        $('#valor').html(resultado.toString().replace('.',','));    // Substitui o ponto por vírgula
    }
    historico.push("<h3>"+resultado+"</h3>");   // Adiciona o resultado ao histórico
    localStorage.setItem("historico", historico);   // Salva o histórico no localStorage
    var historicoLocal = localStorage.getItem("historico"); // Obtém o histórico do localStorage
    while(historicoLocal.includes(',')) // Enquanto o histórico incluir vírgulas
        historicoLocal = historicoLocal.replace(',','<br>');    // Substitui as vírgulas por quebras de li nha
    $('#div-historico').html(historicoLocal);   // Atualiza o conteúdo do elemento com o id "div-historico" com o histórico
});

$(document).on('click', '#deg2', function() {   //Evento de clique no botão deg (graus)
    // Verifica se a variável 'deg' é igual a "deg" (graus)
    if(deg == "deg") {
        // Se for, muda para "rad" e atualiza o texto do botão para "RAD"   
        deg = "rad";
        this.innerHTML = "RAD";
    }
    // Se não for "deg", verifica se é "rad"    
    else if(deg == "rad") {
        // Se for "rad", muda para "grad" e atualiza o texto do botão para "GRAD"   
        deg = "grad";
        this.innerHTML = "GRAD";
    }
    else {
        // Se não for nem "deg" nem "rad", volta para "deg" e atualiza o texto do botão para "DEG"
        deg = "deg";
        this.innerHTML = "DEG";
    }
});

$(document).on('click', '#fe', function() { //Evento de clique no botão fe (notação exponencial)
    // Verifica se a variável 'fe' é verdadeira
    if(fe) {
        // Se for, muda para falso e remove a borda inferior do botão
        fe= false;
        this.style.borderBottom = "none";
    }
    else {
        // Se 'fe' for falso, muda para verdadeiro e adiciona uma borda inferior vermelha ao botão
        fe = true;
        this.style.borderBottom = "3px solid red";
    }
});


$(document).on('click', '#hyp', function() {    //Evento de clique no botão hyp (funções trigonométricas hiperbólicas)
    // Verifica se a variável 'hyp' é verdadeira
    if(hyp) {
        // Se for, muda para falso e remove a borda inferior do botão
        hyp = false;
        this.style.borderBottom = "none";
        // Altera o conteúdo dos botões de funções trigonométricas para suas versões regulares (não hiperbólicas)
        $('#sen').html("<span>sin</span>");
        $('#cos').html("<span>cos</span>");
        $('#tan').html("<span>tan</span>");
        $('#sen1').html("<span>sin<sup>-1</sup></span>");
        $('#cos1').html("<span>cos<sup>-1</sup></span>");
        $('#tan1').html("<span>tan<sup>-1</sup></span>");
    }
    else {
        // Se 'hyp' for falso, muda para verdadeiro e adiciona uma borda inferior vermelha ao botão
        hyp = true;
        this.style.borderBottom = "3px solid red";
        // Altera o conteúdo dos botões de funções trigonométricas para suas versões hiperbólicas
        $('#sen').html("<span>sinh</span>");
        $('#cos').html("<span>cosh</span>");
        $('#tan').html("<span>tanh</span>");
        $('#sen1').html("<span>sinh<sup>-1</sup></span>");
        $('#cos1').html("<span>cosh<sup>-1</sup></span>");
        $('#tan1').html("<span>tanh<sup>-1</sup></span>");
    }
});


document.addEventListener('keydown', function(evt) {    //Evento de tecla pressionada no documento (teclado numérico)
    atualiza();  // Chama a função atualiza()
    evt = evt || window.event;  // Pega o evento ou o evento da janela
    var key = evt.keyCode || evt.which;  // Pega o código da tecla pressionada ou o equivalente alternativo
    if(key>=96 && key<=105) {  // Se a tecla pressionada é um número de 0 a 9 no teclado numérico
        val = key-96;  // Converte o código da tecla para o número correspondente
        $('#'+val).click();  // Simula um clique no botão do número correspondente
    }
    switch(key) {  // Verifica qual tecla foi pressionada
        case 8:  // Se a tecla é "backspace"
            $('#backspace').click();  // Simula um clique no botão "backspace"
            break;
        case 27:  // Se a tecla é "esc"
            $('#c').click();  // Simula um clique no botão "c"
            break;
        case 188: case 110:  // Se a tecla é "," ou "."
            $('#virgula').click();  // Simula um clique no botão "virgula"
            break;
        case 111: case 193:  // Se a tecla é "/" ou "/"
            $('#dividir').click();  // Simula um clique no botão "dividir"
            break;
        case 106:  // Se a tecla é "*"
            $('#multiplicar').click();  // Simula um clique no botão "multiplicar"
            break;
        case 107: case 187:  // Se a tecla é "+" ou "+"
            $('#somar').click();  // Simula um clique no botão "somar"
            break;
        case 109: case 189:  // Se a tecla é "-" ou "-"
            $('#subtrair').click();  // Simula um clique no botão "subtrair"
            break;
        case 13:  // Se a tecla é "enter"
            $('#igual').click();  // Simula um clique no botão "igual"
            break;
    }
});


// Evento de clique no botão de memória
$(document).on('click', '#memoria', function(){   
    // Substitui o conteúdo da div 'tab' com um novo elemento div com id 'div-memoria' 
    // e uma mensagem padrão que diz "Não há nada salvo na memória"
    $('.tab').html("<div id='div-memoria'>Não há nada salvo na memória</div>");

    // Recupera o item 'memoria' do localStorage
    var memoriaLocal =localStorage.getItem("memoria");

    // Enquanto houver uma vírgula na string memoriaLocal, substitui por uma quebra de linha
    while(memoriaLocal.includes(','))
        memoriaLocal = memoriaLocal.replace(',','<br>');

    // Define o conteúdo interno do elemento 'div-memoria' como a string memoriaLocal
    document.getElementById("div-memoria").innerHTML = memoriaLocal;

    // Altera a cor da borda inferior do botão de memória para vermelho
    document.getElementById('mem').style.borderBottom = "3px solid red";

    // Remove a cor da borda inferior do botão de histórico
    document.getElementById('his').style.borderBottom = "none";
});

// Evento de clique no botão de histórico
$(document).on('click', '#historico', function() { 
    // Substitui o conteúdo da div 'tab' com um novo elemento div com id 'div-historico' 
    // e uma mensagem padrão que diz "Ainda não há histórico"
    $('.tab').html("<div id='div-historico'>Ainda não há histórico</div>");

    // Recupera o item 'historico' do localStorage
    var historicoLocal = localStorage.getItem("historico");

    // Enquanto houver uma vírgula na string historicoLocal, substitui por uma quebra de linha
    while(historicoLocal.includes(',')) 
        historicoLocal = historicoLocal.replace(',','<br>');

    // Define o conteúdo interno do elemento 'div-historico' como a string historicoLocal
    $('#div-historico').html(historicoLocal);

    // Altera a cor da borda inferior do botão de histórico para laranja
    $('#his').css('borderBottom', '3px solid orange'); 

    // Remove a cor da borda inferior do botão de memória
    $('#mem').css('borderBottom', 'none'); 
}); 


// Define um evento de clique para o botão com o id 'ms'
$(document).on('click', '#ms', function(){  
    // Adiciona o texto do elemento com o id 'valor' ao array de memória
    memoria.push($('#valor').text());   

    // Armazena o array de memória no localStorage
    localStorage.setItem("memoria",memoria);    

    // Recupera a memória do localStorage
    var memoriaLocal =localStorage.getItem("memoria");  

    // Enquanto a memória local contiver uma vírgula
    while(memoriaLocal.includes(','))   
        // Substitui a vírgula por uma quebra de linha
        memoriaLocal = memoriaLocal.replace(',','<br>');

    // Define o conteúdo interno do elemento com o id 'div-memoria' como a memória local
    document.getElementById("div-memoria").innerHTML = memoriaLocal;   

    // Indica que o próximo número que for digitado irá substituir o valor atual
    vaiMudar = true;   
}); 

// Define um evento de clique para o botão com o id 'mc'
$(document).on('click', '#mc', function(){  
    // Define o item de memória no localStorage como uma string vazia
    localStorage.setItem("memoria","");

    // Define o conteúdo interno do elemento com o id 'div-memoria' como vazio
    document.getElementById("div-memoria").innerHTML = "";

    // Define a memória como um novo array vazio
    memoria = Array();
});

// Define um evento de clique para o botão com o id 'mr'
$(document).on('click', '#mr', function(){  
    // Recupera a memória do localStorage
    var memoriaLocal =localStorage.getItem("memoria");  

    // Divide a memória local em um array pelos vírgulas
    memoriaLocal = memoriaLocal.split(',');

    // Define o conteúdo interno do elemento com o id 'valor' como o último item da memória local
    document.getElementById("valor").innerHTML = memoriaLocal[memoriaLocal.length-1];

    // Indica que o próximo número que for digitado irá substituir o valor atual
    vaiMudar = true;
});

// Define um evento de clique para o botão com o id 'mMais'
$(document).on('click', '#mMais', function(){  
    // Recupera a memória do localStorage
    var memoriaLocal = localStorage.getItem("memoria");

    // Divide a memória local em um array pelas vírgulas
    memoriaLocal = memoriaLocal.split(',');

    // Cria uma nova variável de memória que será atualizada
    var memoria2 = "";

    // Percorre todos os elementos do array de memória local, exceto o último
    for(i=0; i< memoriaLocal.length-1; i++) {
        // Adiciona o elemento atual da memória local à nova memória, seguido de uma vírgula
        memoria2 += memoriaLocal[i] + ",";
    }

    // Adiciona à nova memória a soma do último elemento da memória local com o valor atual exibido
    memoria2 += parseFloat(memoriaLocal[memoriaLocal.length-1]) + parseFloat($('#valor').text());

    // Divide a nova memória em um array pelas vírgulas
    memoria = memoria2.split(',');

    // Define o item de memória no localStorage como a nova memória
    localStorage.setItem("memoria", memoria2);

    // Enquanto a nova memória contiver vírgulas, substitui-as por quebras de linha
    while(memoria2.includes(',')) {
        memoria2 = memoria2.replace(',', '<br>');
    }

    // Define o conteúdo interno do elemento com o id 'div-memoria' como a nova memória
    document.getElementById("div-memoria").innerHTML = memoria2;
});

// Define um evento de clique para o botão com o id 'mMenos'
$(document).on('click', '#mMenos', function(){  
    // Recupera a memória do localStorage
    var memoriaLocal = localStorage.getItem("memoria");

    // Divide a memória local em um array pelas vírgulas
    memoriaLocal = memoriaLocal.split(',');

    // Cria uma nova variável de memória que será atualizada
    var memoria2 = "";

    // Percorre todos os elementos do array de memória local, exceto o último
    for(i=0; i< memoriaLocal.length-1; i++) {
        // Adiciona o elemento atual da memória local à nova memória, seguido de uma vírgula
        memoria2 += memoriaLocal[i] + ",";
    }

    // Adiciona à nova memória a diferença entre o último elemento da memória local e o valor atual exibido
    memoria2 += parseFloat(memoriaLocal[memoriaLocal.length-1]) - parseFloat($('#valor').text());

    // Divide a nova memória em um array pelas vírgulas
    memoria = memoria2.split(',');

    // Define o item de memória no localStorage como a nova memória
    localStorage.setItem("memoria", memoria2);

    // Enquanto a nova memória contiver vírgulas, substitui-as por quebras de linha
    while(memoria2.includes(',')) {
        memoria2 = memoria2.replace(',', '<br>');
    }

    // Define o conteúdo interno do elemento com o id 'div-memoria' como a nova memória
    document.getElementById("div-memoria").innerHTML = memoria2;
});

// Define um evento de carregamento do documento
$(document).ready(function(){   
    // Simula um clique no botão com o id 'historico'
    $('#historico').click();    
});