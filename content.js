window.addEventListener("load", function () {
  console.log("nkj UBOL_Dev_Extension擴充功能已啟用");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autofillaccount") {
    const account = document.querySelector("#email1");
    const pass = document.getElementById("password1")?.children[0];
    const login = document.getElementsByClassName(
      "p-button p-component w-full p-3 text-xl font-bold"
    )[0];

    if (account) {
      changeInput(account, request.data.account);
    }
    if (pass) {
      changeInput(pass, request.data.pass);
    }

    if (login) {
      login.click();
    }

    sendResponse({ status: "success" });
  }
});

const changeInput = (elem, value) => {
  elem.value = value;
  const event = new Event("input", { bubbles: true });
  elem.dispatchEvent(event);
};
