export const Numbers = {
    checkOnlyNumbers: (text: string): string => {
        return text.replace(/[^0-9]/g, '')
    }
}