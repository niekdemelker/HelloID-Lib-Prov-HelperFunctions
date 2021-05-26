function generateUserPrincipalName() {

    const domain = 'domain.com';
    const suffix = Iteration === 0 ? '' : Iteration;

    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;

    let userPrincipalName = [firstName, middleName, lastName]
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
        // Append the suffix and domain name
        .concat(suffix, '@', domain);

    return userPrincipalName;
}

generateUserPrincipalName();
