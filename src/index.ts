async function main() {
    let counter = 0;
    while (true) {
        console.log(`Приложение работает! [${counter}]`);
        counter++;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Пауза 1 секунда
    }
}

main().catch(console.error);