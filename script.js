const paragraph = [
    "Typing is a must-have skill in today’s digital world. Students type essays, employees write emails, and most of us communicate through chats and messages. Being able to type quickly and accurately can save a lot of time and help prevent errors. At first, it might feel challenging, but with regular practice, your fingers start remembering where the keys are, and it becomes second nature. Everyone makes mistakes in the beginning, so don’t be discouraged. What matters is consistency. Even just 10 minutes a day can improve both speed and accuracy. It’s not just about typing fast—it’s about typing clearly and confidently. Track your progress, stay motivated, and be patient with yourself. Over time, your improvement will show, and typing will become a skill you can rely on in any situation.",
    "Imagine taking a quiet walk along a forest trail. The air is cool and fresh, birds are singing, and every step you take crunches fallen leaves underfoot. You pause for a moment to admire the landscape—rolling hills, tall trees, and sunbeams breaking through the canopy above. Hiking isn't always easy, but nature’s calm rewards each step. It encourages us to slow down, breathe deeply, and truly reflect. In our fast-paced world, such peaceful moments are rare and special. Being outdoors helps us disconnect from screens and reconnect with ourselves. The stillness, the sounds, the fresh air—they all ground you. A simple walk can clear your mind, lift your mood, and spark creativity. Sometimes, just being in nature is enough to feel refreshed and reminded of what really matters in life.",
    "Technology has transformed the way we live, learn, and connect. Not long ago, we had slow dial-up internet and bulky desktop computers. Today, we use sleek smartphones, fast Wi-Fi, and intelligent apps. Even typing has evolved—from loud typewriters to quiet touchscreens. Now, tools like artificial intelligence and virtual reality are reshaping our future. It’s a lot to keep up with, but adaptability is the key. Learning to type well and staying curious about new tools help you stay ahead. Whether you're writing code, researching online, or messaging someone across the globe, good typing saves time and helps you focus. Embrace change and see challenges as opportunities to grow. By mastering basic tech skills and keeping a learner’s mindset, you’re not just surviving the digital age—you’re thriving in it with confidence and creativity.",
    "Rain taps softly on your window, bringing with it a sense of peace. Inside, it’s warm—you might be reading, journaling, or sipping a hot cup of tea. There’s something calming about the rhythm of rain. It encourages us to slow down and appreciate quiet moments. In our busy lives, rainy days offer a gentle pause, a reminder that it's okay not to rush. They create space for reflection, creativity, and comfort. Some people use the time to write, others simply watch the droplets race down the glass. These slow moments can be incredibly meaningful. Let the rain calm your thoughts and reset your pace. In a world that’s always moving, finding stillness is a gift. Rainy days, with their gray skies and gentle sounds, remind us that peace can be found in the simplest things.",
    "Habits shape much of our daily life. Whether it’s brushing your teeth or checking your phone, these repeated actions guide how we live. Building good habits—like regular exercise, reading, or typing practice—helps us grow steadily over time. The secret is repetition. Even a few minutes of focused effort every day can lead to real change. Research shows that it takes about 21 to 30 days to form a new habit, so don’t get discouraged if it feels difficult at first. Focus on small wins and celebrate progress, not perfection. Keep track of what you do, and let those small victories build momentum. With patience and consistency, good habits become part of who you are. Lasting change doesn’t happen overnight, but it’s always possible—just take it one day, one step, and one habit at a time.",
    "The beach offers a calm that’s hard to match. The sun shines brightly overhead, waves gently roll in, and laughter of children fills the air. You sit on a towel, feel the warm sand beneath you, and listen to the soothing sounds of the ocean. Just being there helps you relax, reflect, and recharge. Watching the water move in and out can wash away stress and clear your mind. Whether you swim, walk along the shore, or simply breathe in the salty air, the beach invites you to slow down. Even thinking about the beach can lift your spirits. Nature has a way of helping us reset. In moments of quiet by the sea, we remember the beauty of simplicity. A beach day isn’t just a break—it’s a reminder to enjoy life’s natural, peaceful rhythms.",
    "Starting anything new can feel overwhelming. Maybe you’re learning to type, trying a musical instrument, or picking up a new language. In the beginning, you might feel clumsy or slow, and that's completely normal. Everyone starts somewhere, and progress takes time. What matters most is showing up daily and being kind to yourself through mistakes. Each time you try, you get a little better. Celebrate those small victories—maybe you typed five more words per minute or remembered a few new chords. Every expert began as a beginner. Set small, achievable goals. Practice regularly, and don’t compare your journey to anyone else’s. Over time, you’ll look back and be amazed at your growth. Learning something new is not just about the outcome—it’s about the journey, the effort, and the strength you build along the way.",
    "We live in a digital world where information is always just a click away. We can learn, shop, or connect instantly, but that convenience also brings distractions. Notifications, messages, and constant updates pull our attention in all directions. That’s why finding digital balance is so important. One way to gain control is by improving your typing. Typing faster and more accurately helps you use tech more efficiently, saving time and reducing stress. When you control your tools instead of letting them control you, you become more focused and productive. Typing is a key part of digital literacy, and mastering it can make a big difference in how you work and communicate. Be intentional about your screen time. Practice, improve, and stay mindful as you navigate your digital life—your focus and peace of mind will thank you.",
    "A strong morning routine can set the tone for your entire day. Start by waking up at the same time daily, stretching, drinking water, and avoiding screens for a few minutes. Slow, intentional actions help your mind wake up calmly. Journaling, a short walk, or quiet breathing are all great ways to center yourself. If you’re working on your typing skills, mornings are a perfect time to practice—you’re fresh, alert, and less distracted. The routine doesn’t need to be long or complicated. The key is consistency. Over time, these morning habits build momentum, boost productivity, and improve focus. You’ll likely notice benefits in your mood and mindset throughout the day. Taking a few moments for yourself first thing in the morning can make a powerful difference. Start your day with intention, and you’ll carry that energy forward.",
    "Reading lets you travel without ever leaving your chair. Books take you to distant worlds, introduce new ideas, and help you understand different perspectives. Fiction sparks your imagination, while nonfiction teaches facts and deepens your knowledge. Regular reading builds vocabulary, improves focus, and strengthens your thinking and writing. Even your typing can benefit from reading, as your exposure to words increases. If reading feels challenging, start small—just ten minutes a day is enough. Choose books or topics that truly interest you. Use audiobooks or reading apps if that helps. The key is to make reading a habit. Read before bed, during a break, or while commuting. Over time, you’ll see personal growth without even trying. Books aren’t just for entertainment—they’re tools for learning, empathy, and self-discovery. Open one, and open a world of possibilities."
];


