---
description: Manage the RNS names that you own.
slug: /apps/rns/manage
title: Manage RNS names
---

## Overview

After you registered your RNS name, managing it is easy. In your account, select the **My domains** tab to access and edit all your registered domain names.

![my-domains](assets/manage/my-domains.png)

Click **Manage** on a domain to open its management page. From there, you can set this domain as primary and renew its registration.

![manage-domain](assets/manage/manage-domain.png)

## Manage your primary name

Your Ronin address can serve as the owner for one or multiple RNS names. You can use one of these domains as your *primary* name. A primary name is the one that shows up across RNS-enabled apps and wallets wherever your Ronin address is usually displayed. You can have only one primary name at a time, but you can change it whenever you want.

### Set a primary name

After you just bought your first RNS domain name, follow these steps to set it as primary.

1. Go to **My domains** and click **Select primary name** at the top.
![first-primary](assets/manage/first-primary.png)
1. Select the domain you want to set as primary.
![first-select](assets/manage/first-select.png)
1. Click **Confirm**.
![first-confirm](assets/manage/confirm-primary.png)
1. Sign the transaction. After that, this name is successfully set as primary.
![success](assets/manage/success-set-as-primary.png)

:::info
You can also set a domain name as primary during the [registration](./guides/register/regular.md).
:::

### Change a primary name

If you have more than one RNS domain, follow these steps to set a different domain as primary.

1. On the **My domains** tab, select the domain name that you want to set as primary, and then click **Manage** to open the domain management page.
![select-domain](assets/manage/select-domain.png)
1. Click **Set as primary**.
![set-as-primary](assets/manage/set-as-primary.png)
1. Click **Confirm**.
![confirm-primary](assets/manage/confirm-primary.png)
1. Sign the transaction. After that, this name is successfully set as primary.
![success](assets/manage/success-set-as-primary.png)

### Remove a primary name

To remove your primary name, select the domain and click **Remove**. After you remove the name, RNS starts to display your Ronin address instead until you set another domain as primary.

:::info
Any transactions sent to your previous primary name will resolve to the owner of the name at that time.
:::

![remove](assets/manage/remove-primary.png)

## Renew your domain

### Grace period

You can renew your domain at any time during the existing registration and within 90 days after the registration expires. This 90-day period is also known as the *grace period*.

To learn when your domain's grace period ends, look for the **Grace ends** on the domain management page.

![grace-period](assets/manage/grace-period.png)

Key points:

* During the grace period, the domain is reserved only for its previous owner to renew it, and it can't be set as primary.
* After the grace period, the domain becomes available for anyone to register. It may still appear in your domain list, but you are no longer its owner. However, you can buy this domain back at any time.

### Renew a regular or protected name

:::tip
To quickly renew your primary name, go to your account, then **My domains > Extend**.
![extend-primary](assets/manage/extend-primary.png)
:::

1. On the **My domains** tab, locate the domain name that you want to renew, and then click **Extend**.
![find-extend-regular](assets/manage/find-extend-regular.png)
1. Select the number of years of registration you want to purchase (1). Review the total amount payable, which includes only the renewal fee times the requested number of years. Click **Extend** to confirm the renewal (2).
![extend-regular](assets/manage/extend-regular.png)
1. Sign the transaction to make payment. Your RNS name registration is successfully renewed.
![success-extend](assets/manage/success-extend.png)

### Renew an auctioned name

1. On the **My domains** tab, locate the auctioned domain name that you want to renew, and then click **Extend**..
![find-extend-auctioned](assets/manage/find-extend-auctioned.png)
1. Select the number of years of registration you want to purchase. You can renew an auctioned domain for up to 3 years at a time, depending on the current expiration date. For example, if you just won the domain at an auction, it comes with a 1-year registration. You can immediately renew this domain for another 2 years, for the total of 3 years.
![extend-auctioned-duration](assets/manage/extend-auctioned-duration.png)
1. Review the total amount payable, which includes the following:
   * Renewal fee times the requested number of years.
   * Reservation fee of 15% of the current domain price. If the domain you're renewing has a valid offer on Mavis Market with a higher price, then the reservation fee is derived from the higher price. A valid offer is the one where the buyer is proven to have the sufficient balance in their wallet. The price is calculated in USD.
![extend-auctioned-fees](assets/manage/extend-auctioned-fees.png)
1. Click **Extend** to confirm the renewal.
![confirm-auctioned-extension](assets/manage/confirm-extend-auctioned.png)
1. Sign the transaction to make payment. Your RNS name registration is successfully renewed.
![success-extend](assets/manage/success-extend.png)

## View your favorite domains

You can add any RNS name to favorites to keep track of its status, for example. To view all your favorite domains, go to the **Favourites** tab.
![favorites](assets/manage/favorites.png)

## See also

* [Trade RNS names](./trade.mdx)
