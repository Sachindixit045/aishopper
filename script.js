document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const giftSuggestions = document.getElementById('gift-suggestions');

    submitBtn.addEventListener('click', async () => {
        const recipient = document.getElementById('recipient').value;
        const occasion = document.getElementById('occasion').value;
        const budget = parseFloat(document.getElementById('budget').value);

        // Show loading indicator
        giftSuggestions.innerHTML = 'Fetching gift recommendations...';

        const recommendations = await getGiftRecommendations(recipient, occasion, budget);
        displayRecommendations(recommendations);
    });
});

async function getGiftRecommendations(recipient, occasion, budget) {
    // Replace this with your actual recommendation logic
    // For now, we'll simulate a delay using setTimeout
    return new Promise(resolve => {
        setTimeout(() => {
            let recommendedGifts = [];

            if (budget >= 500 && budget < 1500) {
                recommendedGifts = ['Shoes', 'Watch', 'Sandal', 'Cricket Bat', 'Backpack'];
            } else if (budget >= 1500) {
                recommendedGifts = ['Laptop', 'Mobile', 'iPhone', 'Tablet', 'Headphones'];
            } else {
                recommendedGifts = ['Gift Card', 'Book', 'Candle', 'Plant'];
            }

            resolve(recommendedGifts);
        }, 1500); // Simulate a delay of 1.5 seconds
    });
}

function displayRecommendations(recommendations) {
    const suggestionsList = document.createElement('ul');
    recommendations.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        suggestionsList.appendChild(listItem);
    });

    const giftSuggestions = document.getElementById('gift-suggestions');
    giftSuggestions.innerHTML = ''; // Clear previous content
    giftSuggestions.appendChild(suggestionsList);
}
