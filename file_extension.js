const getExtensionOFile = (filnName) => {
    if(typeof filnName !== 'string') {
        throw new Error('Invalid type of parameter');
    }
    const spl = filnName.split('.');
    return spl.length === 1 ? null : spl[spl.length - 1];
}

console.log(getExtensionOFile('sdf.qwer.twey.yewy.wy.ey.wey.fsa'));