import { render, html } from '@mantou/gem';

import '@mantou/gem/elements/title';
import { i18n } from './i18n';

const harms = [
  i18n.harm1(),
  i18n.harm2(),
  i18n.harm3(),
  i18n.harm4(),
  i18n.harm5(),
  i18n.harm6(),
  i18n.harm7(),
  i18n.harm8(),
];

const harm = harms[Math.floor(Math.random() * harms.length)];

render(
  html`
    <style>
      html {
        font-size: 62.5%;
        background: #f3f3f3;
        color: black;
      }
      body {
        font-size: 1.6rem;
      }
      html,
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
      }
      main {
        margin-top: 33vh;
        width: clamp(20em, 50vw, 1024px);
      }
      h1 {
        margin: 0 0 0.5em;
        background: currentColor;
        -webkit-text-fill-color: white;
        display: inline-block;
        font-weight: normal;
        font-size: 1.5em;
        line-height: 1.3;
      }
      p {
        margin: 0;
        padding: 0;
        line-height: 1.3;
        margin: 0.2em 0;
      }
    </style>
    <gem-title hidden>${i18n.extensionName()}</gem-title>
    <main>
      <h1>${i18n.harmTitle()}</h1>
      <p>${harm}</p>
    </main>
  `,
  document.body,
);
