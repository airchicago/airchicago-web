export const formatArrayToString = (inputArray) => {
    const lastIndex = inputArray.length - 1;
    if (inputArray.length === 1) {
        return inputArray.toString();
    }
    return inputArray.reduce((prev, current, i) => {
        const trailing = i < lastIndex - 1 ? ',' : '';
        const leadingSpace = i > 0 ? ' ' : '';

        if (i === lastIndex) {
            return `${prev} and ${current}`
        }

        return `${prev}${leadingSpace}${current}${trailing}`
    }, '');
}