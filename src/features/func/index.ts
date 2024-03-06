export const generateTimeToPass = () => {
    const timestamp =  new Date().toISOString().slice(0, 10).split('-').join('');
    return timestamp
}

export const prepareIds = (ids: string[]) => {
    return ids.map(item => {return `"${item}"`}).toString()
}