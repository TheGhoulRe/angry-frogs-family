import {useRef, useEffect} from 'react'; 
import SpineItem from './SpineItem';

function AnimationSection({links}) {

    return (
        <div id="animationSection">
            <SpineItem/>
            <div id="foreground">
                <div id="invisibleLeft"></div>
                <div id="invisibleLeft"></div>
                <div id="partiallyVisibleRight">
                    <h2>About the project</h2>
                    <p>
                    AFF is a collection of 10,000 non-fungible Angry Frogs tokens (NFTs) — one-of-a-kind digital collectibles. Your Angry Frogs Famiglia NFT acts as La Famiglia identification card. Angry Frogs Famiglia are created programmatically from 500 distinct traits, such as the expression, cap, and apparel, among other things. While all frogs are great, some are more rare to pull by than others. The Frogs are stored on the Ethereum blockchain as ERC-721 tokens, and their data is stored on the IPFS.
                    </p>
                    
                    <button className="Yes" onClick={() => document.location.assign(links.join) }>Join Us</button>
                    <button className="No" onClick={() => document.location.assign(links.roadmap) }>View Roadmap</button>
                </div>
            </div>
        </div>
    );
}

export default AnimationSection;