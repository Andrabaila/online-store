export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const transform = {
    '^.+\\.ts?$': 'ts-jest',
};
export const transformIgnorePatterns = ['<rootDir>/node_modules/'];
