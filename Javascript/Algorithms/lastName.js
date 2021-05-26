function generateLastName() {

    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    
    let birthName = [middleName, lastName].join(' ').trim();
    let partnerName = [middleNamePartner, lastNamePartner].join(' ').trim();
    
    switch(Person.Name.Convention) {

        case 'B':
            // Return the lastname of birth
            return birthName;

        case 'P':
            // Return the lastname of partner
            return partnerName;

        case 'BP':
            // Return both lastnames as birthName - partnerName
            return [birthName, partnerName]
                // Filter empty values
                .filter(function(x) {return x && x !== ''})
                // Join values to single string
                .join(' ');

        case 'PB':
            // Return both lastnames as partnerName - birthName
            return [partnerName, birthName]
                // Filter empty values
                .filter(function(x) {return x && x !== ''})
                // Join values to single string
                .join(' ');

        default:
            // Fallback: Return the lastname of birth
            return birthName;
    }
}
 
generateLastName();
