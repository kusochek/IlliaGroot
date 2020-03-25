export async function getNumber() {
    const response = await fetch('http://illya.brutgroot.com/value');
    const value = await response.text();

    return value;
}

export async function setNumber(num) {
    const data = await fetch(`http://illya.brutgroot.com/value/${num}/`, {
      method: "POST"
    });

    return data;
}