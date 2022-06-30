export function cld(objectClass: Record<string, boolean>): string {
    return Object.entries(objectClass).reduce((acc, [key, value]) => {
        if(value) {
            return `${acc} ${key} `;
        }
        return acc;
    }, '');
}
