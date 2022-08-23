import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fluent-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }


      #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
        color: white;
      }

      @media (min-width: 1024px) {
        #welcomeCard,
        #infoCard {
          width: 54%;
        }
      }

      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }

        #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
          color: initial;
        }
      }

      @media(prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #4e4e4e;
          color: white;
          border: none;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  notification() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          new Notification("Hi there!");
          // …
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  iosPermission() {
    if ((window as any).webkit && (window as any).webkit.messageHandlers && (window as any).messageHandlers['push-permission-request']) {
      (window as any).messageHandlers['push-permission-request'].postMessage('push-permission-request');
    }
    window.addEventListener('push-permission-request', (message) => {
      if (message && (message as any).detail){
        switch ((message as any).detail) {
          case 'granted':
            // permission granted
            break;
          default:
            // permission denied
            break;
        }
      }
    });
  }

  render() {
    return html`
      <app-header></app-header>
      <divsrc/kisfaludy_favicon_gold.png>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <h2>${this.message}</h2>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <fluent-anchor
                href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started"
                appearance="hypertext"
                >Documentation on Github</fluent-anchor
              >.
            </p>

            <p id="mainInfo">
              Welcome to the
              <fluent-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fluent-anchor
              >
              pwa-starter! Be sure to head back to
              <fluent-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fluent-anchor
              >
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${'share' in navigator
              ? html`<fluent-button appearance="primary" @click="${this.share}"
                  >Share this Starter!</fluent-button
                >`
              : null}
          </fluent-card>

          <fluent-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <fluent-anchor
                  href="https://www.typescriptlang.org/"
                  appearance="hypertext"
                  >TypeScript</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="https://lit.dev"
                  appearance="hypertext"
                  >lit</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="https://docs.microsoft.com/en-us/fluent-ui/web-components/"
                  appearance="hypertext"
                  >Fluent Web Components</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  appearance="hypertext"
                  >Vaadin Router</fluent-anchor
                >
              </li>
            </ul>
          </fluent-card>

          <fluent-anchor href="${(import.meta as any).env.BASE_URL}about" appearance="accent">Navigate to About</fluent-anchor>
          <fluent-button @click="${this.notification}"> notification</fluent-button>
          <fluent-button @click="${this.iosPermission}"> iosPermission</fluent-button>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}
