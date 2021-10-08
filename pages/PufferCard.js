import { useState, useEffect } from "react";

export default function PufferCard({ pufferContract, walletAddress }) {
  const [pufferCardData, setPufferCardData] = useState([]);
  // const [pufferContract, setPufferContract] = useState(null)

  async function transfer(obj) {
    console.log(obj);
    if (!obj.tokenId) {
      alert("something went wrong");
    } else {
      // const pufferContract = new window.web3.eth.Contract(ABI, ADDRESS)
      let address = prompt("where would you like to send the NFT to?");

      if (!address) {
        console.log("no address entered");
        // probably worth verifying the addess is valid too...
        return;
      }
      if (address.indexOf("0x") != -1 && address.length == 42) {
        await pufferContract.methods
          .safeTransferFrom(walletAddress, address, obj.tokenId)
          .send({
            from: walletAddress,
          });
      } else {
        alert("invalid address");
      }
    }
  }

  useEffect(async () => {
    const bal = await pufferContract.methods.balanceOf(walletAddress).call();
    const make_range = (s, e) =>
      Array(e - s + 1)
        .fill()
        .map((_, i) => s + i);
    const c = 0;
    const CHUNK_SIZE = 2100; // in case we have tooo many

    const r = make_range(0, Math.min(bal - 1, c + CHUNK_SIZE));

    try {
      const ids = await Promise.all(
        r.map((i) =>
          pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call()
        )
      );
      console.log(ids);

      const objs = await Promise.all(
        ids.map((id) =>
          pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call()
        )
      );
      console.log(objs);

      // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app
      // const attrs = await Promise.all(objs.map((obj) =>
      //   fetch(obj).then((res) => res.json())
      // ));
      // console.log(attrs);

      const attrs = await Promise.all(
        ids.map((id) => fetch(`/api/${id}`).then((res) => res.json()))
      );
      setPufferCardData(attrs.sort((a, b) => a.tokenId - b.tokenId));
      //   setPufferCardData(attrs);
    } catch (e) {
      console.error(e);
    }
  }, []);

  function numberOfPureBloods(attributes) {

  }

  function numberOfHalfBloods(attributes) {

  }

  function numberOfDiamonds(attributes) {
    let diamondCount = 0;
    let halfBloodCount = 0;
    let pureBloodCount = 0;

    //setup purebloods
    const purebloodRed =
      attributes.filter((i) => i.value === "Red").length >= 5;
    const purebloodYellow =
      attributes.filter((i) => i.value === "Yellow").length >= 5;
    const purebloodOrange =
      attributes.filter((i) => i.value === "Orange").length >= 5;
    const purebloodGreen =
      attributes.filter((i) => i.value === "Green").length >= 5;
    const purebloodBlue =
      attributes.filter((i) => i.value === "Blue").length >= 5;
    const purebloodIndigo =
      attributes.filter((i) => i.value === "Indigo").length >= 5;
    const purebloodViolet =
      attributes.filter((i) => i.value === "Violet").length >= 5;

    // BODY PARTS THAT IMPACT BLOOD
    // body
    // spikes
    // fins
    // tail
    // tail fins 

    //setup half breeds
    const fourRed =
      attributes.filter((i) => i.value === "Red").length == 4;
    const fourOrange = 
      attributes.filter((i) => i.value === "Orange").length == 4;
    const fourYellow =
      attributes.filter((i) => i.value === "Yellow").length == 4;
    const fourGreen =
      attributes.filter((i) => i.value === "Green").length == 4;
    const fourBlue =
      attributes.filter((i) => i.value === "Blue").length == 4;
    const fourIndigo =
      attributes.filter((i) => i.value === "Indigo").length == 4;
    const fourViolet =
      attributes.filter((i) => i.value === "Violet").length == 4;


    const threeRed =
      attributes.filter((i) => i.value === "Red").length == 3;
    const threeOrange = 
      attributes.filter((i) => i.value === "Orange").length == 3;
    const threeYellow =
      attributes.filter((i) => i.value === "Yellow").length == 3;
    const threeGreen =
      attributes.filter((i) => i.value === "Green").length == 3;
    const threeBlue =
      attributes.filter((i) => i.value === "Blue").length == 3;
    const threeIndigo =
      attributes.filter((i) => i.value === "Indigo").length == 3;
    const threeViolet =
      attributes.filter((i) => i.value === "Violet").length == 3;
    
    const twoRed =
      attributes.filter((i) => i.value === "Red").length == 2;
    const twoOrange = 
      attributes.filter((i) => i.value === "Orange").length == 2;
    const twoYellow =
      attributes.filter((i) => i.value === "Yellow").length == 2;
    const twoGreen =
      attributes.filter((i) => i.value === "Green").length == 2;
    const twoBlue =
      attributes.filter((i) => i.value === "Blue").length == 2;
    const twoIndigo =
      attributes.filter((i) => i.value === "Indigo").length == 2;
    const twoViolet =
      attributes.filter((i) => i.value === "Violet").length == 2;



if (

    fourRed ||
    fourOrange || 
    fourYellow ||
    fourGreen ||
    fourBlue ||
    fourIndigo ||
    fourViolet ||

    threeRed && twoOrange == true ||
    threeRed && twoYellow == true ||
    threeRed && twoGreen == true ||
    threeRed && twoBlue == true ||
    threeRed && twoIndigo == true ||
    threeRed && twoViolet == true ||

    threeOrange && twoRed == true ||
    threeOrange && twoYellow == true ||
    threeOrange && twoGreen == true ||
    threeOrange && twoBlue == true ||
    threeOrange && twoIndigo == true ||
    threeOrange && twoViolet == true || 
    
    threeYellow && twoOrange == true ||
    threeYellow && twoRed == true ||
    threeYellow && twoGreen == true ||
    threeYellow && twoBlue == true ||
    threeYellow && twoIndigo == true ||
    threeYellow && twoViolet == true ||

    threeGreen && twoOrange == true ||
    threeGreen && twoRed == true ||
    threeGreen && twoYellow == true ||  
    threeGreen && twoBlue == true ||
    threeGreen && twoIndigo == true ||
    threeGreen && twoViolet == true ||

    threeBlue && twoOrange == true ||
    threeBlue && twoRed == true ||
    threeBlue && twoYellow == true ||
    threeBlue && twoGreen == true ||
    threeBlue && twoIndigo == true ||
    threeBlue && twoViolet == true ||

    threeIndigo && twoOrange == true ||
    threeIndigo && twoRed == true ||
    threeIndigo && twoYellow == true ||
    threeIndigo && twoGreen == true ||
    threeIndigo && twoBlue == true ||
    threeIndigo && twoViolet == true ||

    threeViolet && twoOrange == true ||
    threeViolet && twoRed == true ||
    threeViolet && twoYellow == true ||
    threeViolet && twoGreen == true ||
    threeViolet && twoBlue == true ||
    threeViolet && twoIndigo == true 
  ) {
    diamondCount += 1;
    halfBloodCount += 1;
  }

    // if purebloods
    if (
      purebloodBlue ||
      purebloodGreen ||
      purebloodIndigo ||
      purebloodOrange ||
      purebloodRed ||
      purebloodViolet ||
      purebloodYellow
    ) {
      diamondCount += 2;
      pureBloodCount += 1;
    }

    attributes.forEach((attribute) => {
      if (attribute.value.indexOf("Animated") >= 0) diamondCount += 2;
      if (attribute.value.indexOf("Ripped") >= 0) diamondCount += 1;
      if (attribute.value.indexOf("Cigarette") >= 0) diamondCount += 1;
      if (attribute.value.indexOf("Joint") >= 0) diamondCount += 1;
      if (attribute.value.indexOf("Summer") >= 0) diamondCount += 1;
      if (attribute.value.indexOf("Pool") >= 0) diamondCount += 1;
      if (attribute.value.indexOf("Animated Pool") >= 0) diamondCount += 1;
    });
    console.log("diamondcount", diamondCount);
    console.log("purebloodCount", pureBloodCount);
    console.log("halfBloodCount", halfBloodCount);

    // return pureBloodCount;
    // return halfBloodCount;
    return diamondCount; // return a number
  }

  if (pufferCardData.length == 0) {
    return (
      <div id="puffer-pool" className="flex flex-wrap justify-center">
        <div className="puffer flex flex-col">
          <img src="images/loading.gif" alt="loading" className="loading"></img>
          <h2 className="Poppitandfinchsans text-center text-2xl text-black">
            Searching Blockchain...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div id="puffer-pool" className="flex flex-wrap justify-center">
      {pufferCardData.map((obj) => {
        const { attributes } = obj;
        const diamondCount = numberOfDiamonds(attributes);

        const pureBloodCount = numberOfDiamonds(attributes);
        const halfBloodCount = numberOfDiamonds(attributes);

        const diamondArray = new Array(diamondCount).fill("");

        const pureBloodArray = new Array(pureBloodCount).fill("");
        const halfBloodArray = new Array(halfBloodCount).fill("");

        /*  for (let i = 0; i < diamondCount; i++) {
          diamondArray.push("");
        }
 */
        return (
          <div className="puffer flex flex-col" key={obj.tokenId}>
            <div className="rare">
              <span>
                {diamondArray.map((attributes) => {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                })}
                {pureBloodArray.map((attributes) => {
                  return (
                    <img
                        src="images/pureblood.png"
                        alt="pure blood"
                        className="diamond"
                      ></img>
                  );
                })}
                {halfBloodArray.map((attributes) => {
                  return (
                    <img
                        src="images/halfblood.png"
                        alt="half blood"
                        className="diamond"
                      ></img>
                  );
                })}
              </span>
            </div>
            <img
              src={obj.image}
              alt={obj.name}
              onError={(event) => {
                event.target.src = "";
                event.target.src = obj.image;
              }}
            ></img>
            <h3 className="Poppitandfinchsans text-center text-4xl text-black">
              {obj.name}
            </h3>
            <p className="Poppitandfinchsans text-center text-black">Traits:</p>
            <ul className="pufferAttributes ">
              {attributes.map((attributes) => {
                return (
                  <li key={attributes.trait_type}>
                    <span>{attributes.trait_type}:</span> {attributes.value}
                  </li>
                );
              })}
            </ul>
            <button className="transfer" onClick={() => transfer(obj)}>
              <small>Transfer</small>💌
            </button>
          </div>
        );
      })}
    </div>
  );
}
