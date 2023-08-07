function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecialChars = document.getElementById(
    "includeSpecialChars"
  ).checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;

  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) charset += "0123456789";
  if (includeSpecialChars) charset += "!@#$%^&*()_-+=";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // Für mobile Geräte

  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
