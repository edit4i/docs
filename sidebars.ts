import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'editor/index',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['editor/getting-started/installation', 'editor/getting-started/projects'],
    },
    {
      type: 'category',
      label: 'Interface',
      items: [
        'editor/interface/overview',
        'editor/interface/file-explorer',
        'editor/interface/git',
        'editor/interface/terminal',
        'editor/interface/panes',
      ],
    },
    {
      type: 'category',
      label: 'Editing',
      items: ['editor/editing/basics', 'editor/editing/vim-mode'],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['editor/navigation/command-palette', 'editor/navigation/fuzzy-finder'],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['editor/configuration/settings'],
    },
    {
      type: 'category',
      label: 'Git',
      items: [
        'editor/git/overview',
        'editor/git/status',
        'editor/git/staging',
        'editor/git/committing',
      ],
    },
  ],
};

export default sidebars;
