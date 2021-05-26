function formatInitials() {

    if (Person.Name.Initials && Person.Name.Initials !== '') {

        return Person.Name.Initials
            // Remove all (.) in the string
            .replace(/([.])/g, '')
            // Take the first six characters
            .substring(0, 6)
            // Convert to upper case
            .toUpperCase();
    }
     
    return '';
}
 
formatInitials();
