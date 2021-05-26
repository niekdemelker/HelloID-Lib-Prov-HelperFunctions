function generateDisplayName() {

    let firstName = Person.Name.NickName;

    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;

    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;

    let birthName = [middleName, lastName].join(' ').trim();
    let partnerName = [middleNamePartner, lastNamePartner].join(' ').trim();

    switch (Person.Name.Convention) {

        case 'B':
            // Return the firstname with lastname of birth
            return firstName + ' ' + birthName;

        case 'P':
            // Return the firstname with lastname of partner
            return firstName + ' ' + partnerName;

        case 'BP':
            // Return the firstname with birthName - partnerName
            return firstName + ' ' + [birthName, partnerName]
                // Filter empty values
                .filter(function(x) {return x && x !== ''})
                // Join values to single string
                .join(' ');

        case 'PB':
            // Return the firstname with partnerName - birthName
            return firstName + ' ' + [partnerName, birthName]
                // Filter empty values
                .filter(function(x) {return x && x !== ''})
                // Join values to single string
                .join(' ');

        default:
            // Fallback: Return the firstname with lastname of birth
            return firstName + ' ' + birthName;
    }
}

generateDisplayName();
