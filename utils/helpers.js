export function computeStyles(buildInStyle, newStyle = []) {
    return newStyle instanceof Array
        ?
        [buildInStyle, ...newStyle]
        :
        [buildInStyle, newStyle]
}