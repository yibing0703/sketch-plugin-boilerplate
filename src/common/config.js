export const IdentifierPrefix = 'sketch-plugin-boilerplate'
export const SidePanelIdentifier = `${IdentifierPrefix}.side-panel-identifier`
export const WINDOW_MOVE_INSTANCE = 'WINDOW_MOVE_INSTANCE'
export const WINDOW_MOVE_SELECTOR = 'WINDOW_MOVE_SELECTOR'

export const Menus = [
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'artboard',
    activeIcon: 'artboard-active',
    tooltip: '上传画板',
    identifier: `${IdentifierPrefix}-menu.artboard-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.artboard-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 1,
    url: 'https://aotu.io',
  },
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'icon',
    activeIcon: 'icon-active',
    tooltip: '图标',
    identifier: `${IdentifierPrefix}-menu.icon-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.icon-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 1,
    url: 'https://docs.pfan123.com/',
  },
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'component',
    activeIcon: 'component-active',
    tooltip: '组件',
    identifier: `${IdentifierPrefix}-menu.component-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.component-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 1,
    url: 'http://m.baidu.com/',
  },
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'palette',
    activeIcon: 'palette-active',
    tooltip: '调色板',
    identifier: `${IdentifierPrefix}-menu.palette-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.palette-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 1,
    url: 'http://m.baidu.com/',
  },
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'fill',
    activeIcon: 'fill-active',
    tooltip: '填充',
    identifier: `${IdentifierPrefix}-menu.fill-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.fill-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 1,
    url: 'http://m.baidu.com/',
  },
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'help',
    activeIcon: 'help-active',
    tooltip: '帮助中心',
    identifier: `${IdentifierPrefix}-menu.help-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.help-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 3,
    url: 'http://m.baidu.com/',
  },
  {
    rect: NSMakeRect(0, 0, 40, 40),
    size: NSMakeSize(24, 24),
    icon: 'setting',
    activeIcon: 'setting-active',
    tooltip: '设置',
    identifier: `${IdentifierPrefix}-menu.setting-${NSUUID.UUID().UUIDString()}`,
    wkIdentifier: `${IdentifierPrefix}-webview.setting-${NSUUID.UUID().UUIDString()}`,
    type: 2,
    inGravityType: 3,
    url: 'http://m.baidu.com/',
  }
]

