function formatInitials() {

    if (Person.Name.Initials && Person.Name.Initials !== '') {

        return Person.Name.Initials
            // Remove all (.) in the string
            .replace(/([.])/g, '')
            // Select the first three characters
            .substring(0, 3)
            // Convert to upper case
            .toUpperCase()
            // Insert (.) after each character
            .replace(/(.{1})/g, '$1.');
    }

    return '';
}

formatInitials();
