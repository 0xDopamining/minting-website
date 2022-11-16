function handoverKey(PRIVATE_KEY) {
    const input = document.getElementById("pkey")
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, PRIVATE_KEY);
    var ev2 = new Event('input', { bubbles: true });
    input.dispatchEvent(ev2);
}