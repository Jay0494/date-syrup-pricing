const formatCurrency = (value) =>
    `₦${Number(value).toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

function getValue(id) {
    return Number(document.getElementById(id).value) || 0;
}

function getUnitCost(totalCost, quantity) {
    return quantity > 0 ? totalCost / quantity : 0;
}

function calculateProduct({
    name,
    litres,
    packageQty,
    packagePrice,
    stickerQty,
    stickerPrice,
    nylonCost,
    syrupPerLitre
}) {
    if (packageQty <= 0) {
        return {
            name,
            syrupCost: 0,
            packagingCost: 0,
            totalCost: 0
        };
    }

    const syrupCost = litres * syrupPerLitre;

    const packagingCost =
        getUnitCost(packagePrice, packageQty) +
        getUnitCost(stickerPrice, stickerQty) +
        nylonCost;

    return {
        name,
        syrupCost,
        packagingCost,
        totalCost: syrupCost + packagingCost
    };
}

function addHistory(products) {
    const tbody = document.getElementById("historyBody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${new Date().toLocaleString()}</td>
        <td>${formatCurrency(products[0].totalCost)}</td>
        <td>${formatCurrency(products[1].totalCost)}</td>
        <td>${formatCurrency(products[2].totalCost)}</td>
        <td>${formatCurrency(products[3].totalCost)}</td>
    `;

    tbody.prepend(row);
}

function calculate() {

    const seedKg = getValue("seedKg");
    const seedPrice = getValue("seedPrice");

    const gasKg = getValue("gasKg");
    const gasPrice = getValue("gasPrice");

    const waterCost = getValue("waterCost");

    if (seedKg <= 0) {
        alert("Please enter the total kilograms of date seeds.");
        return;
    }

    if (gasKg <= 0) {
        alert("Please enter the total kilograms of gas.");
        return;
    }

    // Raw material cost per litre
    const seedCostPerKg = seedPrice / seedKg;
    const gasCostPerKg = gasPrice / gasKg;

    const syrupPerLitre =
        (seedCostPerKg * 3) +
        (gasCostPerKg * 0.3125) +
        waterCost;

    // Common nylon cost (only for bottled products)
    const nylonCost = getUnitCost(
        getValue("nylonPrice"),
        getValue("nylonQty")
    );

    const products = [

        // Family Bottle (USES NYLON)
        calculateProduct({
            name: "Family Bottle (1.2L)",
            litres: 1.2,
            packageQty: getValue("familyBottleQty"),
            packagePrice: getValue("familyBottlePrice"),
            stickerQty: getValue("familyStickerQty"),
            stickerPrice: getValue("familyStickerPrice"),
            nylonCost: nylonCost,
            syrupPerLitre
        }),

        // Decanter (USES NYLON)
        calculateProduct({
            name: "Decanter Bottle (330ml)",
            litres: 0.33,
            packageQty: getValue("decanterBottleQty"),
            packagePrice: getValue("decanterBottlePrice"),
            stickerQty: getValue("decanterStickerQty"),
            stickerPrice: getValue("decanterStickerPrice"),
            nylonCost: nylonCost,
            syrupPerLitre
        }),

        // Pocket Pouch (NO NYLON)
        calculateProduct({
            name: "Pocket Pouch (30ml)",
            litres: 0.03,
            packageQty: getValue("pocketPouchQty"),
            packagePrice: getValue("pocketPouchPrice"),
            stickerQty: getValue("pocketStickerQty"),
            stickerPrice: getValue("pocketStickerPrice"),
            nylonCost: 0,
            syrupPerLitre
        }),

        // Business Pouch (NO NYLON)
        calculateProduct({
            name: "Business Pouch (5L)",
            litres: 5,
            packageQty: getValue("businessPouchQty"),
            packagePrice: getValue("businessPouchPrice"),
            stickerQty: getValue("businessStickerQty"),
            stickerPrice: getValue("businessStickerPrice"),
            nylonCost: 0,
            syrupPerLitre
        })

    ];

    const results = document.getElementById("results");
    results.innerHTML = "";

    products.forEach(product => {

        results.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${formatCurrency(product.syrupCost)}</td>
                <td>${formatCurrency(product.packagingCost)}</td>
                <td>${formatCurrency(product.totalCost)}</td>
            </tr>
        `;

    });

    addHistory(products);
}