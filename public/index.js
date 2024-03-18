document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");

  button.addEventListener("click", async () => {
      try {
          let inputField = document.createElement("input");
          let submit = document.createElement("button");
          inputField.setAttribute("id", "inputField");
          inputField.placeholder = "Input Url";
          submit.setAttribute("id", "submit");
          submit.textContent = "Fetch Website";
          submit.addEventListener("click", fetchWebsite);
          document.body.appendChild(inputField);
          document.body.appendChild(submit);
      } catch (error) {
          console.error('Error:', error);
      }
  });
});

async function fetchWebsite() {
  const url = document.getElementById('urlInput').value;
  const localProxyUrl = `http://50.39.101.106:3000/fetchWebsite?url=${url}`;

  try {
    const response = await fetch(localProxyUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    });

    const content = await response.text();
    document.getElementById('resultContainer').innerHTML = content;
  } catch (error) {
    console.error('Error fetching website:', error);
    document.getElementById('resultContainer').innerHTML = 'Error fetching website.';
  }
}
