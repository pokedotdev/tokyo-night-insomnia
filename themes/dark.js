const rawCss = `
  div.\\[grid-area\\:Navbar\\] nav a[aria-current="page"] {
    --color-font-surprise: var(--color-font) !important;
    background: var(--hl-sm) !important;
  }
  #sidebar div[role="gridcell"] span.text-\\[0\\.65rem\\] {
    border-color: var(--hl-md);
    background-color: transparent;
    --color-font-success: var(--color-success);
    --color-font-notice: var(--color-notice);
    --color-font-warning: var(--color-warning);
    --color-font-danger: var(--color-danger);
    --color-font-surprise: var(--color-surprise);
    --color-font-info: var(--color-info);
  }
`

module.exports = {
  name: 'tokyo-night',
  displayName: 'Tokyo Night',
  theme: {
    rawCss,
    background: {
      default: '#1a1b26',
      success: '#00bad9',
      notice: '#9dcc63',
      warning: '#ff9e64',
      danger: '#f7768e',
      surprise: '#bb9af7',
      info: '#75a5fa',
    },
    foreground: {
      default: '#a9b1d6',
      success: '#24283b',
      notice: '#24283b',
      warning: '#24283b',
      danger: '#24283b',
      surprise: '#24283b',
      info: '#24283b',
    },
    highlight: {
      default: 'rgba(98, 114, 164, 1)',
      xxs: 'rgba(98, 114, 164, 0.05)',
      xs: 'rgba(98, 114, 164, 0.1)',
      sm: 'rgba(98, 114, 164, 0.2)',
      md: 'rgba(98, 114, 164, 0.3)',
      lg: 'rgba(98, 114, 164, 0.6)',
      xl: 'rgba(98, 114, 164, 0.8)',
    },
    styles: {
      sidebar: {
        background: {
          default: '#16161e',
        },
      },
      dialog: {
        background: {
          default: '#16161e',
        },
      },
      paneHeader: {
        background: {
          default: '#16161e',
          success: '#73daca',
          notice: '#FFC36D',
          warning: '#ff9e64',
          danger: '#f7768e',
          surprise: '#bb9af7',
          info: '#75a5fa',
        },
      },
      transparentOverlay: {
        background: {
          default: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
};
