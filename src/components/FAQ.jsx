
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
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;
        switch (command) {
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
                response = Math.floor(Math.random() * 100);
                break;
            case 'help':
                response = 'You can use any of these commands: '+allowedCommands.join(', ');
                break;
            case 'clear':
                response = null;
                break;
            default:
                response = 'My responses are limited, must have to ask the right question, use command "help" to list FAQ.';
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
