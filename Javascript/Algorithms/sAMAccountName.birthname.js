function generateSamAccountName() {

    const suffix = Iteration === 0 ? '' : Iteration;
    const maxAttributeLength = 20 - suffix.toString().length;
    
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;

    let sAMAccountName = [firstName, middleName, lastName]
        // Filter empty values
        .filter(function(x) {return x && x !== ''})
        // Join values to single string
        .join(' ')
        // Change whitespaces to dots
        .replace(/\s+/g, '.')
        // Convert to lower case
        .toLowerCase();

    // Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName)
        // Remove specific chars
        .replace(/[^0-9a-zA-Z.']/g, '')
        // Shorten string to {maxAttributeLength} length
        .substring(0, maxAttributeLength)
        // Append suffix
        .concat(suffix);

    return sAMAccountName;
}

generateSamAccountName();
