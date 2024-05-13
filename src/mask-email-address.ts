const maskPart = (part: string) => {
    const length = part.length;
    if (length > 8) {
        return part.substring(0, 2) + part.substring(2, length).replace(/\w/g, '*') + part.substring(length - 2, length);
    }
    if (length > 4) {
        return part.substring(0, 1) + part.substring(1, length).replace(/\w/g, '*') + part.substring(length + 1, length - 1);
    }
    return part.replace(/\w/g, '*');
};

export const maskEmailAddress = (emailAddress?: string) => {
    if (!emailAddress) {
        return emailAddress;
    }
    return emailAddress.replace(/([\w.-]+)@([\w-]+)[.]{1}([\w.]+)/g, (_m, p1, p2, p3) => {
        return maskPart(p1) + '@' + maskPart(p2) + '.' + p3;
    });
};
