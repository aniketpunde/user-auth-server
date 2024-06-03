module.exports.encodeEmail = (email) => {
    let splitEmail = email.match(/.{1,3}/g);
    let encodedstring = '';
    splitEmail.forEach(str => {
        if (str.length == 3) {
            encodedstring = encodedstring + str;
            let rndC = getRandomCharacter(config.internals.tokenrandomcharlength);
            encodedstring = encodedstring + rndC;
        } else {
            encodedstring = encodedstring + str;
        }
    })
    return encodedstring;
}