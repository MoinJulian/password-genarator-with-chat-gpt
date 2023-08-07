document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-btn");
  const copyButton = document.getElementById("copy-btn");
  const generatedPasswordInput = document.getElementById("generated-password");
  const passwordLengthInput = document.getElementById("password-length");
  const includeNumbersInput = document.getElementById("include-numbers");
  const includeSymbolsInput = document.getElementById("include-symbols");
  const confirmationMessage = document.getElementById("confirmation-message");

  function generatePassword(length, includeNumbers, includeSymbols) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_-+={}[]|:;<>,.?/~";

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  generateButton.addEventListener("click", function () {
    const passwordLength = parseInt(passwordLengthInput.value);
    const includeNumbers = includeNumbersInput.checked;
    const includeSymbols = includeSymbolsInput.checked;

    // Validate the input
    if (passwordLength < 1) {
      alert("Please enter a valid password length (at least 1).");
      return;
    }

    const generatedPassword = generatePassword(
      passwordLength,
      includeNumbers,
      includeSymbols
    );
    generatedPasswordInput.value = generatedPassword;
  });

  copyButton.addEventListener("click", function () {
    generatedPasswordInput.select();
    document.execCommand("copy");

    // Remove the selection (highlight) from the input field
    window.getSelection().removeAllRanges();

    // Show confirmation message
    confirmationMessage.textContent = "Password copied to clipboard!";
    setTimeout(() => {
      confirmationMessage.textContent = "";
    }, 3000);
  });
});
