function changeGreeting() {
    /* Define uma função chamada 'changeGreeting'. Uma função é como uma receita que
    executa um conjunto de instruções quando é chamada. Neste caso, a função mudará o texto na
    tela. */
    document.getElementById("greeting").innerText = "bem vindo ao auto car";
    /* Esta linha diz ao navegador para procurar um elemento na página com o 'id' chamado
    "greeting" (no caso, o <h1> do HTML).
    A função 'innerText' altera o texto dentro desse elemento. Assim, o texto original "Hello
    Missal" é substituído por "Bem-vindo a Missal!". */
    }