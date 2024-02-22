export default function Navigation() {

  return (
  <div >
    <div className="flex items-center justify-between w-full border-b-2">
      <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
        <a href="/" className="text-4xl text-white hover:text-black m-3">Home</a>
        <a href="https://oasis.cash/collection/0x88fA0495d5E9C1B178EAc1D76DF9D729e39fD8E8" className="text-4xl hover:text-black m-3 text-blau">Buy!</a>
        <a href="/your-pool" className="text-4xl text-white hover:text-black m-3">Your Pool</a>
        <a href="/collection" className="text-4xl text-white hover:text-black m-3">Collection</a>
        {/* <a href="https://twitter.com/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TWITTER</a> */}
        <a href="/rarity" className="text-4xl text-white hover:text-black m-3">Rarity</a>
        <a href="https://t.me/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TELEGRAM</a>
      </nav>
    </div>
  </div>
  )
}