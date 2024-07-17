function trackEmailsAndNumbers() {
    // Clear previous results
    document.getElementById('results').innerHTML = '';

    // Get text input value
    const textInput = document.getElementById('textInput').value;

    // Regular expressions to match emails and numbers
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const numberRegex = /\b\d{10}\b/g;

    // Extract emails and numbers from input text
    const emails = textInput.match(emailRegex);
    const numbers = textInput.match(numberRegex);

    // Display results
    if (emails && emails.length > 0) {
        displayResults('Emails found:', emails);
    } else {
        displayResults('No emails found.', []);
    }

    if (numbers && numbers.length > 0) {
        displayResults('Numbers found:', numbers);
    } else {
        displayResults('No numbers found.', []);
    }
}

function displayResults(title, items) {
    const resultsDiv = document.getElementById('results');
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    resultsDiv.appendChild(titleElement);

    if (items.length > 0) {
        const listElement = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
        resultsDiv.appendChild(listElement);
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No items found.';
        resultsDiv.appendChild(noResultsElement);
    }
}
