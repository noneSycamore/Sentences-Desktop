export const config = {
    _WIN64: process.arch === 'x64',
};
export const settingsDefault = {
    singleton: true,
    _WIN64: config._WIN64,
};
//# sourceMappingURL=config.js.map