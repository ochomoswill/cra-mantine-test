export const setColorModeValue = (lightValue: string, darkValue: string) => (theme: any) => {
    return theme.colorScheme === 'dark' ? darkValue : lightValue;
}