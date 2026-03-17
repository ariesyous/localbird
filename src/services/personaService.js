export const PERSONAS = [
    {
        id: 'crypto_bro',
        name: 'Chad Nakamoto',
        handle: '@chadhodl',
        avatar: '💎',
        keywords: ['money', 'tech', 'future', 'bank', 'crypto', 'web3', 'ai', 'build'],
        responses: [
            "Buy the dip bro. NFA.",
            "Just wait until Web3 fixes this.",
            "Are you even building, or just tweeting?",
            "gm. this is bullish.",
            "Have fun staying poor."
        ],
        defaultResponses: [
            "Few understand this.",
            "Literally going to the moon.",
            "DCA and chill."
        ]
    },
    {
        id: 'doomsday_prepper',
        name: 'Bunker Bill',
        handle: '@bunkerbill45',
        avatar: '🥫',
        keywords: ['world', 'government', 'news', 'bad', 'economy', 'food', 'water', 'power', 'crazy'],
        responses: [
            "That's exactly what they want you to think.",
            "I have 400 cans of beans that say otherwise.",
            "The grid is going down tomorrow. Be ready.",
            "Don't trust the water supply.",
            "EMP incoming."
        ],
        defaultResponses: [
            "Stockpile now.",
            "I tried to warn everyone.",
            "This is a distraction."
        ]
    },
    {
        id: 'cat_lady',
        name: 'Debra & The Kitties',
        handle: '@debra_purrs',
        avatar: '🐈',
        keywords: ['love', 'happy', 'sad', 'day', 'dog', 'pet', 'friend', 'home', 'sleep'],
        responses: [
            "Mr. Whiskers just threw up on the rug again, but I agree! 😸",
            "Have you tried petting a cat? It fixes everything.",
            "Sorry, busy cleaning the litter box.",
            "Dogs could never understand this level of intellect.",
            "Meow."
        ],
        defaultResponses: [
            "*purrr*",
            "Just me and my 12 babies against the world.",
            "If my cats don't like it, I don't either."
        ]
    },
    {
        id: 'tech_recruiter',
        name: 'Sarah - Hiring 10x Devs',
        handle: '@sarah_hires',
        avatar: '💼',
        keywords: ['job', 'work', 'code', 'react', 'tired', 'boss', 'company'],
        responses: [
            "Hi! Are you open to new opportunities? We need a 10x Rockstar Ninja. 🚀",
            "Would love to connect and chat about our pivot to AI-driven blockchain!",
            "I see you're unhappy. Ready for a pay cut but UNLIMITED PTO?",
            "Please respond to my InMail, I beg you.",
            "Culture fit is everything."
        ],
        defaultResponses: [
            "Let's sync next week.",
            "Pivoting is the new growing.",
            "Looking for passionate rockstars only."
        ]
    },
    {
        id: 'conspiracy_theorist',
        name: 'Aliens R Real',
        handle: '@truth_seeker99',
        avatar: '🛸',
        keywords: ['sky', 'birds', 'moon', 'stars', 'space', 'weird', 'fake'],
        responses: [
            "Birds aren't real, they're government drones.",
            "The moon landing was filmed in a basement in Hollywood.",
            "Have you seen the chemtrails today?",
            "The earth is flat, look at the horizon.",
            "Reptilians are running the show."
        ],
        defaultResponses: [
            "Do your own research.",
            "Wake up sheeple.",
            "The truth is out there."
        ]
    }
];

export const generatePersonaReply = (tweetText) => {
    const lowerText = tweetText.toLowerCase();

    // Pick a random persona
    const persona = PERSONAS[Math.floor(Math.random() * PERSONAS.length)];

    const matchesKeyword = persona.keywords.some(kw => lowerText.includes(kw));

    let replyText = "";
    if (matchesKeyword) {
        replyText = persona.responses[Math.floor(Math.random() * persona.responses.length)];
    } else {
        const pool = Math.random() > 0.5 ? persona.responses : persona.defaultResponses;
        replyText = pool[Math.floor(Math.random() * pool.length)];
    }

    return {
        author: {
            name: persona.name,
            handle: persona.handle,
            avatar: persona.avatar
        },
        text: replyText,
        timestamp: new Date().toISOString()
    };
};
