module.exports = {
  extends: ['sketch', 'o2team'],
  rules: {
    'new-cap': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 1,
    'no-undef': 1,
    'eqeqeq': 0, // OC className 比较用全等会有问题
    'no-mixed-operators': 0,
    'array-callback-return': 0,
    'no-return-assign': 0,
  },
  globals: {
    // Mocha
    Mocha: false,
    // Objective-C
    nil: false,
    COScript: false,
    NSThread: false,
    NSFileHandlingPanelOKButton: false,
    NSMomentaryChangeButton: false,
    NSClassFromString: false,
    NSModalResponseOK: false,
    NSPointInRect: false,
    NSMakeRect: false,
    NSMakeSize: false,
    NSZeroRect: false,
    NSSelectorFromString: false,
    NSNotificationCenter: false,
    NSWindowDidResizeNotification: false,
    NSOffState: false,
    NSBoxSeparator: false,
    NSWidth: false,
    NSHeight: false,
    NSWindowStyleMaskFullSizeContentView: false,
    NSBorderlessWindowMask: false,
    NSResizableWindowMask: false,
    NSTexturedBackgroundWindowMask: false,
    NSTitledWindowMask: false,
    NSClosableWindowMask: false,
    NSFullSizeContentViewWindowMask: false,
    NSWindowStyleMaskResizable: false,
    NSFloatingWindowLevel: false,
    NSWindowZoomButton: false,
    NSWindowMiniaturizeButton: false,
    NSWindowCloseButton: false,
    NSWindowZoomButton: false,
    NSWindowFullScreenButton: false,
    NSWindowFullScreenButton: false,
    NSWindowTitleHidden: false,
    NSVisualEffectMaterialPopover: false,
    NSViewWidthSizable: false,
    NSViewHeightSizable: false,
    NSAppearanceNameVibrantLight: false,
    NSVisualEffectBlendingModeBehindWindow: false,
    NSPNGFileType: false,
    NSUserDefaults: false,
  }
}
