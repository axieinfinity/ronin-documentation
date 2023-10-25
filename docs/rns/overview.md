---
description: Home of the Ronin Name Service (RNS) documentation.
sidebar_label: RNS
slug: /rns
title: Ronin Name Service
---

import rnsHome from './assets/rns-home.png';

## Overview

The Ronin Name Service (RNS) is a distributed naming system based on the Ronin blockchain that lets you assign a human-readable `.ron` domain name to your long Ronin address:

* **Turn this:** `ronin:41d8cf42236be14cc7b0c0df519a95822d7ad423`
* **Into this:** `kingofthepirates.ron`

By using the RNS name instead of the Ronin address, you can send funds and NFTs to a human-readable name vs. the long string of numbers and characters. A `.ron` domain name is your unique callsign throughout our entire ecosystem: RNS is integrated with Ronin Wallet, Sky Mavis Account service, App.Axie, Mavis Market, Origins, Homeland, and other apps.

## Domain name categories

There are four categories of domain names in RNS:

* **Regular names:** Unregistered domain names, available on a first-come, first-served basis, with a yearly renewal fee.
* **Auctioned names:** These are high-demand RNS names that may receive large amounts of interest, such as buy.ron and insurance.ron. Sky Mavis distributes such names during an auction as a means to reduce domain name squatting.
* **Protected names:** These are RNS names that we’ve reserved for our official partners and some key community members. For example, Sky Mavis makes sure that `battlebears.ron` isn't available to anyone—except the Battle Bears team. This protects our communities from bad actors.
* **Blacklisted names:** These are RNS names with negative connotations, sensitive themes, or deceptive potential that aren't for sale. An example of a blacklisted name would be `freeaxies.ron` because it can be used to mislead the Axie community. Sky Mavis prohibits the creation of RNS names like these to protect our communities from bad actors.

## Domain pricing

How much an RNS domain name costs depends on the following factors:

* **Renewal fee:** A fee charged for the registration duration, in years. This is a fixed fee based on the length of the domain name. The fee for shorter names is higher than that for longer names.
* Additional fees applied to auctioned domains:
  * **Domain price:** The price for an auctioned domain is set by the market during an auction: the first participant makes a starting bid, then someone else makes a higher bid, and so on.
  * **Tax**: 15% of the auctioned domain's price, paid only . This tax applies only to auctioned names and is charged when you renew the domain name after it expires.

For more information, see [Domain names and pricing](./concepts/names-and-pricing.md).

## Domain tiers

Some RNS names are considered more desirable and valuable than others, and are priced to be more expensive based on market demand. To distinguish these domains, we use the concept of *domain tiers*. You can quickly see the domain's tier based on its color card, which can be yellow, blue, or green.

![tiers](assets/domain-tiers.png)

The tier of a domain name is determined by the following formula: `X = 0.5 x domain price + yearly renewal fee`. As such, there are three domain tiers:

* Tier 1 (yellow): X >= $200
* Tier 2 (blue): $200 > X >= $10
* Tier 3 (green): $10 > X >= 0

Only regular and auctioned domains are tiered according to the formula. Protected names also have a color card—purple—but their prices are determined by Sky Mavis.

## Next steps

* [Register a regular RNS name](rns/register/regular)
* [Buy an RNS name at auction](rns/register/auctioned)
* [Register a protected RNS name](rns/register/protected)