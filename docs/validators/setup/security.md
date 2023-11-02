---
description: Recommendations for hardening your validator node.
title: Security hardening
---

## Overview

Deploying a validator node in a blockchain network can be a complex and
technically challenging process. Security should be a top priority when
deploying a validator node as it involves managing important
cryptographic keys and assets. This page describes some best practices to ensure that your validator node is secure.

## Use a dedicated server

Running a validator node on a dedicated server can help protect it from attacks. A dedicated server is a computer that is solely used for the validator node and is not used for any other purpose. This reduces the attack surface and makes it easier to control access to the node.

## Limit user access

Limit access to your server to only those who require it. Create user accounts with appropriate permissions and restrict access to the root account:

1. Open the SSH configuration file in a text editor using the following command:

  ```
  sudo vim /etc/ssh/sshd_config
  ```

2. Find the line that starts with `PermitRootLogin` and set its value to `no`. This disables SSH access for the root user.
3. Add the following line to the end of the file to restrict SSH access to specific users:

  ```
  AllowUsers username1 username2
  ```

4. Disable SSH password authentication and use SSH keys only:

  ```
  PubkeyAuthentication yes
  PasswordAuthentication no
  PermitEmptyPasswords no
  ```

5. Save the changes to the SSH configuration file and exit the text editor.
6. Restart the SSH service to apply the changes using the following command:

   ```
   sudo systemctl restart sshd
   ```

7. Create a new SSH key pair on your local machine. Run this on your local machine. You will be asked to type a file name in which to save the key. This is your *keyname*:

   ```
   ssh-keygen -t ed25519
   ```
   
   :::tip
   Here are some ways you can protect your private key:
   * Use a strong passphrase: a strong passphrase will make it much harder for an attacker to gain access to your private key, even if they have access to your computer. Choose a long, complex passphrase that includes a mix of upper and lowercase letters, numbers, and symbols.
   * Store your private key in a secure location: store your private key in a secure location on your computer, such as an encrypted folder or an external storage device. Do not store it in a public location, such as on a cloud storage service or a public directory.
   * Don’t use this key pair for other servers.
   :::

8. Transfer the public key to your remote node. Replace `<keyname.pub>` accordingly.

   ```
   ssh-copy-id -i $PATH/<keyname.pub> username1@staking.node.ip.address
   ```

## Use strong passwords

Use strong passwords for all user accounts, including the root account. Passwords should be complex, long, and unique. Consider using a password manager to generate and store strong passwords.

To generate a strong password with bash shell, use the following command:
```
tr -dc A-Za-z0-9 </dev/urandom | head -c 32 ; echo ''
```

## Enable firewalls

Enable firewalls to restrict inbound and outbound traffic to your server. Configure firewalls to only allow necessary ports and services.

For example, to allow incoming SSH and Ronin traffic, you can run the following commands:

```
sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A INPUT -s <YOUR_IP_ADDRESS>/32 -p tcp -m tcp --dport 22 -m state --state NEW -j ACCEPT
sudo iptables -A INPUT -p tcp -m tcp --dport 30303 -m state --state NEW -j ACCEPT
sudo iptables -A INPUT -p udp -m tcp --dport 30303 -m state --state NEW -j ACCEPT
sudo iptables -A INPUT -j DROP
```

To deny outgoing traffic, run the following:

```
sudo iptables -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A OUTPUT -j DROP
```

To save the rules, install *netfilter-persistent*:

```
sudo apt update -y && apt install netfilter-persistent -y
sudo /etc/init.d/netfilter-persistent save
```

Or you can use the firewall of your cloud provider to control incoming and outgoing traffic, such as Security Group for Amazon EC2 instances, or Firewall Rule for GCP Compute instances.

## Keep up to date with security patches

Keeping your server up-to-date is crucial for maintaining its security and preventing cyber-attacks, regularly monitor system logs to identify potential security issues. Check for unusual or suspicious activity, such as failed login attempts, and take appropriate action if necessary.

To update your system, run the following commands:

```
sudo apt-get update -y && sudo apt dist-upgrade -y
sudo apt-get autoremove
sudo apt-get autoclean
```

Reboot your system to enable the upgrades:

```
sudo reboot
```

## Disable unnecessary services

Disable any unused ports, users and services to reduce the attack surface. Keep your server updated with the latest security patches and updates.

To check running services, use the following command:

```
sudo systemctl status
```

To disable unused services, run these:

```
sudo systemctl stop <service name>
sudo systemctl disable <service name>
```

## Use secure communication

Use secure communication protocols such as HTTPS, SSH, or VPN to communicate with your server. This helps to protect your data from eavesdropping and interception.

1. Set up two-factor authentication for SSH by running this command:

   ```
   sudo apt install libpam-google-authenticator -y
   ```

2. To make SSH use the Google Authenticator PAM module, open the `/etc/pam.d/sshd` file in a text editor using the following command:

   ```
   sudo vim /etc/pam.d/sshd
   ```

3. Add the following line:

   ```
   auth required pam_google_authenticator.so
   ```

4. Restart the `sshd` daemon:

   ```
   sudo systemctl restart sshd
   ```

5. Open the SSH configuration file in a text editor:

   ```
   sudo vim /etc/ssh/sshd_config
   ```

6. Locate `ChallengeResponseAuthentication` and update to `yes`:

   ```
   ChallengeResponseAuthentication yes
   ```

7. Locate `UsePAM` and update to `yes`:

   ```
   UsePAM yes
   ```

8. Run the Google Authenticator command:

   ```
   google-authenticator
   ```

   It will ask you a series of questions, here is a recommended configuration:

   ```
   Make tokens “time-base”": yes
   Update the .google_authenticator file: yes
   Disallow multiple uses: yes
   Increase the original generation time limit: no
   Enable rate-limiting: yes
   ```

## Keep your private keys secure

Your validator node uses private keys to sign transactions and participate in the consensus process. Keep your private keys in a secure location and never share them with anyone.

## Monitor your node

Regularly monitor your validator node for any unusual activity or performance issues. Set up alerts to notify you of any suspicious activity.
