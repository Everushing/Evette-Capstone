export default function Main (props) {
    const news = {
        title: "The Rise of Decentralized Finance (DeFi): A New Era for Finance?",
        content: `
          Decentralized finance (DeFi) has emerged as one of the most transformative trends in the financial landscape. Unlike traditional finance, which relies on centralized institutions like banks and brokers, DeFi leverages blockchain technology to create a peer-to-peer (P2P) financial ecosystem. This shift towards decentralization promises several potential benefits, including:
      
          * Increased Accessibility: DeFi removes the need for intermediaries, potentially making financial services more accessible to a wider global audience. This includes individuals in regions with limited access to traditional banking systems.
          * Enhanced Transparency: Blockchain technology provides a transparent and immutable record of all transactions on a DeFi platform. This transparency can foster trust and security within the ecosystem.
          * Greater Innovation: The open-source nature of DeFi allows for rapid development and experimentation. This fosters a vibrant community of developers who are constantly pushing the boundaries of what's possible in the financial realm.
          * Democratization of Finance: DeFi empowers individuals to manage their own finances without relying on centralized institutions. Users can lend, borrow, invest, and trade assets in a permissionless and self-custodial manner.
      
          However, DeFi also faces some challenges that need to be addressed for widespread adoption:
      
          * Security Vulnerabilities: DeFi protocols are still under development and can be vulnerable to hacking exploits and smart contract bugs. 
          * Regulatory Uncertainty: Regulatory frameworks surrounding DeFi are still evolving, creating uncertainty for businesses and users alike.
          * Scalability and Usability: Current DeFi platforms can experience scalability issues during periods of high demand, and the user interface might not be as intuitive as traditional financial applications.
      
          Despite these challenges, DeFi holds immense potential to reshape the financial landscape. As the technology matures and regulatory frameworks are established, DeFi has the potential to provide a more inclusive, transparent, and efficient financial system for everyone.
      
          **Beyond the Basics: Exploring DeFi Applications**
      
          The DeFi ecosystem encompasses a wide range of applications, including:
      
          * Decentralized Exchanges (DEXs): Allow users to trade cryptocurrencies directly with each other, eliminating the need for a central authority.
          * Lending and Borrowing Platforms: Facilitate peer-to-peer lending and borrowing of crypto assets, offering higher interest rates to lenders and lower borrowing costs compared to traditional institutions.
          * Yield Farming: Users can deposit their crypto assets into liquidity pools and earn rewards for providing liquidity to DeFi protocols.
          * Decentralized Insurance (DInsurance): Offers peer-to-peer insurance solutions built on blockchain technology.
      
          The possibilities within DeFi are constantly evolving, and new applications are emerging all the time. As the technology continues to develop, DeFi has the potential to disrupt and transform various aspects of our financial system.
        `,
      };

    //   const bannerImage = require('./Bitcoin-news-logo-techno.jpg');
      
    return (
        <div>
        {/* <img src={bannerImage} alt="Welcome Banner" className="welcome-banner" /> */}
        <h1>Welcome to Your Crypto Tracker!</h1>
      <p>Stay on top of the latest cryptocurrency prices with our user-friendly app.</p>
      <h2>Latest News</h2>
    
      <h2><p className="news-title">{news.title}</p></h2>
      <svg width="800" height="800" >
  <image href="7mo.jpg" height="800" width="800" />
</svg>
     <p className="news-content">{news.content}</p>
    
        </div>
    );
}