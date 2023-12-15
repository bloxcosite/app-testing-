/*
 _      _                                                  
| |    | |                                                 
| |__  | |  ___  __  __  ___   ___       ___   _ __   __ _ 
| '_ \ | | / _ \ \ \/ / / __| / _ \     / _ \ | '__| / _` |
| |_) || || (_) | >  < | (__ | (_) | _ | (_) || |   | (_| |
|_.__/ |_| \___/ /_/\_\ \___| \___/ (_) \___/ |_|    \__, |
                                                      __/ |
                                                     |___/ 
                    bloxco.org              
                    main.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: main.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 08-07-2023 @ 18:48CEST */
/* Use: This is the main file JavaScript, which is loaded onto all pages in the site. It contains all the necessary stuff. */

const siteVersion = "dec1"
const _MAINTENANCE = false

console.log(atob("IF8gICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKfCB8ICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKfCB8X18gIHwgfCAgX19fICBfXyAgX18gIF9fXyAgIF9fXyAgICAgICBfX18gICBfIF9fICAgX18gXyAKfCAnXyBcIHwgfCAvIF8gXCBcIFwvIC8gLyBfX3wgLyBfIFwgICAgIC8gXyBcIHwgJ19ffCAvIF9gIHwKfCB8XykgfHwgfHwgKF8pIHwgPiAgPCB8IChfXyB8IChfKSB8IF8gfCAoXykgfHwgfCAgIHwgKF98IHwKfF8uX18vIHxffCBcX19fLyAvXy9cX1wgXF9fX3wgXF9fXy8gKF8pIFxfX18vIHxffCAgICBcX18sIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX18vIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8X19fLyAKICAgICAgICAgICAgICAgICAgICBibG94Y28ub3JnICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICBERVZFTE9QRVIgQ09OU09MRSAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIGJ5IHplcnR5YmVlXzUgICAgICAgICAgICAgICAgICAgICAgIA") + "\n-------------\nWelcome to bloxco.org! Looking for bugs? Thanks! Please report all found bugs to zertybee on Discord.")

document.addEventListener('DOMContentLoaded', function() {
  const alertcontainer = document.getElementById('alert-container');
  
  const alerts = `
 <div class="alert alert-blurple" style="display: block !important;">
  <strong>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style>svg{fill:#ffffff}</style><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    Join us</strong>:
  Join Bloxco Supermarket's amazing community on 
    <a href="http://www.google.com/url?q=http%3A%2F%2Fdiscord.gg%2FbPQMeZA4PW&sa=D&sntz=1&usg=AOvVaw37-CqJKaqRmebJ85BslNR5">Discord</a>, 
  and make new friends!
</div>

  
  `;

  alertcontainer.innerHTML = alerts;

  if (urlParams.get('loggedout') == "true") {
    const loggedoutalert = `<div class="alert alert-success" style="display: block !important;">
    <strong>
      <img src="https://icons.veryicon.com/png/o/miscellaneous/batch-editor/success-38.png" height="25" style="filter: brightness(0)" draggable="false"></img>
      Success</strong>:
    You've been succesfully logged out.
  </div>
  </section>`
  alertcontainer.innerHTML = alerts + loggedoutalert
  }

});


function logout() {
  document.title = "Logging you out.."
  document.getElementById('maindiv').innerHTML = `
  <div class="container">
      <h1 id="welcome_txt">Goodbye, <strong><span class="accent font-weight-bold">${localStorage.getItem("username")}</span></strong>!</h1>
      <p>Logging you out now... </p>      
  </div>   
  `
  localStorage.clear()
  window.location.replace("https://login.bloxco.org/logout");
}

/* DISPLAY HEADER */
document.addEventListener('DOMContentLoaded', function() {

  function loadNav() {
    const nav = document.getElementById('nav-maincontent');
    const isShrPath = window.location.pathname.startsWith('/shr/');
    const navContent = `
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/ranks">Rank Purchase</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/partners">Partners</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/partner-req">Partnership Requirements</a>
      
    </li>
    <li class="nav-item">
    <a class="nav-link" aria-current="page" href="/referrals">Referrals</a>
  </li>
    <li class="nav-item dropdown important-links">
      <a class="nav-link dropdown-toggle" style="color:#e4e4e4;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Important Links
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item " href="https://www.roblox.com/games/9901611189/Bloxco-Supermarket" target="_blank"><strong>Play</strong> the Game</a></li>
        <li><a class="dropdown-item" href="https://www.roblox.com/groups/6235775/Bloxco-Supermarket#!/about" target="_blank"><strong>Join</strong> our Group</a></li>
        <li><a class="dropdown-item" href="http://www.google.com/url?q=http%3A%2F%2Fdiscord.gg%2FbPQMeZA4PW&sa=D&sntz=1&usg=AOvVaw37-CqJKaqRmebJ85BslNR5" target="_blank"><strong>Discord Server</strong></a></li>
        <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Fwww.tiktok.com%2F%40bloxcosocials&sa=D&sntz=1&usg=AOvVaw3UkVZebmGMHrey-aJnuPT8" target="_blank">TikTok</a></li>
        <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Finstagram.com%2Fbloxco_socials%3Figshid%3DYmMyMTA2M2Y%3D&sa=D&sntz=1&usg=AOvVaw24aap0fvGWbeUwKKhDGaJv" target="_blank">Instagram</a></li>
        <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2FBloxcoSocials&sa=D&sntz=1&usg=AOvVaw2m7nE1lR4qeN_NRLM472uc" target="_blank">Twitter</a></li>
        <li><a class="dropdown-item" href="https://www.youtube.com/channel/UCo1tVFeDsp7BUd8kNhbgMnQ" target="_blank">YouTube</a></li>
        <li><a class="dropdown-item" href="/events" target="_blank">Event Calendar</a></li>
      </ul>
    </li>
    <li class="nav-item">
    <a class="nav-link professional" aria-current="page" href="/christmas">🎄Christmas Countdown</a>
    </li>
      </ul>
    `;
    nav.innerHTML = navContent;
    if (isShrPath) {
    const addOn = `
    <button onclick="logout()" type="button" class="btn btn-danger" id="nav-logout">Log out</button>
    `
    document.getElementById('nav-addon').innerHTML = addOn
  }
  }

  if(!_MAINTENANCE) {
    loadNav()
  }
  if (localStorage.getItem('developer')) {
    loadNav()
  }
});