let timer,
    maxtime = 120,
    timeleft = maxtime;
TimeTag = document.querySelector(".time span b")
function RandomParagraphGenerator() {

    let mistakes = 0;

    window.addEventListener("DOMContentLoaded", function () {
        document.getElementById("write-input").focus();
    });

    const randomIndex = Math.floor(Math.random() * paragraph.length);
    const originalParagraph = paragraph[randomIndex];

    // Wrap each character in a span
    const element = document.getElementsByClassName("text")[0];
    element.innerHTML = "";
    for (let char of originalParagraph) {
        const span = document.createElement("span");
        span.textContent = char;
        span.setAttribute("data-error", "false"); // Track mistakes
        element.appendChild(span);
    }

    const spans = element.querySelectorAll("span");

    const inputField = document.getElementById("write-input");
    inputField.value = "";

    inputField.addEventListener("input", function () {
        const typedValue = this.value;


        for (let i = 0; i < spans.length; i++) {
            const typedChar = typedValue[i];
            const span = spans[i];

            if (typedChar == null) {
                span.style.color = "black";
                span.setAttribute("data-error", "false");
            }
            else if (typedChar === originalParagraph[i]) {
                span.style.color = "#5D8736";
                span.setAttribute("data-error", "false");
            }
            else {
                if (span.getAttribute("data-error") === "false") {
                    mistakes++;
                    span.setAttribute("data-error", "true");
                }
                span.style.color = "red";
                span.style.backgroundColor = "#FDAB9E";
            }
        }

        console.log("Mistakes:", mistakes);
        const mistakeDisplay = document.querySelector(".mistake span");
        mistakeDisplay.textContent = mistakes;

    });

    timer = setInterval(initTimer, 1000);

}

RandomParagraphGenerator();

function initTimer() {
    if (timeleft > 0) {
        timeleft--;
        TimeTag.innerText = timeleft;
    }
    else {
        clearInterval(timer)
        alert("Test is over!");
    }
}

document.getElementById('tryagain').addEventListener('click', function() {
    location.reload();
});

