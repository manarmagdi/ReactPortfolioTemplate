import manar from "../img/manar.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Manar",
    lastName: "Magdy",
    initials: "M&m", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Cloud DevOps Engineer",
    selfPortrait: manar, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👩🏻‍🎓',
            text: 'Graduated from Information Technology Institute ( ITI )'
        },
        {
            emoji: '📍',
            text: 'Lives in Cairo - Egypt'
        },
        {
            emoji: "💼",
            text: "Cloud DevOps Engineer"
        },
        {
            emoji: "📧",
            text: "maanaarmagdii@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.cohttps://www.facebook.com/share/16ShFAjPQX/?mibextid=wwXIfrm",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },

        {
            link: "https://github.com/manarmagdi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "http://www.linkedin.com/in/manar-magdy-468923236com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Manar Magdy. I'm a Cloud DevOps Engineer with a passion for automation, scalability, and solving complex problems in the cloud. I earned my CKA certification and trained at ITI in Cloud Architecture, diving deep into DevOps, Linux, Kubernetes, and infrastructure-as-code. When I'm not building resilient systems, you’ll find me exploring the latest in AI or fine-tuning my personal projects. I believe the cloud isn’t the future — it’s the now. You should definitely hire me!",
    skills:
    {
        proficientWith: ['AWS', 'Azure', 'git', 'github', 'GitHub Actions', 'Ansible', 'Terraform', 'Kubernetes'],
        exposedTo: ['Kubernetes', 'python', 'Linux']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Drawing',
            emoji: '✍'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: " 2-Tier Web App Deployment on AWS with Terraform and Docker",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/manarmagdi/AWS-Automation-with-Terraform", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "High Availability Database Cluster",
            live: "https://paytonpierce.dev",
            source: "https://github.com/manarmagdi/galera-cluster-setup",
            image: mock2
        },

    ]
}