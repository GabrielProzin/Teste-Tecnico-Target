const readline = require("readline");

function main() {
  let x = 0;
  let y = 1;
  let fib = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Digite um número para verificar se faz parte da sequência de Fibonacci: ",
    (input) => {
      let numero = Number(input);

      while (fib < numero) {
        fib = x + y;
        x = y;
        y = fib;
      }

      if (fib === numero || numero === 0) {
        console.log(`${numero} faz parte da sequência de Fibonacci.`);
      } else {
        console.log(`${numero} não faz parte da sequência de Fibonacci.`);
      }

      rl.close();
    }
  );
}

main();
