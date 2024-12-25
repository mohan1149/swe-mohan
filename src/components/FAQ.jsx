
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
const FAQ = () => {
    const allowedCommands = [
        'services',
        'skills',
        'contact',
        'date',
        'random',
        'workflow',
        'pricing',
        'freelance',
        'cms',
        'apps',
        'web',
        'support'

    ];
    const generateJoke = ()  => {
        const jokes = [
            "Why don’t skeletons fight each other? They don’t have the guts.",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why don’t oysters share their pearls? Because they’re shellfish.",
            "I used to play piano by ear, but now I use my hands.",
            "Why was the math book sad? It had too many problems.",
            "I’m reading a book on anti-gravity. It’s impossible to put down.",
            "Why did the scarecrow win an award? Because he was outstanding in his field.",
            "I used to be a baker, but I couldn’t make enough dough.",
            "Parallel lines have so much in common. It’s a shame they’ll never meet.",
            "I told my computer I needed a break, and it froze.",
            "Why can’t you trust an atom? Because they make up everything.",
            "I’m friends with all electricians. We have current connections.",
            "I bought some shoes from a drug dealer. I don’t know what he laced them with, but I’ve been tripping all day.",
            "Why don’t ants get sick? Because they have tiny ant-bodies.",
            "I have a fear of speed bumps, but I’m slowly getting over it.",
            "Why don’t some couples go to the gym? Because some relationships don’t work out.",
            "Why do cows have hooves instead of feet? Because they lactose.",
            "I walked into a bar and ordered a drink. Then I walked out, because it was a really weird bar.",
            "I’m on a whiskey diet. I’ve lost three days already.",
            "I tried to catch some fog yesterday. I mist.",
            "What’s orange and sounds like a parrot? A carrot.",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
            "I once told a joke about a pencil. It had no point.",
            "I started a company selling land mines disguised as prayer mats. Prophets are going through the roof.",
            "Why did the tomato turn red? Because it saw the salad dressing.",
            "How does a penguin build its house? Igloos it together.",
            "I asked my dog what’s two minus two. He said nothing.",
            "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
            "I’m terrified of elevators, so I’m going to start taking steps to avoid them.",
            "I used to hate facial hair… But then it grew on me.",
            "Why don’t some fish play basketball? Because they’re afraid of the net.",
            "I have a joke about construction, but… I’m still working on it.",
            "Why did the chicken go to the seance? To talk to the other side.",
            "I’ve just written a song about tortillas. Actually, it’s more of a rap.",
            "Why did the coffee file a police report? It got mugged.",
            "I don’t trust stairs. They’re always up to something.",
            "What do you call fake spaghetti? An impasta.",
            "I used to play sports. Then I realized you can buy trophies. Now I’m good at everything.",
            "Why was the belt arrested? For holding up a pair of pants.",
            "I had a neck brace fitted a few days ago. I’ve never looked back since.",
            "I just burned 1200 calories. I forgot the pizza in the oven.",
            "Why do seagulls fly over the bay? Because if they flew over the bay, they’d be bagels.",
            "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did.",
            "I used to be a kleptomaniac. But now I take things one day at a time.",
            "Why did the baker go to therapy? Because he kneaded it.",
            "My friend’s bakery burned down. Now his business is toast.",
            "What’s the best way to watch a fly fishing tournament? Live stream.",
            "I bought some antique lace. It’s a bit of a knotty purchase.",
            "Why was the computer cold? It left its Windows open.",
            "Why did the bicycle fall over? Because it was two-tired."
          ];
          
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        return randomJoke;
      }
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;
        switch (command.toLowerCase()) {
            case 'services':
                response = "I offer full-stack web development services, including frontend and backend development, API integration, and mobile app development. I specialize in technologies such as React, Node.js, Express.js, and more..";
                break;
            case 'skills':
                response = "I have over 6.5 years of experience in React, Vue, React Native, HTML, CSS, PHP, Laravel, Drupal, Spring Boot, Nginx, Linux, GIT, Docker and more..";
                break;
            case 'contact':
                response = "You can contact me directly via email at mohan.velegacherla@gmail.com. I'm also available on LinkedIn and other social media platforms";
                break;
            case 'workflow':
                response = "My workflow typically involves an initial consultation to understand the project requirements, followed by planning, design, development, testing, and deployment. I follow agile methodologies to ensure flexibility and iterative improvements";
                break;
            case 'pricing':
                response = "My rates depend on the scope and complexity of the project. I offer competitive pricing and can provide a detailed quote after discussing your specific needs.";
                break;
            case 'freelance':
                response = "Yes, I am available for freelance projects. Please contact me to discuss your requirements and availability.";
                break;
            case 'cms':
                response = "Yes, I have experience with various CMS platforms, including WordPress,Drupal and custom solutions using PHP and Laravel.";
                break;
            case 'apps':
                response = "Yes, I specialize in mobile app development using React Native, creating high-performance apps for both Android and iOS platforms.";
                break;
            case 'web':
                response = "Yes, I develop and design web applications, landing pages, e-commerce applications, CMS applications, SPAs amd PWAs..";
                break;
            case 'support':
                response = 'I will suppprt you in publishing apps to app stores, deploy your application in Cloud platyforms CPanel, Blue Hosting, AWS and GCP';
                break;
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;
            case 'hi':
                response = 'Hello, ';
                break;
            case 'random':
                response = generateJoke();
                break;
            case 'help':
                response = 'You can use any of these commands: '+allowedCommands.join(', ');
                break;
            case 'clear':
                response = null;
                break;
            default:
                response = 'i lost you in void, use command "help" for rescue.';
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };
    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className="g-card">

            <Terminal
                welcomeMessage="have something to ask ?"
                prompt="$"
                pt={{
                    root: 'bg-gray-900 text-white border-round',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-bold'
                }}
            />
            <p className='mt-2'>
                Enter  "<strong>clear</strong>" to clear all commands.
            </p>
        </div>
    );
}
export default FAQ;
