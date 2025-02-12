---
sidebar_position: 1
---

# Settings

Edit4i is highly customizable. You can configure it using the `config.yaml` file in `~/.edit4i/config.yaml` or configure it on the GUI. The GUI is not implemented yet.

```yaml
editor:
  theme: "vs-dark"  # or "vs-light", "hc-black"
  fontSize: 14
  tabSize: 2
  tabType: "spaces" # or 'tab'
  wordWrap: true
  lineNumbers: true
  minimap: true
  vim:
    enabled: true
    defaultMode: "normal"  # "normal", "insert", "visual"
```

**Editor Settings:**

*   `theme`:  The editor theme (e.g., "vs-dark", "vs-light", "hc-black").
*   `fontSize`:  The font size in pixels.
*   `tabSize`:  The number of spaces per tab.
*   `wordWrap`:  Enable or disable word wrap.
*   `lineNumbers`: Show line number or nor
*   `tabType`: Select 'space vs 'tab'
*   `minimap`: Show minimap or not
*   `vim.enabled`:  Enable or disable Vim mode.
*   `vim.defaultMode`: Sets the default mode after opening a file.
