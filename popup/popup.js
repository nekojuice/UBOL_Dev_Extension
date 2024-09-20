document
  .getElementById("m1123456")
  .addEventListener("click", () => fillaccount("m1123456"));
document
  .getElementById("m2123456")
  .addEventListener("click", () => fillaccount("m2123456"));
document
  .getElementById("s1123456")
  .addEventListener("click", () => fillaccount("s1123456"));
document
  .getElementById("s11234567")
  .addEventListener("click", () => fillaccount("s11234567"));
document
  .getElementById("v1123456")
  .addEventListener("click", () => fillaccount("v1123456"));
document
  .getElementById("v9413529")
  .addEventListener("click", () => fillaccount("v9413529"));
document
  .getElementById("w1123456")
  .addEventListener("click", () => fillaccount("w1123456"));
document
  .getElementById("w9413529")
  .addEventListener("click", () => fillaccount("w9413529"));
document
  .getElementById("s5123456")
  .addEventListener("click", () => fillaccount("s5123456"));
document
  .getElementById("z1234567")
  .addEventListener("click", () => fillaccount("z1234567"));

function fillaccount(account) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        action: "autofillaccount",
        data: {
          account: account,
          pass: "P@ssw0rd",
        },
      },
      (response) => {
        console.log("Response from content script:", response);
      }
    );
  });
}
