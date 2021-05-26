// This function generates names like:
// john.doe@domain.com
// j.doe@domain.com
// j.doe1@domain.com
// j.doe2@domain.com
// j.doe3@domain.com
// etc
function generateSamAccountName() {

    const suffix = Iteration <= 1 ? '' : Iteration;
    const maxAttributeLength = 20 - suffix.toString().length;

    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;

    if (Iteration == 0) {
        let sAMAccountName = [firstName, middleName, lastName]
            // Filter empty values
            .filter(function(x) {return x && x !== ''})
            // Join values to single string
            .join(' ')
            // Change whitespaces to dots
            .replace(/\s+/g, '.')
            // Take the first twenty characters
            .substring(0, 20);
    }

    else if (Iteration == 1) {
        let sAMAccountName = [firstName.substring(0, 1), middleName, lastName]
            // Filter empty values
            .filter(function(x) {return x && x !== ''})
            // Join values to single string
            .join(' ')
            // Change whitespaces to dots
            .replace(/\s+/g, '.')
            // Take the first twenty characters
            .substring(0, 20);
    }

    else {
        let sAMAccountName = [firstName.substring(0, 1), middleName, lastName]
            // Filter empty values
            .filter(function(x) {return x && x !== ''})
            // Join values to single string
            .join(' ')
            // Change whitespaces to dots
            .replace(/\s+/g, '.')
            // Take the first twenty characters
            .substring(0, maxAttributeLength)
            // Append the suffix
            .concat(suffix);
    }

    // Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName)
        // Convert to lower case
        .toLowerCase()
        // Remove specific characters
        .replace(/[^0-9a-zA-Z.']/g, '');

    return sAMAccountName;
}

generateSamAccountName();
