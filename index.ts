let KeysValue: object = {
    "1": ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    "2": ["D", "G"],
    "3": ["B", "C", "M", "P"],
    "4": ["F", "H", "V", "W", "Y"],
    "5": ["K"],
    "8": ["J", "X"],
    "10": ["Q", "Z"]
}

function GetStringValue(word: string): number{
    let arrWord: Array<string> = word.split("");
    let value: number = 0;
    for (let index = 0; index < arrWord.length; index++) {
        for (const num in KeysValue) {
            if(KeysValue[num].includes(arrWord[index].toUpperCase())){
                value += parseInt(num);
            }
        }
    }

    return value;
}

function showResult(): void {
    let input: HTMLInputElement = document.getElementById("input-one");
    document.getElementById("output-one").innerHTML = GetStringValue(input.value).toString();
}

document.getElementById("button-one").addEventListener("click", showResult)