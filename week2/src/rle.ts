export class RLE {
  static encode(input: string): string {
    let encoded = "";
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
      if (input[i] === input[i - 1]) {
        count++;
      } else {
        encoded += count + input[i - 1];
        count = 1;
      }
    }

    return encoded;
  }

  static decode(input: string): string {
    let decoded = "";
    let count = "";

    for (const char of input) {
      if (isNaN(Number(char))) {
        decoded += char.repeat(Number(count) || 1);
        count = "";
      } else {
        count += char;
      }
    }

    return decoded;
  }
}
