# Minting Website

This website is used to mint Dopamining NFT dragons during the presale by being opened from the app.

## Test applicaiton

Start the development server using `npm start` and interact with the web application.

## Insert private key into web application

To insert a private key into the application, use the following JS code from the console and replace PRIVATE_KEY with your private key:

`const input = document.getElementById("pkey")`<br>
`var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;`<br>
`nativeInputValueSetter.call(input, PRIVATE_KEY);`<br>
`var ev2 = new Event('input', { bubbles: true});`<br>
`input.dispatchEvent(ev2);`
