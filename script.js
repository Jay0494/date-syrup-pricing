const WATER_ELECTRICITY = 500;

function pieceCost(totalPrice, quantity){
    return quantity === 0 ? 0 : totalPrice / quantity;
}

function calculate(){

    const seedKg = Number(document.getElementById("seedKg").value);
    const seedPrice = Number(document.getElementById("seedPrice").value);

    const gasKg = Number(document.getElementById("gasKg").value);
    const gasPrice = Number(document.getElementById("gasPrice").value);

    const stickerQty = Number(document.getElementById("stickerQty").value);
    const stickerPrice = Number(document.getElementById("stickerPrice").value);

    const nylonQty = Number(document.getElementById("nylonQty").value);
    const nylonPrice = Number(document.getElementById("nylonPrice").value);

    const familyQty = Number(document.getElementById("familyBottleQty").value);
    const familyPrice = Number(document.getElementById("familyBottlePrice").value);

    const decanterQty = Number(document.getElementById("decanterBottleQty").value);
    const decanterPrice = Number(document.getElementById("decanterBottlePrice").value);

    const pouchQty = Number(document.getElementById("pouchQty").value);
    const pouchPrice = Number(document.getElementById("pouchPrice").value);

    const businessQty = Number(document.getElementById("businessBottleQty").value);
    const businessPrice = Number(document.getElementById("businessBottlePrice").value);

    const seedCostPerKg = seedPrice / seedKg;
    const gasCostPerKg = gasPrice / gasKg;

    const syrupPerLitre =
        (seedCostPerKg * 3)
        + (gasCostPerKg * 0.3125)
        + WATER_ELECTRICITY;

    const sticker = pieceCost(stickerPrice, stickerQty);
    const nylon = pieceCost(nylonPrice, nylonQty);

    const familyBottle = pieceCost(familyPrice, familyQty);
    const decanterBottle = pieceCost(decanterPrice, decanterQty);
    const pouch = pieceCost(pouchPrice, pouchQty);
    const businessBottle = pieceCost(businessPrice, businessQty);

    const familyCost =
        (1.2 * syrupPerLitre)
        + familyBottle
        + sticker
        + nylon;

    const decanterCost =
        (0.33 * syrupPerLitre)
        + decanterBottle
        + sticker
        + nylon;

    const pouchCost =
        (0.03 * syrupPerLitre)
        + pouch
        + sticker
        + nylon;

    const businessCost =
        (5 * syrupPerLitre)
        + businessBottle
        + sticker
        + nylon;

    document.getElementById("results").innerHTML = `
    <tr>
        <td>Family 1.2L</td>
        <td>₦${familyCost.toFixed(2)}</td>
    </tr>

    <tr>
        <td>Decanter 330ml</td>
        <td>₦${decanterCost.toFixed(2)}</td>
    </tr>

    <tr>
        <td>Pouch 30ml</td>
        <td>₦${pouchCost.toFixed(2)}</td>
    </tr>

    <tr>
        <td>Business 5L</td>
        <td>₦${businessCost.toFixed(2)}</td>
    </tr>
    `;
}