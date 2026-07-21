# Date Syrup Pricing Calculator

A web application developed exclusively for **AmbyDates Foods Limited** to calculate the production cost of date syrup products based on raw material and packaging costs.

## Features

* Calculate the production cost per litre of date syrup.
* Calculate the cost price for each product category.
* Supports:

  * Family Size (1.2 L)
  * Decanter (330 ml)
  * Pouch (30 ml)
  * Business Size (5 L)
* Includes costs for:

  * Date seeds
  * Gas
  * Bottles/Pouches
  * Stickers
  * Sealing nylons
  * Fixed water and electricity cost

---

## Production Formula

### Date Syrup Production

* **3 kg of date seeds = 1 litre of date syrup**
* **0.3125 kg of gas = 1 litre of date syrup**
* **₦500** is added per litre for water and electricity.

### Cost Per Litre

```text
Cost Per Litre =
(Date Seed Cost for 3 kg)
+ (Gas Cost for 0.3125 kg)
+ ₦500
```

### Product Sizes

| Product       | Syrup Used |
| ------------- | ---------: |
| Family Size   |     1.20 L |
| Decanter      |     0.33 L |
| Pouch         |     0.03 L |
| Business Size |     5.00 L |

### Final Cost Price

```text
Cost Price =
Syrup Cost
+ Bottle/Pouch Cost
+ Sticker Cost
+ Sealing Nylon Cost
```

---

## Project Structure

```text
date-syrup-pricing/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

No external libraries or frameworks was required.

---

## How to Run

1. Clone the repository (authorized users only).
2. Open the project folder.
3. Open `index.html` in a modern web browser.

---

## Copyright & Ownership

**Copyright © 2026 AmbyDates Foods Limited. All Rights Reserved.**

This software and its source code are the exclusive intellectual property of **AmbyDates Foods Limited**.

No part of this project may be copied, reproduced, modified, distributed, published, sublicensed, or disclosed to any third party without the prior written permission of AmbyDates Foods Limited.

Access to this repository is restricted to authorized personnel and approved collaborators only.

Unauthorized use, duplication, or distribution of this software may result in legal action.

---

## Confidentiality

This project contains proprietary business logic and pricing calculations developed for the exclusive use of **AmbyDates Foods Limited**. All information contained within this repository should be treated as confidential.

---

## Author

Developed By **DataIntell Technologies** for **AmbyDates Foods Limited**.

---

## Version

**Version:** 1.0.0





## Version 2.0 Update

### Overview

This update improves the pricing calculator by introducing product-specific packaging logic and a more accurate production cost calculation.

### Changes

#### Product Renaming

* **Pouch (30ml)** → **Pocket Pouch (30ml)**
* **Business Bottle (5L)** → **Business Pouch (5L)**

#### Product-Specific Stickers

Each product now uses its own sticker type:

| Product                 | Sticker       |
| ----------------------- | ------------- |
| Family Bottle (1.2L)    | Sticker 1.2L  |
| Decanter Bottle (330ml) | Sticker 330ml |
| Pocket Pouch (30ml)     | Sticker 30ml  |
| Business Pouch (5L)     | Sticker 5L    |

#### Updated Packaging Logic

Packaging costs are now calculated according to the packaging materials actually used for each product.

##### Family Bottle (1.2L)

Includes:

* Bottle
* Sticker 1.2L
* Sealing Nylon

##### Decanter Bottle (330ml)

Includes:

* Bottle
* Sticker 330ml
* Sealing Nylon

##### Pocket Pouch (30ml)

Includes:

* Pocket Pouch
* Sticker 30ml

**Sealing nylon is not included.**

##### Business Pouch (5L)

Includes:

* Business Pouch
* Sticker 5L

**Sealing nylon is not included.**

### Calculation Logic

The application calculates the production cost per litre using:

* 3 kg of date seeds = 1 litre of date syrup
* 0.3125 kg of gas = 1 litre of date syrup
* Fixed water and electricity cost of **₦500 per litre**

The final cost price for each product is calculated as:

```text
Cost Price =
(Syrup Required × Cost Per Litre)
+ Packaging Cost
```

Where the packaging cost is determined by the materials required for that specific product.

### Conditional Calculations

To improve accuracy, the calculator only computes the cost of products with a valid packaging quantity entered.

If a product has no packaging quantity, its values remain:

* Syrup Cost = ₦0.00
* Packaging Cost = ₦0.00
* Total Cost = ₦0.00

### New Features

* Product-specific sticker pricing.
* Updated product names.
* Separate packaging logic for bottles and pouches.
* Automatic currency formatting.
* Calculation history with timestamps.
* Cleaner and more maintainable JavaScript structure.

---

**Version:** 2.0.0

**Last Updated:** July 2026

