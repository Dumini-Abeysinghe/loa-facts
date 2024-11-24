const facts = [
    "The human body contains enough carbon to make around 900 pencils.",
    "Humans are the only animals that blush.",
    "The human brain can process images in as little as 13 milliseconds.",
    "Human fingers can feel objects as small as 13 nanometers.",
    "An adult human body contains about 100,000 miles of blood vessels.",
    "Humans are the only species known to cry emotional tears.",
    "The average person spends 6 months of their lifetime waiting for red lights.",
    "Human bones are ounce for ounce stronger than steel.",
    "The human body generates enough heat in 30 minutes to boil a gallon of water.",
    "Humans share 50% of their DNA with bananas."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
}

function shareFact() {
    const fact = document.getElementById('factDisplay').textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Amazing Human Fact',
            text: fact + ' - Learn more at Fun Facts About Humans!',
            url: window.location.href
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        alert('Sharing is not supported on this browser. Copy this fact: ' + fact);
    }
}

// Load initial fact
getRandomFact();
