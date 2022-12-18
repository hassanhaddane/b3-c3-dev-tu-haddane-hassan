const operations = require('./operations.js');
const readline = require('readline');

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`

// Node.js Calculator app! 
// Version: 1.0.0.


// L'utilisateur est censé d'utiliser 2 chiffre et ensuite il sera demander de choisir des options
`);

rl.question('Entrez le premier numéro: ', (x) => {
    rl.question('Entrez le deuxième numéro: ', (y) => {
        rl.question(`
Veuillez choisir parmi les options suivantes:

// Fonctions de base (BDD)
[1] Addition (+)
[2] Soustraction (-)
[3] multiplication (*)
[4] Division (/)
[5] Percent (%)

// Fonctions scientifiques (TDD)
[6] Carré ( )
[7] Racine carrée ( )
[8] Puissance de ( )

Entrer votre choix: `, (choice) => {
            if (!operations.validateNumbers(x, y)) {
                console.log('Seuls les chiffres sont autorisés ! Veuillez redémarrer le programme.');
            } else {
                switch (choice) {
                    case '1':
                        console.log(`l'addition de ${x} et ${y} est ${operations.add(x, y)}.`);
                        break;
                    case '2':
                        console.log(`La soustraction de ${x} et ${y} is ${operations.subtract(x, y)}.`);
                        break;
                    case '3':
                        console.log(`La multiplication de ${x} et ${y} est ${operations.multiply(x, y)}.`);
                        break;
                    case '4':
                        console.log(`La division de ${x} et ${y} est ${operations.divide(x, y)}.`);
                        break;
                    case '5':
                        console.log(`La division de ${x} et ${y} est ${operations.percent(x, y)}.`);
                        break;
                    case '6':
                        console.log(`La carré de ${x} et ${y} est ${operations.square(x, y)}.`);
                        break;
                    case '7':
                        console.log(`La racine carrée de ${x} et ${y} est ${operations.squareroot(x, y)}.`);
                        break;
                    case '8':
                        console.log(`La puissance de ${x} et ${y} est ${operations.power(x, y)}.`);
                        break;
                    default:
                        console.log('Veuillez redémarrer le programme et sélectionner un numéro entre 1 et 8.');
                        break;
                }
            }
            rl.close();
        });
    });
});