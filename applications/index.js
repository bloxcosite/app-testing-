const template_open_nopurchase = `
<div class="col-sm-6 mb-3 mb-sm-0" style="margin-bottom: 15px !important;">
          <div class="card" STYLE>
            <div class="card-body">
              <h5 class="card-title">POSITION</h5>
              <p class="card-text">Apply to become POS_DESC at Bloxco Supermarket.</p><br/>
              <a href="BUTTON_HREF" class="btn BUTTON_CLASS" type="button" BUTTON_DISABLED>Apply</a>
            </div>
          </div>
        </div><br/>
`

const template_closed_nopurchase = `
<div class="col-sm-6 mb-3 mb-sm-0" style="margin-bottom: 15px !important;">
          <div class="card" STYLE>
            <div class="card-body">
              <h5 class="card-title">POSITION</h5>
              <p class="card-text">The POS_DESC application is closed right now. <a href="/discord.html" style="opacity: 0.6;">However, you can join our Discord Server and get notified when the application opens up!</a></p>
              <a href="BUTTON_HREF" class="btn BUTTON_CLASS" type="button" BUTTON_DISABLED>Apply</a>
            </div>
          </div>
        </div><br/>
`

const template_closed_canpurchase = `
<div class="col-sm-6 mb-3 mb-sm-0" style="margin-bottom: 15px !important;">
          <div class="card" STYLE>
            <div class="card-body">
              <h5 class="card-title">POSITION</h5>
              <p class="card-text">The POS_DESC application is closed right now. <a href="/ranks.html" style="opacity: 0.6;">However, you can purchase this rank to bypass!</a></p>
              <a href="BUTTON_HREF" class="btn BUTTON_CLASS" type="button" BUTTON_DISABLED>Apply</a>
            </div>
          </div>
        </div><br/>
`

const template_open_canpurchase = `
<div class="col-sm-6 mb-3 mb-sm-0" style="margin-bottom: 15px !important;">
          <div class="card" STYLE>
            <div class="card-body">
              <h5 class="card-title">POSITION</h5>
              <p class="card-text">Apply to become POS_DESC at Bloxco Supermarket. <a href="/ranks.html" style="opacity: 0.6;">Don't want to apply? Purchase this rank.</a></p>
              <a href="BUTTON_HREF" class="btn BUTTON_CLASS" type="button" BUTTON_DISABLED>Apply</a>
            </div>
          </div>
        </div><br/>
`



fetch('applications.json')
  .then(response => response.json())
  .then(data => {
    function isApplicationEnabled(url, applications) {
      const application = applications.find(app => app.url === url);
      return application && application.enabled;
    }

    function generateCard(url, template, enabled, entry) {
      const position = entry.name_title
      const position_desc = entry.name_desc
      const position_with_space = ` ${position}` 

      const cardHTML = template
        .replace('POSITION', position)
        .replace('POS2', position)
        .replace('POSITIONWITHSPACE', position_with_space)
        .replace('POS3', position)
        .replace('POS_DESC', enabled ? position_desc : position)
        .replace('ENABLED', enabled ? 'open' : 'closed')
        .replace('BUTTON_CLASS', enabled ? 'btn-success' : 'btn-danger disabled')
        .replace('BUTTON_DISABLED', enabled ? '' : 'disabled')
        .replace('BUTTON_HREF', url)
        .replace('STYLE', enabled ? '' : 'style="opacity: 0.7 !important;"');

      return cardHTML;
    }

    const app = document.getElementById('loadApps');
    let closedHtml = ``

    data.applications.forEach(entry => {
        const isEnabled = isApplicationEnabled(entry.url, data.applications);
      
        let cardTemplate = `There was an error while loading the card for ${entry.url}.`;
      
        if (entry.purchasable) {
          if (entry.enabled) {
            cardTemplate = template_open_canpurchase;
          } else {
            cardTemplate = template_closed_canpurchase;
          }
        } else {
          // not purchasable
          if (entry.enabled) {
            cardTemplate = template_open_nopurchase;
          } else {
            cardTemplate = template_closed_nopurchase;
          }
        }
      
        const cardHTML = generateCard(entry.url, cardTemplate, isEnabled, entry);
        if (isEnabled && entry.showCard === true) {
          app.innerHTML += cardHTML;
        } else {
            if(entry.showCard == false) {
                console.warn(`Cannot load card for ${entry.name_title} because showCard is false. HTML: ${cardHTML}`)
            } else {
                closedHtml += cardHTML;
            }
        }
      });
      

    app.innerHTML += closedHtml

    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = event.target.href;
      });
    });
  })
  .catch(error => console.error('Error fetching applications.json:', error));
