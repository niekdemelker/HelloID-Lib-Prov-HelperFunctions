// This function generates names like:
// r.jongbloed@domain.com
// ri.jongbloed@domain.com
// ric.jongbloed@domain.com
// rick.jongbloed@domain.com
// r.jongbloed2@domain.com
// r.jongbloed3@domain.com
// r.jongbloed4@domain.com
// etc
function generateUserPrincipalName() {

    const domain = 'domain.com';

    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;

    if (Iteration < firstName.length) {
        let firstNameLetters = firstName.substring(0, Iteration + 1);
        const suffix = '';
    } else {
        let firstNameLetters = firstName.substring(0, 1);
        const suffix = Iteration - firstName.length + 2;
    }

    let userPrincipalName = [firstNameLetters, middleName, lastName]
        // Filter empty values
        .filter(function(x) {return x && x !== ''})
        // Join values to single string
        .join(' ')
        // Change whitespaces to dots
        .replace(/\s+/g, '.')
        // Convert to lower case
        .toLowerCase();

    // Remove diacritical chars
    userPrincipalName = deleteDiacriticalMarks(userPrincipalName)
        // Remove specific chars    
        .replace(/[^0-9a-zA-Z.']/g, '')
        // Append suffix and domain
        .concat(suffix, '@', domain);

    return userPrincipalName;
}

generateUserPrincipalName();
