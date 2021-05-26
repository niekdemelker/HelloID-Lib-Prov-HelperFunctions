// Please enter the mapping logic to generate the primaryMailAddress.
function generateMailAddress(firstName, middleName, lastName) {

    const suffix = Iteration === 0 ? '' : Iteration;
    
    let mailAddress = [firstName, middleName, lastName]
        // Filter empty values
        .filter(function(x) {return x && x !== ''})
        // Join values to single string
        .join(' ')
        // Change whitespaces to dots
        .replace(/\s+/g, '.')
        // Convert to lower case
        .toLowerCase();

    // Remove diacritical chars
    mailAddress = deleteDiacriticalMarks(mailAddress)
        // Remove all but specified chars   
        .replace(/[^0-9a-zA-Z.']/g, '')
        // Append Suffix
        .concat(suffix);

    return mailAddress;
}

function generateProxyAddresses() {

    const domain = 'domain.com';
    
    let mailAddress = generateMailAddress(
        Person.Name.NickName,
        Person.Name.FamilyNamePrefix,
        Person.Name.FamilyName
    );
    
    if (['P', 'PB'].indexOf(Person.Name.Convention) >= 0) {
        let primaryMailAddress = generateMailAddress(
            Person.Name.NickName,
            Person.Name.FamilyNamePartnerPrefix,
            Person.Name.FamilyNamePartner
        );
        
        return [
            'SMTP:' + primaryMailAddress + '@' + domain,
            'smtp:' + mailAddress + '@' + domain
        ];
    }

    return [
        'SMTP:' + mailAddress + '@' + domain
    ];
}

generateProxyAddresses();
