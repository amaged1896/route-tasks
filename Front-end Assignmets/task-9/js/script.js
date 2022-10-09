var siteNameInput = document.getElementById("siteNameInput");
var urlInput = document.getElementById("urlInput");
var webSiteInfo = [];

if (localStorage.getItem("website") != null) {
  webSiteInfo = JSON.parse(localStorage.getItem("website"));
  displayWebSites();
}

function addWebSite() {
  var website = {
    siteName: siteNameInput.value,
    siteUrl: urlInput.value,
  };
  webSiteInfo.push(website);
  localStorage.setItem("website", JSON.stringify(webSiteInfo));
  displayWebSites();
  clearInputs();
}

function displayWebSites() {
  var sites = ``;
  for (i = 0; i < webSiteInfo.length; i++) {
    sites += `<tr>
          <td>${webSiteInfo[i].siteName}</td>
          <td>${webSiteInfo[i].siteUrl}</td>
          <td><button onclick="deleteSite(${i})" class="btn btn-sm btn-danger">Delete</button></td>
          <td><a href="${webSiteInfo[i].siteUrl}" class="btn btn-sm btn-primary" target="_blank">visit</a></td>
          </tr>`;
  }
  document.getElementById("tableBody").innerHTML = sites;
}

function clearInputs() {
  siteNameInput.value = "";
  urlInput.value = "";
}

function deleteSite(deletedIndex) {
  webSiteInfo.splice(deletedIndex, 1);
  localStorage.setItem("website", JSON.stringify(webSiteInfo));
  displayWebSites();
}
