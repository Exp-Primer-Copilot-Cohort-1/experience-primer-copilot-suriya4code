function skillsMember() {
    let member = {
        name: 'John Doe',
        skills: []
    };

    // Add skills to the member
    member.skills.push('JavaScript');
    member.skills.push('Python');
    member.skills.push('Java');

    // Print the member's skills
    console.log(`${member.name}'s skills: ${member.skills.join(', ')}`);
}

skillsMember();