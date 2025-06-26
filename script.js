document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero-title', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power2.out' });

    const heroTitle = document.querySelector('.hero-title');
    heroTitle.addEventListener('click', () => {
        const explosion = document.createElement('div');
        explosion.classList.add('explosion-text');
        explosion.textContent = 'BOOM!';
        heroTitle.appendChild(explosion);

        gsap.to(explosion, { 
            duration: 0.5, 
            scale: 2, 
            opacity: 0, 
            onComplete: () => explosion.remove() 
        });
    });

    gsap.from('.reason-card', {
        scrollTrigger: {
            trigger: '.reasons',
            start: 'top 80%',
        },
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });

    const factDisplay = document.getElementById('fact-display');
    const factButton = document.getElementById('fact-button');

    const jannikFacts = [
        "Jannik Nu doesn't read books. He stares them down until he gets the information he wants.",
        "Time doesn't pass for Jannik Nu. He allows it to proceed.",
        "Jannik Nu's tears can cure any illness. Too bad he has never cried.",
        "Jannik Nu once taught a rock to fetch. It's now a loyal companion.",
        "The Great Wall of China was originally built to keep Jannik Nu out. It failed.",
        "Jannik Nu can unscramble an egg.",
        "Jannik Nu is the only person to have ever won a staring contest with the sun.",
        "When Jannik Nu does a pushup, he isn't lifting himself up, he's pushing the Earth down."
    ];

    factButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * jannikFacts.length);
        factDisplay.textContent = jannikFacts[randomIndex];
        gsap.from(factDisplay, { duration: 0.5, y: -20, opacity: 0, ease: 'power2.out' });
        confetti();
    });

    const instaButton = document.querySelector('.insta-button');

    instaButton.addEventListener('click', (e) => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    const quizQuestions = [
        {
            question: "Is Jannik Nu cool?",
            answers: ["Yes", "Of course", "Obviously"],
            correctAnswer: "Yes"
        },
        {
            question: "What is the meaning of life?",
            answers: ["Jannik Nu", "Jannik Nu", "Jannik Nu"],
            correctAnswer: "Jannik Nu"
        }
    ];

    let currentQuestionIndex = 0;

    const questionElement = document.getElementById('quiz-question');
    const answersElement = document.getElementById('quiz-answers');

    function loadQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersElement.innerHTML = '';

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => {
                currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
                loadQuestion();
            });
            answersElement.appendChild(button);
        });
    }

    loadQuestion();
});