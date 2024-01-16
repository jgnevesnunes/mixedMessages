// SET THE MESSAGES

const part1 = ['Bom dia!', 2, 3];
const part2 = [4, 'Quem eres?', 6];
const part3 = [7, 8, 'Nao conheco!'];


// MIX THE MESSAGES

const generateMessage = () => {
    return console.log(`${part1[Math.floor(Math.random() * (part1.length))]} ${part2[Math.floor(Math.random() * (part2.length))]} ${part3[Math.floor(Math.random() * (part2.length))]}`);

}

generateMessage()

