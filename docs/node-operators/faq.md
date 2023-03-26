---
description: List of most common questions
---

# Node operator FAQ
Here's a list of most common questions.

### 1. How do I know if my Validator Candidate node is working correctly?
After starting the validator node, run the following command:

```
docker-compose logs node | head -n 20
```

Verify that the account address in the response matches your registered consensus address.

```
node       | Using account acf8bf98d1632e602d0b1761771049af21dd6597
```

Also check the node's availability on https://stats.roninchain.com/.

### 2. How do I know my bridge operator node is working properly?
After starting the bridge, run the following command:

```
docker-compose logs bridge | head -n 20
```

Verify that the operator account address in the response matches your registered bridge operator address. If you're a Governing Validator, also check that the voter account address matches the registered bridge voter address.

```
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Operator account         address=0x2e82D2b56f858f79DeeF11B160bFC4631873da2B
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Voter account            address=0x2295EdAA6BD5c07fB3227628c62Af12248106667
```

Also check the node's availability on https://stats.roninchain.com/.

### 3. How do I generate required private keys? Generating all keys from a single seed seems very unsecure.

### 4. Should the chain governor address be different from the admin address?
We recommend to use different governor and admin addresses to reduce the impact of leaks or losses of either account.

### 5. How to use multisig wallet as a validator?
Multi sigature wallet can add an additional layer of security to manage your node. 

Ronin Validator Portal can be found under Apps tab in [Multisig](https://multisig.roninchain.com). After creating a safe, you can use your safe's address as an admin or governor address. Each action with this safe's address will require multiple confirmation depending on your safe settings.

### 6. Any node health monitoring recommendation?
* Integrate with https://stats.roninchain.com/ for the overall status of the chain's node. If you followed the node setup guides, your node is already there. 
* For each node, the system publishes metrics on port `6060` for Prometheus collection. Integrate a Prometheus-Grafana stack for more granular monitoring of your node's health.

### 7. What ports (if any) have to be open to the outside world?
Keep public ports only for peering and discovery, otherwise keep it internal. Our `docker-compose` configuration already binds RPC port `8545` to `localhost`.

For more information, see [Security hardening](security.md).

### 8. If there is a node/bridge upgrade, how do I get this information? 
Latest version of Ronin and its changelog is always avaible at [Ronin release](https://github.com/axieinfinity/ronin/releases). Stay up-to-date with Ronin upgrades by joining our Discord community. 

### 9. How much time I will have to upgrade my nodes? What happens if I don't update in time?
A typical upgrade is usually backward-compatible, it can contain performance improvements, bugs fix or new features. It's recommended that every node is upgraded as soon as they can. 

However, an upgrade can also be a hardfork which is usually not backward compatible. If your node fails to upgrade before hardfork block occurs, it can cause your node data differ from the network. Therefore, it's important to upgrade node before a hardfork occurs. All Ronin planned hardforks will be announced 7 days in advance on our Discord and [Ronin substack](https://roninblockchain.substack.com/). 

### 11. How do I change the private key in .env?
