import Key from './assets/key.svg';
import globe from './assets/globe.svg';

import FrogsBanner from './assets/Frogs-banner2 2.png';
import Disks from './assets/Disks.png';
import Doc from './assets/Doc.png';
import M from './assets/M.png';

import NFT from './assets/NFT.png';
import Tweet from "./assets/Tweet.svg";
import People from './assets/People.png';
import Chat from './assets/Chat.png';

import Image1 from "./assets/Image1.png";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";
import Image4 from "./assets/Image4.png";

import Discord from "./assets/Discord.svg";
import Facebook from "./assets/Facebook.svg";
import Email from "./assets/Email.svg";
import Forward from "./assets/Forward.svg";

import plus from './assets/plus.png';
import minus from './assets/minus.png';

function initialState () {
    let self = {

        header: {
            Key, globe,
            links: {
                about: "#animationSection",                     // The Header's About link
                contact: "#footer",                   // The Header's Contact link
                signup: "#teamView",                    // The Header's Sign Up link
            },
            services: [
                ["service1", "/"],
                ["service2", "/"],
                ["service3", "/"],
            ],
            pages: [
                ["page1", "/"],
                ["page2", "/"],
                ["page3", "/"],
            ],
            langs: [
                ["lang1", "/"],
                ["lang2", "/"],
                ["lang3", "/"],
            ],
        },

        body: {
            header1: "COME JOIN TO THE",
            header2: "ANGRY FROGS FAMILY",
            body: `The Angry Frog Famiglia is the umbrella organization for the Crypto City's five major Crypto Frog Mafia families.`,
            preText: {
                texts: ["Staking", "Whitepaper", "Metaverse"],
                images: [Disks, Doc, M],
                colors: ["#008FFB", "#CD2AFD", "#F77E21"],
                links: ["/", "/", "/"],
            },
            otherImages: [FrogsBanner]
        },

        navUnderBody: {
            title: "WHY YOU CHOOSING AFF?",
            firstSet: {
                images: [NFT, Chat, People, Tweet],
                stats: ["15k", "90%", "+200k", "+100k"],
                statName: ["NFTs Distributed", "Positive Feedback", "Followers", "Twitter Contest"],
            },
            secondSet: {
                images: [People, Tweet, NFT, Chat,],
                stats: ["+200k", "+100k", "15k", "90%",],
                statName: ["Followers", "Twitter Contest", "NFTs Distributed", "Positive Feedback",],

            }
        },

        clubWelcome: {
            headerText: "WELCOME TO THE LA FAGMILIA CLUB",
            leftSideText: `AFF is a collection of 10,000 non-fungible Angry Frogs tokens (NFTs) — one-of-a-kind digital collectibles. Your Angry Frogs Famiglia NFT acts as La Famiglia identification card.<br />
            Angry Frogs Famiglia are created programmatically from 500 distinct traits, such as the expression, cap, and apparel, among other things. While all frogs are great, some are more rare to pull by than others. The Frogs are stored on the Ethereum blockchain as ERC-721 tokens, and their data is stored on the IPFS. It will cost you 0.07 ETH to purchase one of these Frogs.<br />
            The Angry Frogs Famiglia exists on the Ethereum blockchain, in a city called ‘FROGGY CITY, which is a mix of: ·5000 Citizens (Workers, Normal characters etc…) - 200 Traits ·2000 Businessmen - 100 Traits ·3000 Gangster - 200 Traits`,
            images: [Image1, Image2, Image3, Image4]
        },

        roadMaps: {
            questions: [
                "How can I join the family?",
                "How can i transfer coins to account?",
                "How can i transfer coins to account?",
                "How do i get La Famiglia identification card?", 
                "What is the best way to protect my account?",
                "How can i withdraw my coins?",
            ],
            answers: [
                "NA", 
                "NA", 
                "NA", 
                "NA", 
                "NA", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum dictum nulla, sed vehicula lacus interdum non. Maecenas imperdiet interdum nibh eget suscipit. Nam hendrerit gravida diam, quis lobortis lectus scelerisque nec. Sed id malesuada elit. Suspendisse tristique mi sit amet metus hendrerit mattis.",
            ],
            states: [
                false,
                false,
                false,
                false,
                false,
                false,
            ],
            images: { plus, minus },
            points: [
                [false, "Owners of Angry Frogs will get access to a private discord channel reserved only for them."],
                [false, "The community wallet will be utilized for a number of purposes to ensure the long- term viability of the project."],
                [false, "The AFF Merch Store, which has Limited Edition shirts, hoodies, and other goods, becomes available to members only."],
                [false, "Amazon's public sales have already opened."],
                [false, "Families' Headquarters on the Metaverse, where each family has its own territory."],
                [false, "The more you participate in Discord, the higher your level will be, and as you accomplish certain points, your rank will improve. As a result, you'll start collecting passive Income from AFF secondary market Sales."],
                [false, "Metaverse parties including a variety of artists, musicians, and DJs will be held for the benefit of the community members."],
                [false, "‘Play to Earn’ A game in which participants earn money by playing against other families."],
            ],
        },

        animationSection: {
            links: {
                join: "/",
                roadmap: "/",
            }
        },

        footer: {
            images: [Tweet, Discord, Facebook, Email, Forward],
            items: {
                categories: [
                    ["History", "/"],
                    ["Events", "/"],
                    ["Partners", "/"],
                    ["Payments", "/"],
                ],
                usefulLinks: [
                    ["Payment & Tax", "/"],
                    ["Terms of service", "/"],
                    ["My Account", "/"],
                    ["Discount", "/"],
                ],
                resources: [
                    ["Blog", "/"],
                    ["Whitepaper", "/"],
                    ["Reports", "/"],
                ],
            },
            links: {
                privacyPolicy: "/",
                t_and_c: "/",
            }
        }
    };
    return self;
}

export default initialState;