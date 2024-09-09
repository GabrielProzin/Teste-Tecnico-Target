const readline = require("readline");

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Digite uma palavra para ser invertida: ", (inputString) => {
    let invertedString = "";

    // Verifica o tamanho da string e inverte os caracteres dela
    for (let i = inputString.length - 1; i >= 0; i--) {
      invertedString += inputString[i];
    }

    console.log(`Palavra invertida: ${invertedString}`);

    rl.close();
  });
}

main();