/* DISPLAY FOOTER */
document.addEventListener('DOMContentLoaded', function() {
  function loadFtr() {
    const footer = document.getElementById('ftr');
    const year = new Date().getFullYear();
    const ftrContent = `
      <br/>
      <div class="container dark-mode">
        <div class="row">
          <h4>Contact</h4>
          <p>Discord: <a href="https://discord.gg/bloxcosupermarket" target="_blank">discord.gg/bloxcosupermarket</a><br/>
          Roblox: <a href="https://www.roblox.com/groups/6235775/Bloxco-Supermarket" target="_blank">roblox.com/groups/6235775/</a></p>
        </div>
        <hr>
        <p>&copy; ${year} Bloxco Supermarket. All rights reserved.</p>
        <span class="disclaimer">This site was made by zertybee_5</span>
        <p class="fs-6 text-start fw-lighter">Site version: ${siteVersion}</p>
      </div>
    `;

    footer.innerHTML = ftrContent;
  }
  if(!_MAINTENANCE) {
    loadFtr()
  }
  if (localStorage.getItem('developer')) {
    loadFtr()
  }

});


/* LINK FUNCTION, OPEN A PLATFORM LINK BY USING THE PROVIDED PARAMETERS */
function link(platform, linktype, extension, extension2, extension3) {
  let url = "https://bloxco.org/404.html"

  if (platform == 'rblx') {
   if (linktype == 'gamepass') {
       url = "https://www.roblox.com/game-pass/" + extension
    }
    if (linktype == 'group') {
     url = "https://www.roblox.com/groups/"+extension+"/name#!/about"
    }
  }

  if (platform == 'discord') {
    if (linktype == 'invite') {
      url = "https://discord.gg/" + extension
    }
    if (linktype == 'message') {
      url = "https://discord.com/channels/" + extension + "/" + extension2 + "/" + extension3
    }
  }

  window.open(url,'_blank');
}

const urlParams = new URLSearchParams(window.location.search);


document.addEventListener("DOMContentLoaded", function () {
  var pageTitle = "Bloxco Supermarket";
  var pageName = location.pathname.toLowerCase().replace(/\.html$/, '');
  if (pageName.includes("shr")) {
    pageTitle = "SHR";
  } else if (pageName == "/index") {
    pageTitle = "Home";
  } else if (pageName == "/") {
    pageTitle = "Home";
  }  else if (pageName == "/ranks") {
    pageTitle = "Rank Purchase";
  } else if (pageName == "/christmas") {
    pageTitle = "Christmas Countdown";
  } else if (pageName == "/events") {
    pageTitle = "Events";
  } else if (pageName == "/partner-req") {
    pageTitle = "Partnership Requirements";
  } else if (pageName == "/partners") {
    pageTitle = "Partnerships";
  } else if (pageName == "/referrals") {
    pageTitle = "Referrals";
  }  else if (pageName == "/applications/hr") {
    pageTitle = "High Rank";
  } else if (pageName == "/applications/dev") {
    pageTitle = "Developer";
  }


  if (pageTitle == "Bloxco Supermarket") {
    console.warn('[TITLE]: No title provided')
  } else {
    document.title = pageTitle + " - Bloxco Supermarket";
  }
});

/* MAINTENANCE */
if (_MAINTENANCE) {
  if (!localStorage.getItem('developer')) { 
    document.title = "🔨 - Bloxco Supermarket"
    document.body.innerHTML = `
    <nav class="navbar navbar-expand-lg text-light dark-mode" style="margin-bottom: 10px;" id="navbar"></nav>
    <div style="margin-left:100px;">
      <h2>🔨Whoops! We're currently on <span class="text-danger">maintenance</span> mode😓</h2>
      <p>We're making things more <span style="font-family: 'Times New Roman', serif; font-style: italic;">awesome</span>. Be back soon. 😉
      <br>For now, you're more than welcome to
      </p>
      <div>
        <a href="https://www.roblox.com/games/9901611189/Bloxco-Supermarket" class="btn btn-primary text-light" style="color: white !important;">Play our Game</a>
        or
        <a href="discord.html" class="btn btn-secondary text-white" style="color: white !important;">Join our Discord Server</a>
      </div>
    </div>
    `
    if (document.getElementById('s1')) {
      document.getElementById('s2').innerHTML = ""
    }
    if (document.getElementById('s2')) {
      document.getElementById('s2').innerHTML = ""
    }
    if (document.getElementById('s3')) {
      document.getElementById('s3').innerHTML = ""
    }
    if (document.getElementById('s4')) {
      document.getElementById('s4').innerHTML = ""
    }
    if (document.getElementById('ftr')) {
      document.getElementById('ftr').innerHTML = ""
    }
  }
}