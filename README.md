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

No external libraries or frameworks are required.

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

Developed for **AmbyDates Foods Limited**.

---

## Version

**Version:** 1.0.0
